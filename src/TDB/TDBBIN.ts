import * as TDBF from './TDBF'
export * from './TDBF'
import fs = require('fs')

export function LoadLDBbin(tdbFile, callback: Function) {
    let start = Date.now()
    fs.readFile(tdbFile, (err: NodeJS.ErrnoException, data: Buffer) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("loadTDBFile %s,time:%d", tdbFile, Date.now() - start)
            let tdb = new TDB(data)
            let end = new Date()
            console.log("parse TDB, time:%d", start = Date.now() - start)
            callback(tdb)
        }
    })
}
/**
 * 
 */
export class TDB extends TDBF.BIN {
    public fileInfo: TDBF.文件信息;
    indexTables: Array<TDBF.数据区索引表>;
    public safeData: TDBF.安全信息区;
    public DeviceInfo: Map<string, Array<TDBF.IDataUnit>>;
    constructor(data: Buffer) {
        super()
        this.获取文件信息(data);
        this.获取配置信息(data);
        this.加载各设备的数据(data);
        this.建立索引();
    }
    获取文件信息(data: Buffer) {
        let startIndex = new TDBF.RefInt();
        this.fileInfo = new TDBF.文件信息();
        this.fileInfo.DumpFormByte(this, data, startIndex)
        this.indexTables = new Array<TDBF.数据区索引表>()
        for (let i = 0; i < this.fileInfo.UnitNumber; i++) {
            let indextabl = new TDBF.数据区索引表();
            indextabl.DumpFormByte(this, data, startIndex);
            this.indexTables.push(indextabl);
        }
        if (this.fileInfo.IDS_VERSION !== TDBF.FormateVersion.c) {
            console.warn("TS版本与文件版本不一致,TS:%s,TDB:%s", TDBF.FormateVersion.t, this.fileInfo.IDS_VERSION.toString(16))
        }
        //获取安全区信息
        this.safeData = new TDBF.安全信息区();
        startIndex.Rest();
        this.safeData.DumpFormByte(this, data, startIndex);
        startIndex.Set(this.fileInfo.FileSize - startIndex.value);
        this.safeData.DumpFormByte(this, data, startIndex);
    }
    private 获取配置信息(data: Buffer) {
        let configIndex = this.indexTables[0];
        let startIndex = new TDBF.RefInt();
        startIndex.Set(configIndex.UnitOffset)
        do {
            let confUnit = new TDBF.配置分区();
            confUnit.DumpFormByte(this, data, startIndex);
            let cfgtype = TDBF.CfgType[confUnit.CfgType]
            cfgtype = cfgtype.replace(/配置/i, '')
            for (var cfgItem of confUnit.m_CfgItemes) {
                this.config[`${cfgtype}_${cfgItem.CfgName}`] = cfgItem.CfgValue;
            }

        } while (startIndex.value < configIndex.UnitOffset + configIndex.CellSize);
    }
    private 加载各设备的数据(data: Buffer) {
        let startIndex = new TDBF.RefInt();
        this.DeviceInfo = new Map<string, Array<TDBF.IDataUnit>>();
        for (let j = 1; j < this.indexTables.length; j++) {
            let indextabl = this.indexTables[j];
            let devArray, devClass;

            if (!TDBF.UnitMap.hasOwnProperty(indextabl.UnitType)) {
                console.log("不支持类型:%d", indextabl.UnitType)
                continue
            }
            devClass = TDBF.UnitMap[indextabl.UnitType]
            devArray = new Array<TDBF.IDataUnit>()
            for (let i = 0; i < indextabl.CellNumber; i++) {
                startIndex.Set(indextabl.UnitOffset + i * indextabl.CellSize);
                try {
                    let dev = new devClass()
                    dev.DumpFormByte(this, data, startIndex);
                    devArray.push(dev);
                }
                catch (error) {
                    console.log(error)
                }
            }
            this.DeviceInfo.set(devClass.name, devArray)
        }
    }

    private 建立索引() {
        for (let devs of this.DeviceInfo.values()) {
            for (let dev of devs) {
                dev.IndexObj(this)
            }
        }
    }
}


export interface LocPoint {
    SegmentID: number,
    Offset: number
}
export interface VectorLine {
    start: LocPoint,
    end: LocPoint,
    dir: TDBF.Direction
}

export class LocPointP {
    SegmentID: number;
    Offset: number;
    SegmentObj: TDBF.SegmentEx
    static FormLocPoint(loc: LocPoint, dataMap: Map<number, TDBF.IDataUnit>): LocPointP {
        let res = new LocPointP()
        res.Offset = loc.Offset
        res.SegmentID = loc.SegmentID
        res.SegmentObj = dataMap.get(loc.SegmentID) as TDBF.SegmentEx
        return res
    }

}
export class VectorLineP {
    dir: TDBF.Direction
    startP: LocPointP
    endP: LocPointP
    static FormVectorLine(vector: VectorLine, dataMap: Map<number, TDBF.IDataUnit>): VectorLineP {
        let res = new VectorLineP()
        res.dir = vector.dir
        res.startP = LocPointP.FormLocPoint(vector.start, dataMap)
        res.endP = LocPointP.FormLocPoint(vector.end, dataMap)
        return res
    }
    getNormalLine(): VectorLineP {
        let res = new VectorLineP()
        Object.assign(res, this)
        res.dir = TDBF.Direction.DIR_DN
        if (this.dir = TDBF.Direction.DIR_UP) {
            res.startP = this.endP
            res.endP = this.startP
        }
        return res
    }

}
