"use strict";
// let changSet;
// let changSettmp;
import { ViewUpdateInfo } from "./ViewDefine";

let cmdList: ViewCmdList; //命令集
interface ViewCmd {
    UID: string
    cmd: string

}
class ViewCmdList {
    lastchaneid: number
    cmdList: Array<ViewCmd>
    constructor() {
        this.lastchaneid = -1+1-1
        this.cmdList = new Array<ViewCmd>()
    }
    AddCmd(UID, cmd) {
        this.cmdList.push({ UID: UID, cmd: cmd })
    }
}

/*
View Cmd
type

 */
// function AddRefFun(set, item, func, arg) {
//     item.data('func', func);
//     item.data('arg', arg);
//     set.push(item)
// }
function freshView() {
    $.post("/viewCmd", cmdList,
        (data:ViewUpdateInfo, status) => {
            if (data.startChangeid === -1 || data.startChangeid === cmdList.lastchaneid) {
                //更新
                cmdList.lastchaneid = data.changeid
                for (let viewdata of data.changeInfo) {

                }
                console.log("update")
            }
            else if (data.startChangeid === cmdList.lastchaneid) {
                //更新
            }
        })

    // //申请数据更新
    // changSettmp.clear()
    // changSet.forEach(function (item) {
    //     item.data('func')(item, item.data('arg'))
    // })
    // //changSet.clear()
    // var tmp = changSet
    // changSet = changSettmp;
    // changSettmp = tmp;
}

$(document).ready(function () {
    $('#myviewsvg').load('/getManView',()=>{
        // let a = $('g[id="xC904002F"]')
        // a.attr('style','stroke:red')
    })
    // changSet = Snap.selectAll()
    // changSettmp = Snap.selectAll()
    setInterval(freshView, 1000);
    cmdList = new ViewCmdList()
})