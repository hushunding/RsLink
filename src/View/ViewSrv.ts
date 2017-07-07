import URL = require('url')
import Express = require('express');
import bodyParser = require('body-parser');
import pathLib = require('path')
import { ViewData, ChangeLog, ViewUpdateInfo, ViewCmdList } from "./ViewDefine";

export class ViewSrv {
    //两个列表，一个差异列表，一个最终状态列表
    private TotalDeviceInfo: Map<string, ViewData>
    private changeFifo: Array<ChangeLog>
    private maxChangeLogLen: number = 100
    private srvName: string
    private port: number
    private currChange = 1
    constructor(srvName: string, port: number, ) {
        this.srvName = srvName
        this.port = port
        this.TotalDeviceInfo = new Map<string, ViewData>()
        this.changeFifo = new Array<ChangeLog>()
    }
    addViewChange(viewdata: ViewData) {
        let item = this.TotalDeviceInfo.get(viewdata.UID)
        if (item === null || !item.isEqual(viewdata)) {
            let changeNode = new ChangeLog()
            changeNode.changeid = this.currChange
            changeNode.changeInfo = viewdata
            this.TotalDeviceInfo.set(viewdata.UID, viewdata)
        }
    }
    start(svgdata: string) {
        let app = Express();
        app.use("/MyView", Express.static('MyView'));
        app.use("/dist", Express.static('dist'));
        app.use("/src", Express.static('src'));
        app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
        app.use(bodyParser.json()); // for parsing application/json
        app.get('/getManView', (req: Express.Request, res: Express.Response) => res.send(svgdata))
        app.post('/viewCmd', (req: Express.Request, res: Express.Response) => this.defualtResp(req, res))
        let server = app.listen(this.port, function () {
            let host = server.address();
            console.log(`设备${this.srvName}的View地址为 http://%s:%s`, host.address, host.port);
        })
    }

    private defualtResp(req: Express.Request, res: Express.Response) {
        let updateType = 'all'
        let cmdList = req.body as ViewCmdList
        let resInfo = new ViewUpdateInfo()
        if (this.changeFifo.length > 0 && cmdList.lastchaneid >= this.changeFifo[0].changeid
            && cmdList.lastchaneid <= this.changeFifo[this.changeFifo.length - 1].changeid) {
            resInfo.startChangeid = cmdList.lastchaneid
            for (let cl of this.changeFifo) {
                if (cl.changeid > resInfo.startChangeid) {
                    resInfo.changeid = cl.changeid
                    resInfo.changeInfo.set(cl.changeInfo.UID, cl.changeInfo)
                }
            }
        }
        else {
            resInfo.startChangeid = -1
            resInfo.changeid = this.changeFifo.length > 0 ? this.changeFifo[this.changeFifo.length - 1].changeid : -1
            resInfo.changeInfo = this.TotalDeviceInfo
        }

        res.send(resInfo)
    }
    private HdlViewCmd()
    {}
}


