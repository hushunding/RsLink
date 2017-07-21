import { TDBXml } from './TDBXml';
import { ViewSrv } from "./View/ViewSrv";
import { Config } from "./Config"
import { TrainInfo } from "./TrainInfo"
import { CreatMsgSrv, RemoteInfo } from "./msgSrc"
import { Polyline } from "./View/ViewBase";
import { LoadLDBbin, TDB, VectorLineP, Direction, VectorLine } from "./TDB/TDBBIN";
import { GetObjListBetween } from "./TDB/TDBAg"
import { VectorLineToViewPolyLine } from "./TDB_View";
import { ViewSvgMap } from "./View/ViewSvgMap";


let ViewSvgData, ViewRawData, ViewObjMap: Map<number, object>
let bindbDate: TDB;

function isInited(): Boolean {
    for (let obj of [bindbDate, ViewObjMap]) {
        if (obj === undefined) {
            return false
        }
    }
    return true
}

class ATSTrainInfo extends TrainInfo {
    ViewTrainLocation: Polyline
    locp: VectorLineP
    transformToViewLoc(): Polyline {
        this.ViewTrainLocation = VectorLineToViewPolyLine(this.locp, ViewObjMap)
        return this.ViewTrainLocation
    }
}
let TrainArray: Array<TrainInfo>
//准备站场数据
let atsCfg = Config.ATS
//加载二进制数据
let tdbFile = atsCfg.bindbFilePath;
LoadLDBbin(tdbFile, (tdbbin: TDB) => {
    bindbDate = tdbbin
})

//初始化View监听
let viewSrv = new ViewSrv(atsCfg.name, atsCfg.viewPort);
let viewsvgMap = new ViewSvgMap()

//加载xml数据
let viewdata = new TDBXml(atsCfg.dbFilePath, [result =>{
    viewsvgMap.DumpData(result);
    viewSrv.start(viewsvgMap.SVGMap, viewsvgMap.ObjMap)
}]);


//监听列车信息
CreatMsgSrv("ATS.CC", atsCfg.CCPort, null)

function CCMsgHdl(msg: Buffer, rinfo: RemoteInfo) {
    msg.toJSON()
}

function TestTrainLoc() {
    let train = new ATSTrainInfo()
    train.VUID = 1
    train.loc = {
        start: { SegmentID: 0xC904005C, Offset: 100000 },
        end: { SegmentID: 0xC904005C, Offset: 100 },
        dir: Direction.DIR_UP
    }
    train.locp = VectorLineP.FormVectorLine(train.loc, bindbDate.dataMap)
    //测试列车位置
    setInterval(() => {

    }, 1000)
}