export * from './TDBF_V2.3'
import * as TDBF from './TDBF_V2.3'
import { Direction, SwitchIndication, IDataUnit } from "./TDBF_V2.3";

export class SegmentEx extends TDBF.线段信息 {
	SpecalData:any
	constructor()
	{
		super()
		this.SpecalData = null
	}
	GetLinkObj(dir: Direction) {
		if (dir === Direction.DIR_DN) {
			return this.EndLinkObjectObj
		}
		else if (dir === Direction.DIR_UP) {
			return this.StartLinkObjectObj
		}
		else {
			throw `err dir：${dir} `
		}
	}
}

export class SwitchEx extends TDBF.道岔信息 {
	SpecalData:any
	swhInd: SwitchIndication;
	constructor()
	{
		super()
		this.SpecalData = null
		this.swhInd = SwitchIndication.SW_LOST
	}
	GetLinkSegment(pre: SegmentEx, dir: Direction): IDataUnit {
		//if(SwitchIndication.)
		if (this.PointLinkObjObj === pre) {
			if (this.swhInd === SwitchIndication.SW_NORMAL) {
				return this.NormalLinkObjObj
			}
			else if (this.swhInd === SwitchIndication.SW_RESERVE) {
				return this.ReserveLinkObjObj
			}
			else {
				throw { code: "Switch break" };
			}
		}
		else if ((this.NormalLinkObjObj === pre && this.swhInd === SwitchIndication.SW_NORMAL)
			|| (this.ReserveLinkObjObj === pre && this.swhInd === SwitchIndication.SW_RESERVE)) {
			return this.PointLinkObjObj
		}
		else {
			throw { code: "Switch break" };
		}
	}
}



export var UnitMap = {
	2: TDBF.区段信息,
	3: SegmentEx,
	4: SwitchEx,
	5: TDBF.信号机信息,
	6: TDBF.站台信息,
	7: TDBF.屏蔽门信息,
	8: TDBF.防淹门信息,
	9: TDBF.信标信息,
	10: TDBF.动态信标信息,
	11: TDBF.轮径校准信标信息,
	12: TDBF.PSR信息,
	13: TDBF.坡度信息,
	14: TDBF.停车点信息,
	15: TDBF.ZC边界信息,
	16: TDBF.通信码位信息,
	18: TDBF.进路信息,
	19: TDBF.列车信息,
	20: TDBF.ZC信息,
	21: TDBF.ATS信息,
	22: TDBF.联锁信息,
	23: TDBF.线号信息,
	24: TDBF.断链信息,
	25: TDBF.线段边界设备信息,
	26: TDBF.多动道岔组信息,
	27: TDBF.里程标信息,
	28: TDBF.环线信息,
	29: TDBF.风井信息,
	30: TDBF.无电区信息,
	31: TDBF.弯道信息,
	32: TDBF.隧道信息,
	33: TDBF.库门信息,
	34: TDBF.洗车机信息,
	35: TDBF.安全疏散区域信息,
	36: TDBF.SPKS信息,
	37: TDBF.极点信息,
	38: TDBF.休眠区域信息,
	39: TDBF.单轨多开道岔信息,
	40: TDBF.鸣笛区域信息,
	41: TDBF.互联互通ZC重叠区信息,
	99: TDBF.系统间版本校验信息,
}

