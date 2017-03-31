"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
//本文件根据ZHKJ-YF-BiTRACON800-IIDS-03-1 BiTRACON 800轨道数据库设计规格书.docx自动生成，请不要直接编辑
//本文件用于定义各数据块的结构
const TDBBase_1 = require("./TDBBase");
__export(require("./TDBBase"));
exports.FormateVersion = { t: 'V2.3', c: 131840 };
var BOOL;
(function (BOOL) {
    BOOL[BOOL["TRUE"] = 87] = "TRUE";
    BOOL[BOOL["FALSE"] = 98] = "FALSE";
})(BOOL = exports.BOOL || (exports.BOOL = {}));
;
var Direction;
(function (Direction) {
    Direction[Direction["DIR_NONE"] = 0] = "DIR_NONE";
    Direction[Direction["DIR_UP"] = 90] = "DIR_UP";
    Direction[Direction["DIR_DN"] = 165] = "DIR_DN";
    Direction[Direction["DIR_BOTH"] = 170] = "DIR_BOTH";
})(Direction = exports.Direction || (exports.Direction = {}));
;
var Side;
(function (Side) {
    Side[Side["SIDE_NONE"] = 0] = "SIDE_NONE";
    Side[Side["SIDE_LEFT"] = 90] = "SIDE_LEFT";
    Side[Side["SIDE_RIGHT"] = 165] = "SIDE_RIGHT";
    Side[Side["SIDE_BOTH"] = 170] = "SIDE_BOTH";
})(Side = exports.Side || (exports.Side = {}));
;
var SwitchIndication;
(function (SwitchIndication) {
    SwitchIndication[SwitchIndication["SW_NORMAL"] = 170] = "SW_NORMAL";
    SwitchIndication[SwitchIndication["SW_RESERVE"] = 85] = "SW_RESERVE";
    SwitchIndication[SwitchIndication["SW_MID"] = 170] = "SW_MID";
    SwitchIndication[SwitchIndication["SW_LEFT_1"] = 161] = "SW_LEFT_1";
    SwitchIndication[SwitchIndication["SW_RIGHT_1"] = 81] = "SW_RIGHT_1";
    SwitchIndication[SwitchIndication["SW_LEFT_2"] = 162] = "SW_LEFT_2";
    SwitchIndication[SwitchIndication["SW_RIGHT_2"] = 82] = "SW_RIGHT_2";
    SwitchIndication[SwitchIndication["SW_LEFT_3"] = 163] = "SW_LEFT_3";
    SwitchIndication[SwitchIndication["SW_RIGHT_3"] = 83] = "SW_RIGHT_3";
    SwitchIndication[SwitchIndication["SW_LEFT_4"] = 164] = "SW_LEFT_4";
    SwitchIndication[SwitchIndication["SW_RIGHT_4"] = 84] = "SW_RIGHT_4";
})(SwitchIndication = exports.SwitchIndication || (exports.SwitchIndication = {}));
;
var TrainConsist;
(function (TrainConsist) {
    TrainConsist[TrainConsist["TRAIN_CONSIST_1"] = 17] = "TRAIN_CONSIST_1";
    TrainConsist[TrainConsist["TRAIN_CONSIST_2"] = 34] = "TRAIN_CONSIST_2";
    TrainConsist[TrainConsist["TRAIN_CONSIST_3"] = 51] = "TRAIN_CONSIST_3";
    TrainConsist[TrainConsist["TRAIN_CONSIST_4"] = 68] = "TRAIN_CONSIST_4";
    TrainConsist[TrainConsist["TRAIN_CONSIST_5"] = 85] = "TRAIN_CONSIST_5";
    TrainConsist[TrainConsist["TRAIN_CONSIST_6"] = 102] = "TRAIN_CONSIST_6";
    TrainConsist[TrainConsist["TRAIN_CONSIST_7"] = 119] = "TRAIN_CONSIST_7";
    TrainConsist[TrainConsist["TRAIN_CONSIST_8"] = 136] = "TRAIN_CONSIST_8";
})(TrainConsist = exports.TrainConsist || (exports.TrainConsist = {}));
;
class 文件信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.FileID = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 4);
        this.IDS_VERSION = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 3);
        this.LineName = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 5);
        this.TDB_VERSION = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 36);
        this.FileSize = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.UnitNumber = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
    }
    IndexObj(bin) {
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "文件信息";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.文件信息 = 文件信息;
;
class 数据区索引表 {
    DumpFormByte(bin, buf, startIndex) {
        this.UnitType = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.UnitOffset = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.CellSize = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.CellNumber = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
    }
    IndexObj(bin) {
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "数据区索引表";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.数据区索引表 = 数据区索引表;
;
class 系统间版本校验信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.SrcDevID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.DstDevID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.CheckCode = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
    }
    IndexObj(bin) {
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "系统间版本校验信息";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.系统间版本校验信息 = 系统间版本校验信息;
;
class 安全信息区 {
    DumpFormByte(bin, buf, startIndex) {
        this.Creator_Version = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 36);
        this.Creator_Date = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 12);
        this.Creator_Time = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 16);
        this.Creator_CRC = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Checker_Version = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 36);
        this.Checker_Date = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 12);
        this.Checker_Time = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 16);
        this.Checker_CRC = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
    }
    IndexObj(bin) {
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "安全信息区";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.安全信息区 = 安全信息区;
;
class 配置分区_CfgItem {
    DumpFormByte(bin, buf, startIndex) {
        this.CfgName = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 36);
        this.CfgValue = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
    }
    IndexObj(bin) {
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "配置分区_CfgItem";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
;
class 配置分区 {
    DumpFormByte(bin, buf, startIndex) {
        this.CfgType = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        {
            this.m_CfgItemes = new Array();
            let len = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
            let len2 = len;
            for (let i = 0; i < len2; i++) {
                let tmp = new 配置分区_CfgItem();
                tmp.DumpFormByte(bin, buf, startIndex);
                if (i < len)
                    this.m_CfgItemes.push(tmp);
            }
        }
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
    }
    IndexObj(bin) {
        for (let o of this.m_CfgItemes) {
            o.IndexObj(bin);
        }
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "配置分区";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.配置分区 = 配置分区;
;
var CfgType;
(function (CfgType) {
    CfgType[CfgType["TDB\u914D\u7F6E"] = 1] = "TDB\u914D\u7F6E";
    CfgType[CfgType["\u7EBF\u8DEF\u914D\u7F6E"] = 2] = "\u7EBF\u8DEF\u914D\u7F6E";
    CfgType[CfgType["\u5217\u8F66\u914D\u7F6E"] = 3] = "\u5217\u8F66\u914D\u7F6E";
    CfgType[CfgType["PSD\u914D\u7F6E"] = 4] = "PSD\u914D\u7F6E";
    CfgType[CfgType["\u8BA1\u8F74\u914D\u7F6E"] = 5] = "\u8BA1\u8F74\u914D\u7F6E";
    CfgType[CfgType["\u4FE1\u6807\u914D\u7F6E"] = 6] = "\u4FE1\u6807\u914D\u7F6E";
    CfgType[CfgType["\u901A\u4FE1\u914D\u7F6E"] = 7] = "\u901A\u4FE1\u914D\u7F6E";
    CfgType[CfgType["\u8FD0\u8425\u914D\u7F6E"] = 8] = "\u8FD0\u8425\u914D\u7F6E";
    CfgType[CfgType["\u4E92\u8054\u4E92\u901A\u914D\u7F6E"] = 9] = "\u4E92\u8054\u4E92\u901A\u914D\u7F6E";
})(CfgType = exports.CfgType || (exports.CfgType = {}));
;
class 区段信息_Segment {
    DumpFormByte(bin, buf, startIndex) {
        this.SegmentID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.SegmentAttribute = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
    }
    IndexObj(bin) {
        this.SegmentObj = bin.dataMap.get(this.SegmentID);
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "区段信息_Segment";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
;
class 区段信息_Switch {
    DumpFormByte(bin, buf, startIndex) {
        this.SwitchID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
    }
    IndexObj(bin) {
        this.SwitchObj = bin.dataMap.get(this.SwitchID);
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "区段信息_Switch";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
;
class 区段信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Identifier = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 16);
        this.NormalDirection = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.CapacityLimit = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.STDEType = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        {
            this.m_Segmentes = new Array();
            let len = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
            let len2 = bin.config['TDB_MAX_SEG_NUM_IN_SEC'];
            for (let i = 0; i < len2; i++) {
                let tmp = new 区段信息_Segment();
                tmp.DumpFormByte(bin, buf, startIndex);
                if (i < len)
                    this.m_Segmentes.push(tmp);
            }
        }
        {
            this.m_Switches = new Array();
            let len = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
            let len2 = bin.config['TDB_MAX_SW_NUM_IN_SEC'];
            for (let i = 0; i < len2; i++) {
                let tmp = new 区段信息_Switch();
                tmp.DumpFormByte(bin, buf, startIndex);
                if (i < len)
                    this.m_Switches.push(tmp);
            }
        }
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        bin.dataMap.set(this.UID, this);
    }
    IndexObj(bin) {
        for (let o of this.m_Segmentes) {
            o.IndexObj(bin);
        }
        for (let o of this.m_Switches) {
            o.IndexObj(bin);
        }
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "区段信息";
        id = this.UID;
        Name = this.Identifier;
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.区段信息 = 区段信息;
;
class 线段信息_LinkZC {
    DumpFormByte(bin, buf, startIndex) {
        this.LinkZC_UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LinkZC_Direction = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
    }
    IndexObj(bin) {
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "线段信息_LinkZC";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
;
class 线段信息_LinkCBI {
    DumpFormByte(bin, buf, startIndex) {
        this.LinkCBI_UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LinkCBI_Direction = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
    }
    IndexObj(bin) {
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "线段信息_LinkCBI";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
;
class 线段信息_LinkATS {
    DumpFormByte(bin, buf, startIndex) {
        this.LinkATS_UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LinkATS_Direction = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
    }
    IndexObj(bin) {
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "线段信息_LinkATS";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
;
class 线段信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Identifier = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 16);
        this.LineNumber = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.LineNo = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.StartDevID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.EndDevID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Length = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.EndLinkObjectID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.StartLinkObjectID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.SignalID_DN = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.SignalID_UP = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.RouteSignalID_DN = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.RouteSignalID_UP = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.PlatformID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.DirectionReference = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.LocationType = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.TurnBackAttrib = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.TurnBackZoneID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.UTOAttrib = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.DestIdentifier = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.EI_CommID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.EI_SignalID_DN = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.EI_SignalID_UP = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.OwnerZC_UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        {
            this.m_LinkZCes = new Array();
            let len = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
            let len2 = bin.config['TDB_MAX_LINK_ZC_NUM_IN_SEG'];
            for (let i = 0; i < len2; i++) {
                let tmp = new 线段信息_LinkZC();
                tmp.DumpFormByte(bin, buf, startIndex);
                if (i < len)
                    this.m_LinkZCes.push(tmp);
            }
        }
        this.OwnerCBI_UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        {
            this.m_LinkCBIes = new Array();
            let len = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
            let len2 = bin.config['TDB_MAX_LINK_CBI_NUM_IN_SEG'];
            for (let i = 0; i < len2; i++) {
                let tmp = new 线段信息_LinkCBI();
                tmp.DumpFormByte(bin, buf, startIndex);
                if (i < len)
                    this.m_LinkCBIes.push(tmp);
            }
        }
        this.OwnerATS_UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        {
            this.m_LinkATSes = new Array();
            let len = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
            let len2 = bin.config['TDB_MAX_LINK_ATS_NUM_IN_SEG'];
            for (let i = 0; i < len2; i++) {
                let tmp = new 线段信息_LinkATS();
                tmp.DumpFormByte(bin, buf, startIndex);
                if (i < len)
                    this.m_LinkATSes.push(tmp);
            }
        }
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        bin.dataMap.set(this.UID, this);
    }
    IndexObj(bin) {
        this.EndLinkObjectObj = bin.dataMap.get(this.EndLinkObjectID);
        this.SignalObj_DN = bin.dataMap.get(this.SignalID_DN);
        this.SignalObj_UP = bin.dataMap.get(this.SignalID_UP);
        this.RouteSignalObj_DN = bin.dataMap.get(this.RouteSignalID_DN);
        this.RouteSignalObj_UP = bin.dataMap.get(this.RouteSignalID_UP);
        this.PlatformObj = bin.dataMap.get(this.PlatformID);
        this.EI_SignalObj_DN = bin.dataMap.get(this.EI_SignalID_DN);
        this.EI_SignalObj_UP = bin.dataMap.get(this.EI_SignalID_UP);
        for (let o of this.m_LinkZCes) {
            o.IndexObj(bin);
        }
        for (let o of this.m_LinkCBIes) {
            o.IndexObj(bin);
        }
        for (let o of this.m_LinkATSes) {
            o.IndexObj(bin);
        }
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "线段信息";
        id = this.UID;
        Name = this.Identifier;
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.线段信息 = 线段信息;
;
class 道岔信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Identifier = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 16);
        this.PointLinkObjID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.NormalLinkObjID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.ReserveLinkObjID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.SwitchSharp = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.NormalSideSR = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 2);
        this.ReserveSideSR = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 2);
        this.ClashLength = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Flexibility = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.NormalSideLen = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.ReserveSideLen = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.NormalSideSRF = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 2);
        this.ReserveSideSRF = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 2);
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        bin.dataMap.set(this.UID, this);
    }
    IndexObj(bin) {
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "道岔信息";
        id = this.UID;
        Name = this.Identifier;
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.道岔信息 = 道岔信息;
;
class 信号机信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Identifier = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 16);
        this.LocSegmentID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LocSegmentOffset = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.ProtectDirection = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.ProtectSegmentID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.PreciseStopFlag = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.LCRouteRelTime = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 2);
        this.OLTotalPreRelTime = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 2);
        this.OLTotalBerthPreRelTime = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 2);
        this.LCRouteImdRelTime = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 2);
        this.OLLenght = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        bin.dataMap.set(this.UID, this);
    }
    IndexObj(bin) {
        this.LocSegmentObj = bin.dataMap.get(this.LocSegmentID);
        this.ProtectSegmentObj = bin.dataMap.get(this.ProtectSegmentID);
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "信号机信息";
        id = this.UID;
        Name = this.Identifier;
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.信号机信息 = 信号机信息;
;
class 站台信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Identifier = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 16);
        this.SecondlyUID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.FakePlatform = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.GlobalID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.ESB1_UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.ESB2_UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.ARB_UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.PCB_UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LocSegmentID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.DefaultDwellTime_DN = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.DefaultDwellTime_UP = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.PltSide = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.DoorsCtrlStrategy_DN = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.DoorsCtrlStrategy_UP = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.PlatformSR = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 2);
        this.ConsistSupport = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 2);
        this.PerfectConsistSupport = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 2);
        this.WcoverOlLenght_UP = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.WcoverOlLenght_DN = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        bin.dataMap.set(this.UID, this);
    }
    IndexObj(bin) {
        this.LocSegmentObj = bin.dataMap.get(this.LocSegmentID);
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "站台信息";
        id = this.UID;
        Name = this.Identifier;
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.站台信息 = 站台信息;
;
class 屏蔽门信息_PSDConsist {
    DumpFormByte(bin, buf, startIndex) {
        this.PsdOpenCmdCode = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.AssOpenIO = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
    }
    IndexObj(bin) {
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "屏蔽门信息_PSDConsist";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
;
class 屏蔽门信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Identifier = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 16);
        this.OwnerSegmentID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Side = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        {
            this.m_PSDConsistes = new Array();
            let len = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
            let len2 = bin.config['TDB_MAX_PSD_CONSIST_NUM'];
            for (let i = 0; i < len2; i++) {
                let tmp = new 屏蔽门信息_PSDConsist();
                tmp.DumpFormByte(bin, buf, startIndex);
                if (i < len)
                    this.m_PSDConsistes.push(tmp);
            }
        }
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        bin.dataMap.set(this.UID, this);
    }
    IndexObj(bin) {
        this.OwnerSegmentObj = bin.dataMap.get(this.OwnerSegmentID);
        for (let o of this.m_PSDConsistes) {
            o.IndexObj(bin);
        }
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "屏蔽门信息";
        id = this.UID;
        Name = this.Identifier;
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.屏蔽门信息 = 屏蔽门信息;
;
class 防淹门信息_AFZSegment {
    DumpFormByte(bin, buf, startIndex) {
        this.SegmentID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.AFGLocation = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
    }
    IndexObj(bin) {
        this.SegmentObj = bin.dataMap.get(this.SegmentID);
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "防淹门信息_AFZSegment";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
;
class 防淹门信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Identifier = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 16);
        this.LocSegmentID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LocSegmentOffset = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Width = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        {
            this.m_AFZSegmentes = new Array();
            let len = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
            let len2 = bin.config['TDB_MAX_AFZ_SEG_NUM'];
            for (let i = 0; i < len2; i++) {
                let tmp = new 防淹门信息_AFZSegment();
                tmp.DumpFormByte(bin, buf, startIndex);
                if (i < len)
                    this.m_AFZSegmentes.push(tmp);
            }
        }
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        bin.dataMap.set(this.UID, this);
    }
    IndexObj(bin) {
        this.LocSegmentObj = bin.dataMap.get(this.LocSegmentID);
        for (let o of this.m_AFZSegmentes) {
            o.IndexObj(bin);
        }
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "防淹门信息";
        id = this.UID;
        Name = this.Identifier;
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.防淹门信息 = 防淹门信息;
;
class 信标信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Identifier = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 16);
        this.Attrib = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.LocSegmentID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LocSegmentOffset = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LocErr_UP = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LocErr_DN = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.TagMsg = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 8);
        this.VersionInfo = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 2);
        this.LineNumber = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.UID += (this.LineNumber << 16);
        bin.dataMap.set(this.UID, this);
    }
    IndexObj(bin) {
        this.LocSegmentObj = bin.dataMap.get(this.LocSegmentID);
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "信标信息";
        id = this.UID;
        Name = this.Identifier;
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.信标信息 = 信标信息;
;
class 动态信标信息_Msg_Switch {
    DumpFormByte(bin, buf, startIndex) {
        this.switchUID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.SwitchState = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
    }
    IndexObj(bin) {
        this.switchObj = bin.dataMap.get(this.switchUID);
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "动态信标信息_Msg_Switch";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
;
class 动态信标信息_Msg_TSR {
    DumpFormByte(bin, buf, startIndex) {
        this.TSRSectionDistance = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.TSRSectionLength = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.TSRValue = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.WorkZoneFlag = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
    }
    IndexObj(bin) {
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "动态信标信息_Msg_TSR";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
;
class 动态信标信息_Msg {
    DumpFormByte(bin, buf, startIndex) {
        this.Index = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.MA_Length = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Overlap = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        {
            this.m_Switches = new Array();
            let len = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
            let len2 = bin.config['TDB_MAX_BEACON_SWITCH_NUM'];
            for (let i = 0; i < len2; i++) {
                let tmp = new 动态信标信息_Msg_Switch();
                tmp.DumpFormByte(bin, buf, startIndex);
                if (i < len)
                    this.m_Switches.push(tmp);
            }
        }
        {
            this.m_TSRes = new Array();
            let len = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
            let len2 = bin.config['TDB_MAX_BEACON_TSR_NUM'];
            for (let i = 0; i < len2; i++) {
                let tmp = new 动态信标信息_Msg_TSR();
                tmp.DumpFormByte(bin, buf, startIndex);
                if (i < len)
                    this.m_TSRes.push(tmp);
            }
        }
    }
    IndexObj(bin) {
        for (let o of this.m_Switches) {
            o.IndexObj(bin);
        }
        for (let o of this.m_TSRes) {
            o.IndexObj(bin);
        }
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "动态信标信息_Msg";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
;
class 动态信标信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.DynamicBeaconID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.RouteSignalID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.ReleaseDB_UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        {
            this.m_Msges = new Array();
            let len = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
            let len2 = 1;
            for (let i = 0; i < len2; i++) {
                let tmp = new 动态信标信息_Msg();
                tmp.DumpFormByte(bin, buf, startIndex);
                if (i < len)
                    this.m_Msges.push(tmp);
            }
        }
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
    }
    IndexObj(bin) {
        this.DynamicBeaconObj = bin.dataMap.get(this.DynamicBeaconID);
        this.RouteSignalObj = bin.dataMap.get(this.RouteSignalID);
        for (let o of this.m_Msges) {
            o.IndexObj(bin);
        }
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "动态信标信息";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.动态信标信息 = 动态信标信息;
;
class 轮径校准信标信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.CurrentBeaconID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Dir = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.OtherBeaconID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.OtherBackBeaconID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Length = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.BackLength = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
    }
    IndexObj(bin) {
        this.CurrentBeaconObj = bin.dataMap.get(this.CurrentBeaconID);
        this.OtherBeaconObj = bin.dataMap.get(this.OtherBeaconID);
        this.OtherBackBeaconObj = bin.dataMap.get(this.OtherBackBeaconID);
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "轮径校准信标信息";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.轮径校准信标信息 = 轮径校准信标信息;
;
class PSR信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Identifier = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 16);
        this.LineNo = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LocSegmentID_Start = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LocSegmentOffset_Start = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LocSegmentID_End = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LocSegmentOffset_End = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.SpeedRestriction = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 2);
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        bin.dataMap.set(this.UID, this);
    }
    IndexObj(bin) {
        this.LocSegmentObj_Start = bin.dataMap.get(this.LocSegmentID_Start);
        this.LocSegmentObj_End = bin.dataMap.get(this.LocSegmentID_End);
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "PSR信息";
        id = this.UID;
        Name = this.Identifier;
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.PSR信息 = PSR信息;
;
class 坡度信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Identifier = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 16);
        this.LineNo = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LocSegmentID_Start = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LocSegmentOffset_Start = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LocSegmentID_End = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LocSegmentOffset_End = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Gradient = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 2);
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        bin.dataMap.set(this.UID, this);
    }
    IndexObj(bin) {
        this.LocSegmentObj_Start = bin.dataMap.get(this.LocSegmentID_Start);
        this.LocSegmentObj_End = bin.dataMap.get(this.LocSegmentID_End);
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "坡度信息";
        id = this.UID;
        Name = this.Identifier;
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.坡度信息 = 坡度信息;
;
class 停车点信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Identifier = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 16);
        this.Attrib = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 2);
        this.LocSegmentID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LocSegmentOffset = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Direction = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.ConsistSupport = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 2);
        this.AlignAttract = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.OpeningSR = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 2);
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        bin.dataMap.set(this.UID, this);
    }
    IndexObj(bin) {
        this.LocSegmentObj = bin.dataMap.get(this.LocSegmentID);
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "停车点信息";
        id = this.UID;
        Name = this.Identifier;
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.停车点信息 = 停车点信息;
;
class ZC边界信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.ZC_UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.EntrySegment = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.ExitSegment = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.ExitDirection = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.Type = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.NeighborZCUID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.ZCBoundaryUID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
    }
    IndexObj(bin) {
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "ZC边界信息";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.ZC边界信息 = ZC边界信息;
;
class 通信码位信息_Bit {
    DumpFormByte(bin, buf, startIndex) {
        this.DeviceID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.DeviceAttrib = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
    }
    IndexObj(bin) {
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "通信码位信息_Bit";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
;
class 通信码位信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.SRC_UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.DST_UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.BitMapCRC = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.BitMapChannel = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        {
            this.m_Bites = new Array();
            let len = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 2);
            let len2 = bin.config['TDB_MAX_COM_BIT_NUM'];
            for (let i = 0; i < len2; i++) {
                let tmp = new 通信码位信息_Bit();
                tmp.DumpFormByte(bin, buf, startIndex);
                if (i < len)
                    this.m_Bites.push(tmp);
            }
        }
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
    }
    IndexObj(bin) {
        for (let o of this.m_Bites) {
            o.IndexObj(bin);
        }
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "通信码位信息";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.通信码位信息 = 通信码位信息;
;
class 进路信息_RouteSegment {
    DumpFormByte(bin, buf, startIndex) {
        this.RouteSegmentUID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
    }
    IndexObj(bin) {
        this.RouteSegmentObj = bin.dataMap.get(this.RouteSegmentUID);
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "进路信息_RouteSegment";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
;
class 进路信息_RouteSwitch {
    DumpFormByte(bin, buf, startIndex) {
        this.RouteSwitchUID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.RouteSwitchState = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
    }
    IndexObj(bin) {
        this.RouteSwitchObj = bin.dataMap.get(this.RouteSwitchUID);
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "进路信息_RouteSwitch";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
;
class 进路信息_ApSegment {
    DumpFormByte(bin, buf, startIndex) {
        this.APSegmentUID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
    }
    IndexObj(bin) {
        this.APSegmentObj = bin.dataMap.get(this.APSegmentUID);
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "进路信息_ApSegment";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
;
class 进路信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Identifier = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 16);
        this.StartSignalUID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.EndSignalUID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        {
            this.m_RouteSegmentes = new Array();
            let len = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
            let len2 = bin.config['TDB_MAX_ROUTE_SEGMENT_NUM'];
            for (let i = 0; i < len2; i++) {
                let tmp = new 进路信息_RouteSegment();
                tmp.DumpFormByte(bin, buf, startIndex);
                if (i < len)
                    this.m_RouteSegmentes.push(tmp);
            }
        }
        {
            this.m_RouteSwitches = new Array();
            let len = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
            let len2 = bin.config['TDB_MAX_ROUTE_SWITCH_NUM'];
            for (let i = 0; i < len2; i++) {
                let tmp = new 进路信息_RouteSwitch();
                tmp.DumpFormByte(bin, buf, startIndex);
                if (i < len)
                    this.m_RouteSwitches.push(tmp);
            }
        }
        {
            this.m_ApSegmentes = new Array();
            let len = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
            let len2 = bin.config['TDB_MAX_ROUTE_APSEGMENT_NUM'];
            for (let i = 0; i < len2; i++) {
                let tmp = new 进路信息_ApSegment();
                tmp.DumpFormByte(bin, buf, startIndex);
                if (i < len)
                    this.m_ApSegmentes.push(tmp);
            }
        }
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        bin.dataMap.set(this.UID, this);
    }
    IndexObj(bin) {
        this.StartSignalObj = bin.dataMap.get(this.StartSignalUID);
        this.EndSignalObj = bin.dataMap.get(this.EndSignalUID);
        for (let o of this.m_RouteSegmentes) {
            o.IndexObj(bin);
        }
        for (let o of this.m_RouteSwitches) {
            o.IndexObj(bin);
        }
        for (let o of this.m_ApSegmentes) {
            o.IndexObj(bin);
        }
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "进路信息";
        id = this.UID;
        Name = this.Identifier;
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.进路信息 = 进路信息;
;
class 列车信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.CC_1_ComUID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.CC_2_ComUID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.TOD_1_ComUID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.TOD_2_ComUID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.WM_1_ComUID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.WM_2_ComUID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        bin.dataMap.set(this.UID, this);
    }
    IndexObj(bin) {
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "列车信息";
        id = this.UID;
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.列车信息 = 列车信息;
;
class ZC信息_LinkCBI {
    DumpFormByte(bin, buf, startIndex) {
        this.LinkCBIUID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
    }
    IndexObj(bin) {
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "ZC信息_LinkCBI";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
;
class ZC信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.RSSPIUID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 2);
        this.ZC_Attrib = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        {
            this.m_LinkCBIes = new Array();
            let len = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
            let len2 = bin.config['TDB_MAX_ZC_LINK_CBI_NUM'];
            for (let i = 0; i < len2; i++) {
                let tmp = new ZC信息_LinkCBI();
                tmp.DumpFormByte(bin, buf, startIndex);
                if (i < len)
                    this.m_LinkCBIes.push(tmp);
            }
        }
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        bin.dataMap.set(this.UID, this);
    }
    IndexObj(bin) {
        for (let o of this.m_LinkCBIes) {
            o.IndexObj(bin);
        }
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "ZC信息";
        id = this.UID;
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.ZC信息 = ZC信息;
;
class ATS信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.ID_Attrib = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        bin.dataMap.set(this.UID, this);
    }
    IndexObj(bin) {
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "ATS信息";
        id = this.UID;
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.ATS信息 = ATS信息;
;
class 联锁信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.ID_Attrib = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.RSSPIUID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 2);
        this.Type = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        bin.dataMap.set(this.UID, this);
    }
    IndexObj(bin) {
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "联锁信息";
        id = this.UID;
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.联锁信息 = 联锁信息;
;
class 线号信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.LineNo = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Name = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 20);
        this.StartDevID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.EndDevID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.TSRSupport = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
    }
    IndexObj(bin) {
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "线号信息";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.线号信息 = 线号信息;
;
class 断链信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.StartingChainageRef = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 4);
        this.StartingChainage = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.EndingChainage = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Difference = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Type = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.LineNo = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.SegmentUID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
    }
    IndexObj(bin) {
        this.SegmentObj = bin.dataMap.get(this.SegmentUID);
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "断链信息";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.断链信息 = 断链信息;
;
class 线段边界设备信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Identifier = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 16);
        this.ChainageRef = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 4);
        this.Chainage = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
    }
    IndexObj(bin) {
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "线段边界设备信息";
        id = this.UID;
        Name = this.Identifier;
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.线段边界设备信息 = 线段边界设备信息;
;
class 多动道岔组信息_Switch {
    DumpFormByte(bin, buf, startIndex) {
        this.SwitchUID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.SwitchState = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
    }
    IndexObj(bin) {
        this.SwitchObj = bin.dataMap.get(this.SwitchUID);
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "多动道岔组信息_Switch";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
;
class 多动道岔组信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Identifier = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 16);
        {
            this.m_Switches = new Array();
            let len = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
            let len2 = bin.config['TDB_MAX_SWITCH_GROUP_NUM'];
            for (let i = 0; i < len2; i++) {
                let tmp = new 多动道岔组信息_Switch();
                tmp.DumpFormByte(bin, buf, startIndex);
                if (i < len)
                    this.m_Switches.push(tmp);
            }
        }
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        bin.dataMap.set(this.UID, this);
    }
    IndexObj(bin) {
        for (let o of this.m_Switches) {
            o.IndexObj(bin);
        }
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "多动道岔组信息";
        id = this.UID;
        Name = this.Identifier;
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.多动道岔组信息 = 多动道岔组信息;
;
class 里程标信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.ChainageRef = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 4);
        this.ADFlag = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
    }
    IndexObj(bin) {
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "里程标信息";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.里程标信息 = 里程标信息;
;
class 环线信息_LcSegment {
    DumpFormByte(bin, buf, startIndex) {
        this.LcSegmentID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LcAuxID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.LcIsLocEnable = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.LcIsRespEnable = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.LcEntrySegmentUID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LcEntrySegmentOffset = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LcExitSegmentUID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LcExitSegmentOffset = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LcSegmentLength = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LoclcEntrySegmentUID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LoclcEntrySegmentOffset = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LoclcExitSegmentUID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LoclcExitSegmentOffset = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LoclcSegmentLength = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LoclcEntryCodec = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 2);
        this.LoclcExitCodec = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 2);
    }
    IndexObj(bin) {
        this.LcSegmentObj = bin.dataMap.get(this.LcSegmentID);
        this.LcEntrySegmentObj = bin.dataMap.get(this.LcEntrySegmentUID);
        this.LcExitSegmentObj = bin.dataMap.get(this.LcExitSegmentUID);
        this.LoclcEntrySegmentObj = bin.dataMap.get(this.LoclcEntrySegmentUID);
        this.LoclcExitSegmentObj = bin.dataMap.get(this.LoclcExitSegmentUID);
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "环线信息_LcSegment";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
;
class 环线信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Name = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 16);
        {
            this.m_LcSegmentes = new Array();
            let len = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
            let len2 = bin.config['TDB_MAX_LC_SEGMENT_NUM'];
            for (let i = 0; i < len2; i++) {
                let tmp = new 环线信息_LcSegment();
                tmp.DumpFormByte(bin, buf, startIndex);
                if (i < len)
                    this.m_LcSegmentes.push(tmp);
            }
        }
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        bin.dataMap.set(this.UID, this);
    }
    IndexObj(bin) {
        for (let o of this.m_LcSegmentes) {
            o.IndexObj(bin);
        }
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "环线信息";
        id = this.UID;
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.环线信息 = 环线信息;
;
class 风井信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Identifier = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 16);
        this.LocSegmentID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LocSegmentOffset = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        bin.dataMap.set(this.UID, this);
    }
    IndexObj(bin) {
        this.LocSegmentObj = bin.dataMap.get(this.LocSegmentID);
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "风井信息";
        id = this.UID;
        Name = this.Identifier;
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.风井信息 = 风井信息;
;
class 无电区信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Identifier = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 16);
        this.DeadZoneType = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.LocSegmentID_Start = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LocSegmentOffset_Start = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LocSegmentID_End = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LocSegmentOffset_End = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.PreSegmentID_Start = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.PreSegmentOffset_Start = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.PreSegmentID_End = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.PreSegmentOffset_End = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.minSpeed = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 2);
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        bin.dataMap.set(this.UID, this);
    }
    IndexObj(bin) {
        this.LocSegmentObj_Start = bin.dataMap.get(this.LocSegmentID_Start);
        this.LocSegmentObj_End = bin.dataMap.get(this.LocSegmentID_End);
        this.PreSegmentObj_Start = bin.dataMap.get(this.PreSegmentID_Start);
        this.PreSegmentObj_End = bin.dataMap.get(this.PreSegmentID_End);
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "无电区信息";
        id = this.UID;
        Name = this.Identifier;
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.无电区信息 = 无电区信息;
;
class 弯道信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Identifier = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 16);
        this.LocSegmentID_Start = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LocSegmentOffset_Start = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LocSegmentID_End = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LocSegmentOffset_End = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.CurveRadius = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Superelevation = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        bin.dataMap.set(this.UID, this);
    }
    IndexObj(bin) {
        this.LocSegmentObj_Start = bin.dataMap.get(this.LocSegmentID_Start);
        this.LocSegmentObj_End = bin.dataMap.get(this.LocSegmentID_End);
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "弯道信息";
        id = this.UID;
        Name = this.Identifier;
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.弯道信息 = 弯道信息;
;
class 隧道信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Identifier = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 16);
        this.LocSegmentID_Start = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LocSegmentOffset_Start = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LocSegmentID_End = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LocSegmentOffset_End = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        bin.dataMap.set(this.UID, this);
    }
    IndexObj(bin) {
        this.LocSegmentObj_Start = bin.dataMap.get(this.LocSegmentID_Start);
        this.LocSegmentObj_End = bin.dataMap.get(this.LocSegmentID_End);
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "隧道信息";
        id = this.UID;
        Name = this.Identifier;
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.隧道信息 = 隧道信息;
;
class 库门信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Identifier = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 16);
        this.LocSegmentID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LocSegmentOffset = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        bin.dataMap.set(this.UID, this);
    }
    IndexObj(bin) {
        this.LocSegmentObj = bin.dataMap.get(this.LocSegmentID);
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "库门信息";
        id = this.UID;
        Name = this.Identifier;
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.库门信息 = 库门信息;
;
class 洗车机信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Identifier = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 16);
        this.Direction = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.LocSegmentID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LocSegmentOffset_Start = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LocSegmentOffset_End = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.StepPointOffset = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Door1UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Door2UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        bin.dataMap.set(this.UID, this);
    }
    IndexObj(bin) {
        this.LocSegmentObj = bin.dataMap.get(this.LocSegmentID);
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "洗车机信息";
        id = this.UID;
        Name = this.Identifier;
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.洗车机信息 = 洗车机信息;
;
class 安全疏散区域信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Identifier = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 16);
        this.LocSegmentID_Start = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LocSegmentOffset_Start = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LocSegmentID_End = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LocSegmentOffset_End = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Side = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        bin.dataMap.set(this.UID, this);
    }
    IndexObj(bin) {
        this.LocSegmentObj_Start = bin.dataMap.get(this.LocSegmentID_Start);
        this.LocSegmentObj_End = bin.dataMap.get(this.LocSegmentID_End);
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "安全疏散区域信息";
        id = this.UID;
        Name = this.Identifier;
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.安全疏散区域信息 = 安全疏散区域信息;
;
class SPKS信息_ProtectSection {
    DumpFormByte(bin, buf, startIndex) {
        this.SPKS_SectionID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
    }
    IndexObj(bin) {
        this.SPKS_SectionObj = bin.dataMap.get(this.SPKS_SectionID);
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "SPKS信息_ProtectSection";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
;
class SPKS信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Identifier = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 16);
        {
            this.m_ProtectSectiones = new Array();
            let len = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
            let len2 = bin.config['TDB_MAX_SPKS_SECTION_NUM'];
            for (let i = 0; i < len2; i++) {
                let tmp = new SPKS信息_ProtectSection();
                tmp.DumpFormByte(bin, buf, startIndex);
                if (i < len)
                    this.m_ProtectSectiones.push(tmp);
            }
        }
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        bin.dataMap.set(this.UID, this);
    }
    IndexObj(bin) {
        for (let o of this.m_ProtectSectiones) {
            o.IndexObj(bin);
        }
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "SPKS信息";
        id = this.UID;
        Name = this.Identifier;
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.SPKS信息 = SPKS信息;
;
class 极点信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.PoleDevUID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Segment_1_UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Segment_1_Offset = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Segment_2_UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Segment_2_Offset = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
    }
    IndexObj(bin) {
        this.Segment_1_Obj = bin.dataMap.get(this.Segment_1_UID);
        this.Segment_2_Obj = bin.dataMap.get(this.Segment_2_UID);
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "极点信息";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.极点信息 = 极点信息;
;
class 休眠区域信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.SleepZoneIndex = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.SleepZoneSectionUID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LineNo = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.StopPointUID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.SleepWindowStart = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.SleepWindowOff = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.TestPriorityDirection = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
    }
    IndexObj(bin) {
        this.SleepZoneSectionObj = bin.dataMap.get(this.SleepZoneSectionUID);
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "休眠区域信息";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.休眠区域信息 = 休眠区域信息;
;
class 单轨多开道岔信息_SwitchWay {
    DumpFormByte(bin, buf, startIndex) {
        this.WayLinkSegmentID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.SwitchWaySR = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 2);
        this.SwitchWayCurveLen = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.SwitchWaySRF = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 2);
    }
    IndexObj(bin) {
        this.WayLinkSegmentObj = bin.dataMap.get(this.WayLinkSegmentID);
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "单轨多开道岔信息_SwitchWay";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
;
class 单轨多开道岔信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Identifier = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 16);
        this.OwnerSectionID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.SwitchSharp = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.Flexibility = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.PointLinkObjID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.SwitchWayNum = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        {
            this.m_SwitchWayes = new Array();
            let len = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
            let len2 = bin.config['TDB_MAX_N_SWITCH_WAY_NUM'];
            for (let i = 0; i < len2; i++) {
                let tmp = new 单轨多开道岔信息_SwitchWay();
                tmp.DumpFormByte(bin, buf, startIndex);
                if (i < len)
                    this.m_SwitchWayes.push(tmp);
            }
        }
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        bin.dataMap.set(this.UID, this);
    }
    IndexObj(bin) {
        this.OwnerSectionObj = bin.dataMap.get(this.OwnerSectionID);
        for (let o of this.m_SwitchWayes) {
            o.IndexObj(bin);
        }
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "单轨多开道岔信息";
        id = this.UID;
        Name = this.Identifier;
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.单轨多开道岔信息 = 单轨多开道岔信息;
;
class 鸣笛区域信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.Identifier = TDBBase_1.BIN.ConvertTostring(buf, startIndex, 16);
        this.LineNo = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LocSegmentID_Start = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LocSegmentOffset_Start = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LocSegmentID_End = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.LocSegmentOffset_End = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.BlewInterval = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        bin.dataMap.set(this.UID, this);
    }
    IndexObj(bin) {
        this.LocSegmentObj_Start = bin.dataMap.get(this.LocSegmentID_Start);
        this.LocSegmentObj_End = bin.dataMap.get(this.LocSegmentID_End);
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "鸣笛区域信息";
        id = this.UID;
        Name = this.Identifier;
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.鸣笛区域信息 = 鸣笛区域信息;
;
class 互联互通ZC重叠区信息_OpSwitch {
    DumpFormByte(bin, buf, startIndex) {
        this.OpSwitchUID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
    }
    IndexObj(bin) {
        this.OpSwitchObj = bin.dataMap.get(this.OpSwitchUID);
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "互联互通ZC重叠区信息_OpSwitch";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
;
class 互联互通ZC重叠区信息_OpSection_OpSegment {
    DumpFormByte(bin, buf, startIndex) {
        this.OpSegmentUID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
    }
    IndexObj(bin) {
        this.OpSegmentObj = bin.dataMap.get(this.OpSegmentUID);
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "互联互通ZC重叠区信息_OpSection_OpSegment";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
;
class 互联互通ZC重叠区信息_OpSection {
    DumpFormByte(bin, buf, startIndex) {
        this.OpSectionUID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        {
            this.m_OpSegmentes = new Array();
            let len = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
            let len2 = bin.config['TDB_MAX_SEG_NUM_IN_SEC'];
            for (let i = 0; i < len2; i++) {
                let tmp = new 互联互通ZC重叠区信息_OpSection_OpSegment();
                tmp.DumpFormByte(bin, buf, startIndex);
                if (i < len)
                    this.m_OpSegmentes.push(tmp);
            }
        }
    }
    IndexObj(bin) {
        this.OpSectionObj = bin.dataMap.get(this.OpSectionUID);
        for (let o of this.m_OpSegmentes) {
            o.IndexObj(bin);
        }
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "互联互通ZC重叠区信息_OpSection";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
;
class 互联互通ZC重叠区信息 {
    DumpFormByte(bin, buf, startIndex) {
        this.HandoverZC_UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        this.AcceptZC_UID = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
        {
            this.m_OpSwitches = new Array();
            let len = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
            let len2 = bin.config['TDB_MAX_SWH_NUM_IN_OPZCOL'];
            for (let i = 0; i < len2; i++) {
                let tmp = new 互联互通ZC重叠区信息_OpSwitch();
                tmp.DumpFormByte(bin, buf, startIndex);
                if (i < len)
                    this.m_OpSwitches.push(tmp);
            }
        }
        {
            this.m_OpSectiones = new Array();
            let len = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 1);
            let len2 = bin.config['TDB_MAX_SEC_NUM_IN_OPZCOL'];
            for (let i = 0; i < len2; i++) {
                let tmp = new 互联互通ZC重叠区信息_OpSection();
                tmp.DumpFormByte(bin, buf, startIndex);
                if (i < len)
                    this.m_OpSectiones.push(tmp);
            }
        }
        this.CRC32 = TDBBase_1.BIN.ConvertTonumber(buf, startIndex, 4);
    }
    IndexObj(bin) {
        for (let o of this.m_OpSwitches) {
            o.IndexObj(bin);
        }
        for (let o of this.m_OpSectiones) {
            o.IndexObj(bin);
        }
    }
    toString() {
        let id = 0;
        let Name = "";
        let className = "互联互通ZC重叠区信息";
        if (Name != "") {
            className = Name;
        }
        if (id && id != 0) {
            className += "0x" + id.toString(16);
        }
        ;
        return className;
    }
}
exports.互联互通ZC重叠区信息 = 互联互通ZC重叠区信息;
;
exports.UnitMap = {
    2: 区段信息,
    3: 线段信息,
    4: 道岔信息,
    5: 信号机信息,
    6: 站台信息,
    7: 屏蔽门信息,
    8: 防淹门信息,
    9: 信标信息,
    10: 动态信标信息,
    11: 轮径校准信标信息,
    12: PSR信息,
    13: 坡度信息,
    14: 停车点信息,
    15: ZC边界信息,
    16: 通信码位信息,
    18: 进路信息,
    19: 列车信息,
    20: ZC信息,
    21: ATS信息,
    22: 联锁信息,
    23: 线号信息,
    24: 断链信息,
    25: 线段边界设备信息,
    26: 多动道岔组信息,
    27: 里程标信息,
    28: 环线信息,
    29: 风井信息,
    30: 无电区信息,
    31: 弯道信息,
    32: 隧道信息,
    33: 库门信息,
    34: 洗车机信息,
    35: 安全疏散区域信息,
    36: SPKS信息,
    37: 极点信息,
    38: 休眠区域信息,
    39: 单轨多开道岔信息,
    40: 鸣笛区域信息,
    41: 互联互通ZC重叠区信息,
    99: 系统间版本校验信息,
};
//# sourceMappingURL=TDBF_V2.3.js.map