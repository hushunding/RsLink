//本文件根据ZHKJ-YF-BiTRACON800-IIDS-03-1 BiTRACON 800轨道数据库设计规格书.docx自动生成，请不要直接编辑
//本文件用于定义各数据块的结构
import { BIN, RefInt, IDataUnit } from "./TDBBase"
export * from "./TDBBase"
export const FormateVersion = { t: 'V2.3', c: 131840 }
export enum BOOL {
	TRUE = 0x57, 			//真/是/有
	FALSE = 0x62, 			//假/否/无
};
export enum Direction {
	DIR_NONE = 0x00, 			//无方向/未定义方向/不限制方向
	DIR_UP = 0x5A, 			//上行(←)
	DIR_DN = 0xA5, 			//下行(→)
	DIR_BOTH = 0xAA, 			//双向
};
export enum Side {
	SIDE_NONE = 0x00, 			//无
	SIDE_LEFT = 0x5A, 			//左侧
	SIDE_RIGHT = 0xA5, 			//右侧
	SIDE_BOTH = 0xAA, 			//两侧
};
export enum SwitchIndication {
	SW_NORMAL = 0xAA, 			//定位
	SW_RESERVE = 0x55, 			//反位
	SW_MID = 0xAA, 			//中位(定位)
	SW_LEFT_1 = 0xA1, 			//左1表示
	SW_RIGHT_1 = 0x51, 			//右1表示
	SW_LEFT_2 = 0xA2, 			//左2表示
	SW_RIGHT_2 = 0x52, 			//右2表示
	SW_LEFT_3 = 0xA3, 			//左3表示
	SW_RIGHT_3 = 0x53, 			//右3表示
	SW_LEFT_4 = 0xA4, 			//左4表示
	SW_RIGHT_4 = 0x54, 			//右4表示
	SW_LOST = 0xFF,				//失位
};
export enum TrainConsist {
	TRAIN_CONSIST_1 = 0x11, 			//1编组
	TRAIN_CONSIST_2 = 0x22, 			//2编组
	TRAIN_CONSIST_3 = 0x33, 			//3编组
	TRAIN_CONSIST_4 = 0x44, 			//4编组
	TRAIN_CONSIST_5 = 0x55, 			//5编组
	TRAIN_CONSIST_6 = 0x66, 			//6编组
	TRAIN_CONSIST_7 = 0x77, 			//7编组
	TRAIN_CONSIST_8 = 0x88, 			//8编组
};
export class 文件信息 implements IDataUnit {
	public FileID: string; 			//文件标识，取{’T’,’D’,’B’,’F’}
	public IDS_VERSION: number; 			//编制文件时，所遵循的《轨道数据库设计规格书》版本号。用于软件解析代码的版本校验。
	public LineName: string; 			//线路名称，使用5字节A-Z0-9字符表示线路名称。如杭州一号线HZL1
	public TDB_VERSION: string; 			//线路版本号，遵循数据源的版本号。用于数据版本校验
	public FileSize: number; 			//文件大小，整个数据库文件大小，单位为byte
	public UnitNumber: number; 			//数据区数目，<MAX_UNIT_NUM
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.FileID = BIN.ConvertTostring(buf, startIndex, 4);
		this.IDS_VERSION = BIN.ConvertTonumber(buf, startIndex, 3);
		this.LineName = BIN.ConvertTostring(buf, startIndex, 5);
		this.TDB_VERSION = BIN.ConvertTostring(buf, startIndex, 36);
		this.FileSize = BIN.ConvertTonumber(buf, startIndex, 4);
		this.UnitNumber = BIN.ConvertTonumber(buf, startIndex, 4);
	}
	IndexObj(bin: BIN): void {
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "文件信息";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
export class 数据区索引表 implements IDataUnit {
	public UnitType: number; 			//数据区类型
	public UnitOffset: number; 			//数据区单元，相对文件起点的偏移
	public CellSize: number; 			//数据区数据单元大小
	public CellNumber: number; 			//数据区数据单元数目
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.UnitType = BIN.ConvertTonumber(buf, startIndex, 4);
		this.UnitOffset = BIN.ConvertTonumber(buf, startIndex, 4);
		this.CellSize = BIN.ConvertTonumber(buf, startIndex, 4);
		this.CellNumber = BIN.ConvertTonumber(buf, startIndex, 4);
	}
	IndexObj(bin: BIN): void {
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "数据区索引表";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
export class 系统间版本校验信息 implements IDataUnit {
	public SrcDevID: number; 			//源端设备ID，CC取0值
	public DstDevID: number; 			//目标端设备ID，取对端设备
	public CheckCode: number; 			//校验值码
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.SrcDevID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.DstDevID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.CheckCode = BIN.ConvertTonumber(buf, startIndex, 4);
	}
	IndexObj(bin: BIN): void {
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "系统间版本校验信息";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
export class 安全信息区 implements IDataUnit {
	public Creator_Version: string; 			//数据生成工具的版本
	public Creator_Date: string; 			//数据生成日期，ASCII字符，格式：MMM DD YYYY 
	public Creator_Time: string; 			//数据生成时间，ASCII字符，格式：hh:mm:ss
	public Creator_CRC: number; 			//数据生成时的CRC32_C校验值，计算范围从文件起始到Creator_Time为止。
	public Checker_Version: string; 			//数据校验工具的版本。未校验时全填“0xEE”
	public Checker_Date: string; 			//数据生成日期，ASCII字符 未校验时全填“0xEE”，     格式：MMM DD YYYY
	public Checker_Time: string; 			//数据生成时间，ASCII字符，格式：hh:mm:ss 未校验时全填“0xEE”
	public Checker_CRC: number; 			//数据校验时的CRC32_Q校验值，计算范围从文件起始到Checker_Time为止。 未校验时全填“0xEE”
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.Creator_Version = BIN.ConvertTostring(buf, startIndex, 36);
		this.Creator_Date = BIN.ConvertTostring(buf, startIndex, 12);
		this.Creator_Time = BIN.ConvertTostring(buf, startIndex, 16);
		this.Creator_CRC = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Checker_Version = BIN.ConvertTostring(buf, startIndex, 36);
		this.Checker_Date = BIN.ConvertTostring(buf, startIndex, 12);
		this.Checker_Time = BIN.ConvertTostring(buf, startIndex, 16);
		this.Checker_CRC = BIN.ConvertTonumber(buf, startIndex, 4);
	}
	IndexObj(bin: BIN): void {
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "安全信息区";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
export class 配置分区_CfgItem implements IDataUnit {
	public CfgName: string; 			//配置名称
	public CfgValue: number; 			//配置值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.CfgName = BIN.ConvertTostring(buf, startIndex, 36);
		this.CfgValue = BIN.ConvertTonumber(buf, startIndex, 4);
	}
	IndexObj(bin: BIN): void {
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "配置分区_CfgItem";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};

export class 配置分区 implements IDataUnit {
	public CfgType: number; 			//配置类型
	public m_CfgItemes: Array<配置分区_CfgItem>;//
	public CRC32: number; 			//单一配置分区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.CfgType = BIN.ConvertTonumber(buf, startIndex, 1);
		{
			this.m_CfgItemes = new Array<配置分区_CfgItem>();
			let len = BIN.ConvertTonumber(buf, startIndex, 1);
			let len2 = len;
			for (let i = 0; i < len2; i++) { let tmp = new 配置分区_CfgItem(); tmp.DumpFormByte(bin, buf, startIndex); if (i < len) { this.m_CfgItemes.push(tmp); } }
		}
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
	}
	IndexObj(bin: BIN): void {
		for (let o of this.m_CfgItemes) { o.IndexObj(bin); }
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "配置分区";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
export enum CfgType {
	TDB配置 = 1, 			//
	线路配置 = 2, 			//
	列车配置 = 3, 			//
	PSD配置 = 4, 			//
	计轴配置 = 5, 			//
	信标配置 = 6, 			//
	通信配置 = 7, 			//
	运营配置 = 8, 			//
	互联互通配置 = 9, 			//
};
class 区段信息_Segment implements IDataUnit {
	public SegmentID: number; 			//包含线段ID
	public SegmentObj: IDataUnit;
	public SegmentAttribute: number; 			//线段区段边界属性
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.SegmentID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.SegmentAttribute = BIN.ConvertTonumber(buf, startIndex, 1);
	}
	IndexObj(bin: BIN): void {
		this.SegmentObj = bin.dataMap.get(this.SegmentID);
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "区段信息_Segment";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};

class 区段信息_Switch implements IDataUnit {
	public SwitchID: number; 			//包含道岔ID 
	public SwitchObj: IDataUnit;
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.SwitchID = BIN.ConvertTonumber(buf, startIndex, 4);
	}
	IndexObj(bin: BIN): void {
		this.SwitchObj = bin.dataMap.get(this.SwitchID);
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "区段信息_Switch";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};

export class 区段信息 implements IDataUnit {
	public UID: number; 			//设备唯一标志符
	public Identifier: string; 			//标识符
	public NormalDirection: number; 			//常规运营方向
	public CapacityLimit: number; 			//是否无列车容量限制
	public STDEType: number; 			//区段所使用的次级列车检测设备类型
	public m_Segmentes: Array<区段信息_Segment>;//
	public m_Switches: Array<区段信息_Switch>;//
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Identifier = BIN.ConvertTostring(buf, startIndex, 16);
		this.NormalDirection = BIN.ConvertTonumber(buf, startIndex, 1);
		this.CapacityLimit = BIN.ConvertTonumber(buf, startIndex, 1);
		this.STDEType = BIN.ConvertTonumber(buf, startIndex, 1);
		{
			this.m_Segmentes = new Array<区段信息_Segment>();
			let len = BIN.ConvertTonumber(buf, startIndex, 1);
			let len2 = bin.config['TDB_MAX_SEG_NUM_IN_SEC'];
			for (let i = 0; i < len2; i++) { let tmp = new 区段信息_Segment(); tmp.DumpFormByte(bin, buf, startIndex); if (i < len) { this.m_Segmentes.push(tmp); } }
		}
		{
			this.m_Switches = new Array<区段信息_Switch>();
			let len = BIN.ConvertTonumber(buf, startIndex, 1);
			let len2 = bin.config['TDB_MAX_SW_NUM_IN_SEC'];
			for (let i = 0; i < len2; i++) { let tmp = new 区段信息_Switch(); tmp.DumpFormByte(bin, buf, startIndex); if (i < len) { this.m_Switches.push(tmp); } }
		}
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
		bin.dataMap.set(this.UID, this);
	}
	IndexObj(bin: BIN): void {
		for (let o of this.m_Segmentes) { o.IndexObj(bin); }
		for (let o of this.m_Switches) { o.IndexObj(bin); }
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "区段信息";
		id = this.UID;
		Name = this.Identifier;
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
class 线段信息_LinkZC implements IDataUnit {
	public LinkZC_UID: number; 			//接管ZC
	public LinkZC_Direction: number; 			//接管方向
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.LinkZC_UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LinkZC_Direction = BIN.ConvertTonumber(buf, startIndex, 1);
	}
	IndexObj(bin: BIN): void {
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "线段信息_LinkZC";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};

class 线段信息_LinkCBI implements IDataUnit {
	public LinkCBI_UID: number; 			//接管CBI
	public LinkCBI_Direction: number; 			//接管方向
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.LinkCBI_UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LinkCBI_Direction = BIN.ConvertTonumber(buf, startIndex, 1);
	}
	IndexObj(bin: BIN): void {
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "线段信息_LinkCBI";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};

class 线段信息_LinkATS implements IDataUnit {
	public LinkATS_UID: number; 			//接管ATS
	public LinkATS_Direction: number; 			//接管方向
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.LinkATS_UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LinkATS_Direction = BIN.ConvertTonumber(buf, startIndex, 1);
	}
	IndexObj(bin: BIN): void {
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "线段信息_LinkATS";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};

export class 线段信息 implements IDataUnit {
	public UID: number; 			//设备唯一标志符
	public Identifier: string; 			//标识符
	public LineNumber: number; 			//线路编号
	public LineNo: number; 			//线号(股道号)
	public StartDevID: number; 			//起点设备ID
	public EndDevID: number; 			//终点设备ID
	public Length: number; 			//线段长度
	public EndLinkObjectID: number; 			//终点(下行端点)连接对象ID
	public EndLinkObjectObj: IDataUnit;
	public StartLinkObjectID: number; 			//起点(上行端点)连接对象ID
	public StartLinkObjectObj: IDataUnit;
	public SignalID_DN: number; 			//坐落在本线段，并防护列车下行运行的信号机ID
	public SignalObj_DN: IDataUnit;
	public SignalID_UP: number; 			//坐落在本线段，并防护列车上行运行的信号机ID
	public SignalObj_UP: IDataUnit;
	public RouteSignalID_DN: number; 			//防护列车向本线段下行驶入的信号机ID
	public RouteSignalObj_DN: IDataUnit;
	public RouteSignalID_UP: number; 			//防护列车向本线段上行驶入的信号机ID
	public RouteSignalObj_UP: IDataUnit;
	public PlatformID: number; 			//坐落在本线段的站台ID
	public PlatformObj: IDataUnit;
	public DirectionReference: number; 			//运营方向与地面方向是否一致
	public LocationType: number; 			//线路类型标志符
	public TurnBackAttrib: number; 			//折返属性
	public TurnBackZoneID: number; 			//折返区域ID
	public UTOAttrib: number; 			//UTO属性
	public DestIdentifier: number; 			//目的地号
	public EI_CommID: number; 			//增强点式通信号ID
	public EI_SignalID_DN: number; 			//增强点式，CBI状态所指信号机，下行方向
	public EI_SignalObj_DN: IDataUnit;
	public EI_SignalID_UP: number; 			//增强点式，CBI状态所指信号机，上行方向
	public EI_SignalObj_UP: IDataUnit;
	public OwnerZC_UID: number; 			//所属ZC的UID
	public m_LinkZCes: Array<线段信息_LinkZC>;//
	public OwnerCBI_UID: number; 			//所属CBI的UID
	public m_LinkCBIes: Array<线段信息_LinkCBI>;//
	public OwnerATS_UID: number; 			//所属ATS的UID
	public m_LinkATSes: Array<线段信息_LinkATS>;//
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Identifier = BIN.ConvertTostring(buf, startIndex, 16);
		this.LineNumber = BIN.ConvertTonumber(buf, startIndex, 1);
		this.LineNo = BIN.ConvertTonumber(buf, startIndex, 4);
		this.StartDevID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.EndDevID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Length = BIN.ConvertTonumber(buf, startIndex, 4);
		this.EndLinkObjectID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.StartLinkObjectID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.SignalID_DN = BIN.ConvertTonumber(buf, startIndex, 4);
		this.SignalID_UP = BIN.ConvertTonumber(buf, startIndex, 4);
		this.RouteSignalID_DN = BIN.ConvertTonumber(buf, startIndex, 4);
		this.RouteSignalID_UP = BIN.ConvertTonumber(buf, startIndex, 4);
		this.PlatformID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.DirectionReference = BIN.ConvertTonumber(buf, startIndex, 1);
		this.LocationType = BIN.ConvertTonumber(buf, startIndex, 1);
		this.TurnBackAttrib = BIN.ConvertTonumber(buf, startIndex, 1);
		this.TurnBackZoneID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.UTOAttrib = BIN.ConvertTonumber(buf, startIndex, 1);
		this.DestIdentifier = BIN.ConvertTonumber(buf, startIndex, 4);
		this.EI_CommID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.EI_SignalID_DN = BIN.ConvertTonumber(buf, startIndex, 4);
		this.EI_SignalID_UP = BIN.ConvertTonumber(buf, startIndex, 4);
		this.OwnerZC_UID = BIN.ConvertTonumber(buf, startIndex, 4);
		{
			this.m_LinkZCes = new Array<线段信息_LinkZC>();
			let len = BIN.ConvertTonumber(buf, startIndex, 1);
			let len2 = bin.config['TDB_MAX_LINK_ZC_NUM_IN_SEG'];
			for (let i = 0; i < len2; i++) { let tmp = new 线段信息_LinkZC(); tmp.DumpFormByte(bin, buf, startIndex); if (i < len) { this.m_LinkZCes.push(tmp); } }
		}
		this.OwnerCBI_UID = BIN.ConvertTonumber(buf, startIndex, 4);
		{
			this.m_LinkCBIes = new Array<线段信息_LinkCBI>();
			let len = BIN.ConvertTonumber(buf, startIndex, 1);
			let len2 = bin.config['TDB_MAX_LINK_CBI_NUM_IN_SEG'];
			for (let i = 0; i < len2; i++) { let tmp = new 线段信息_LinkCBI(); tmp.DumpFormByte(bin, buf, startIndex); if (i < len) { this.m_LinkCBIes.push(tmp); } }
		}
		this.OwnerATS_UID = BIN.ConvertTonumber(buf, startIndex, 4);
		{
			this.m_LinkATSes = new Array<线段信息_LinkATS>();
			let len = BIN.ConvertTonumber(buf, startIndex, 1);
			let len2 = bin.config['TDB_MAX_LINK_ATS_NUM_IN_SEG'];
			for (let i = 0; i < len2; i++) { let tmp = new 线段信息_LinkATS(); tmp.DumpFormByte(bin, buf, startIndex); if (i < len) { this.m_LinkATSes.push(tmp); } }
		}
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
		bin.dataMap.set(this.UID, this);
	}
	IndexObj(bin: BIN): void {
		this.EndLinkObjectObj = bin.dataMap.get(this.EndLinkObjectID);
		this.StartLinkObjectObj = bin.dataMap.get(this.StartLinkObjectID);
		this.SignalObj_DN = bin.dataMap.get(this.SignalID_DN);
		this.SignalObj_UP = bin.dataMap.get(this.SignalID_UP);
		this.RouteSignalObj_DN = bin.dataMap.get(this.RouteSignalID_DN);
		this.RouteSignalObj_UP = bin.dataMap.get(this.RouteSignalID_UP);
		this.PlatformObj = bin.dataMap.get(this.PlatformID);
		this.EI_SignalObj_DN = bin.dataMap.get(this.EI_SignalID_DN);
		this.EI_SignalObj_UP = bin.dataMap.get(this.EI_SignalID_UP);
		for (let o of this.m_LinkZCes) { o.IndexObj(bin); }
		for (let o of this.m_LinkCBIes) { o.IndexObj(bin); }
		for (let o of this.m_LinkATSes) { o.IndexObj(bin); }
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "线段信息";
		id = this.UID;
		Name = this.Identifier;
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
export class 道岔信息 implements IDataUnit {
	public UID: number; 			//设备唯一标志符
	public Identifier: string; 			//标识符
	public PointLinkObjID: number; 			//岔尖连接对象ID
	public PointLinkObjObj: IDataUnit;
	public NormalLinkObjID: number; 			//定位连接对象ID
	public NormalLinkObjObj: IDataUnit;
	public ReserveLinkObjID: number; 			//反位连接对象ID
	public ReserveLinkObjObj: IDataUnit;
	public SwitchSharp: number; 			//道岔开口方向*
	public NormalSideSR: number; 			//以定位过道岔时的限速
	public ReserveSideSR: number; 			//以反位过道岔时的限速
	public ClashLength: number; 			//道岔岔后超限区域
	public Flexibility: number; 			//可挠性
	public NormalSideLen: number; 			//定位岔后弯曲长度
	public ReserveSideLen: number; 			//反位岔后弯曲长度
	public NormalSideSRF: number; 			//可挠性道岔圆滑曲线形成成功后，以定位过道岔时的限速
	public ReserveSideSRF: number; 			//可挠性道岔圆滑曲线形成成功后，以定位过道岔时的限速
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Identifier = BIN.ConvertTostring(buf, startIndex, 16);
		this.PointLinkObjID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.NormalLinkObjID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.ReserveLinkObjID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.SwitchSharp = BIN.ConvertTonumber(buf, startIndex, 1);
		this.NormalSideSR = BIN.ConvertTonumber(buf, startIndex, 2);
		this.ReserveSideSR = BIN.ConvertTonumber(buf, startIndex, 2);
		this.ClashLength = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Flexibility = BIN.ConvertTonumber(buf, startIndex, 1);
		this.NormalSideLen = BIN.ConvertTonumber(buf, startIndex, 4);
		this.ReserveSideLen = BIN.ConvertTonumber(buf, startIndex, 4);
		this.NormalSideSRF = BIN.ConvertTonumber(buf, startIndex, 2);
		this.ReserveSideSRF = BIN.ConvertTonumber(buf, startIndex, 2);
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
		bin.dataMap.set(this.UID, this);
	}
	IndexObj(bin: BIN): void {
		this.PointLinkObjObj = bin.dataMap.get(this.PointLinkObjID);
		this.NormalLinkObjObj = bin.dataMap.get(this.NormalLinkObjID);
		this.ReserveLinkObjObj = bin.dataMap.get(this.ReserveLinkObjID);
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "道岔信息";
		id = this.UID;
		Name = this.Identifier;
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
export class 信号机信息 implements IDataUnit {
	public UID: number; 			//设备唯一标志符
	public Identifier: string; 			//标识符
	public LocSegmentID: number; 			//信号机所在位置线段ID
	public LocSegmentObj: IDataUnit;
	public LocSegmentOffset: number; 			//信号机所在位置离线段起点的偏移位置
	public ProtectDirection: number; 			//防护方向
	public ProtectSegmentID: number; 			//防护区段的入口第一条线段ID
	public ProtectSegmentObj: IDataUnit;
	public PreciseStopFlag: number; 			//靠近停车标志
	public LCRouteRelTime: number; 			//列车进路总人解倒计时 列车进路延迟解锁倒计时 DMC时间
	public OLTotalPreRelTime: number; 			//保护区段预取消时间，从列车压入进路开始,到列车完全压入泊车区段结束
	public OLTotalBerthPreRelTime: number; 			//保护区段预取消时间，从列车完全压入泊车区段开始
	public LCRouteImdRelTime: number; 			//列车进路立即解锁倒计时(IMC)
	public OLLenght: number; 			//保护区段长度
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Identifier = BIN.ConvertTostring(buf, startIndex, 16);
		this.LocSegmentID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LocSegmentOffset = BIN.ConvertTonumber(buf, startIndex, 4);
		this.ProtectDirection = BIN.ConvertTonumber(buf, startIndex, 1);
		this.ProtectSegmentID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.PreciseStopFlag = BIN.ConvertTonumber(buf, startIndex, 1);
		this.LCRouteRelTime = BIN.ConvertTonumber(buf, startIndex, 2);
		this.OLTotalPreRelTime = BIN.ConvertTonumber(buf, startIndex, 2);
		this.OLTotalBerthPreRelTime = BIN.ConvertTonumber(buf, startIndex, 2);
		this.LCRouteImdRelTime = BIN.ConvertTonumber(buf, startIndex, 2);
		this.OLLenght = BIN.ConvertTonumber(buf, startIndex, 4);
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
		bin.dataMap.set(this.UID, this);
	}
	IndexObj(bin: BIN): void {
		this.LocSegmentObj = bin.dataMap.get(this.LocSegmentID);
		this.ProtectSegmentObj = bin.dataMap.get(this.ProtectSegmentID);
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "信号机信息";
		id = this.UID;
		Name = this.Identifier;
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
export class 站台信息 implements IDataUnit {
	public UID: number; 			//设备唯一标志符
	public Identifier: string; 			//标识符
	public SecondlyUID: number; 			//双侧站台的从站台ID
	public FakePlatform: number; 			//虚拟站台属性
	public GlobalID: number; 			//站台全局ID
	public ESB1_UID: number; 			//ESB1按钮的ID
	public ESB2_UID: number; 			//ESB2按钮的ID
	public ARB_UID: number; 			//自动折返按钮的ID
	public PCB_UID: number; 			//站台关闭按钮按钮的ID
	public LocSegmentID: number; 			//站台位置所在线段ID
	public LocSegmentObj: IDataUnit;
	public DefaultDwellTime_DN: number; 			//下行默认站停时间
	public DefaultDwellTime_UP: number; 			//上行默认站停时间
	public PltSide: number; 			//站台侧向
	public DoorsCtrlStrategy_DN: number; 			//下行默认开门策略 
	public DoorsCtrlStrategy_UP: number; 			//上行默认开门策略
	public PlatformSR: number; 			//站台限速
	public ConsistSupport: number; 			//支持的编组
	public PerfectConsistSupport: number; 			//完美支持的编组，该编组列车可全部开门。其他编组列车仅能打开部分车门。
	public WcoverOlLenght_UP: number; 			//上行区域，站台轨道外额外无线覆盖距离
	public WcoverOlLenght_DN: number; 			//下行区域，站台轨道外额外无线覆盖距离
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Identifier = BIN.ConvertTostring(buf, startIndex, 16);
		this.SecondlyUID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.FakePlatform = BIN.ConvertTonumber(buf, startIndex, 1);
		this.GlobalID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.ESB1_UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.ESB2_UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.ARB_UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.PCB_UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LocSegmentID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.DefaultDwellTime_DN = BIN.ConvertTonumber(buf, startIndex, 1);
		this.DefaultDwellTime_UP = BIN.ConvertTonumber(buf, startIndex, 1);
		this.PltSide = BIN.ConvertTonumber(buf, startIndex, 1);
		this.DoorsCtrlStrategy_DN = BIN.ConvertTonumber(buf, startIndex, 1);
		this.DoorsCtrlStrategy_UP = BIN.ConvertTonumber(buf, startIndex, 1);
		this.PlatformSR = BIN.ConvertTonumber(buf, startIndex, 2);
		this.ConsistSupport = BIN.ConvertTonumber(buf, startIndex, 2);
		this.PerfectConsistSupport = BIN.ConvertTonumber(buf, startIndex, 2);
		this.WcoverOlLenght_UP = BIN.ConvertTonumber(buf, startIndex, 4);
		this.WcoverOlLenght_DN = BIN.ConvertTonumber(buf, startIndex, 4);
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
		bin.dataMap.set(this.UID, this);
	}
	IndexObj(bin: BIN): void {
		this.LocSegmentObj = bin.dataMap.get(this.LocSegmentID);
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "站台信息";
		id = this.UID;
		Name = this.Identifier;
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
class 屏蔽门信息_PSDConsist implements IDataUnit {
	public PsdOpenCmdCode: number; 			//屏蔽门开门码
	public AssOpenIO: number; 			//对应的开门IO位
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.PsdOpenCmdCode = BIN.ConvertTonumber(buf, startIndex, 1);
		this.AssOpenIO = BIN.ConvertTonumber(buf, startIndex, 1);
	}
	IndexObj(bin: BIN): void {
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "屏蔽门信息_PSDConsist";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};

export class 屏蔽门信息 implements IDataUnit {
	public UID: number; 			//设备唯一标志符
	public Identifier: string; 			//线段的名称
	public OwnerSegmentID: number; 			//屏蔽门所属线段ID
	public OwnerSegmentObj: IDataUnit;
	public Side: number; 			//屏蔽门侧向
	public m_PSDConsistes: Array<屏蔽门信息_PSDConsist>;//
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Identifier = BIN.ConvertTostring(buf, startIndex, 16);
		this.OwnerSegmentID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Side = BIN.ConvertTonumber(buf, startIndex, 1);
		{
			this.m_PSDConsistes = new Array<屏蔽门信息_PSDConsist>();
			let len = BIN.ConvertTonumber(buf, startIndex, 1);
			let len2 = bin.config['TDB_MAX_PSD_CONSIST_NUM'];
			for (let i = 0; i < len2; i++) { let tmp = new 屏蔽门信息_PSDConsist(); tmp.DumpFormByte(bin, buf, startIndex); if (i < len) { this.m_PSDConsistes.push(tmp); } }
		}
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
		bin.dataMap.set(this.UID, this);
	}
	IndexObj(bin: BIN): void {
		this.OwnerSegmentObj = bin.dataMap.get(this.OwnerSegmentID);
		for (let o of this.m_PSDConsistes) { o.IndexObj(bin); }
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "屏蔽门信息";
		id = this.UID;
		Name = this.Identifier;
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
class 防淹门信息_AFZSegment implements IDataUnit {
	public SegmentID: number; 			//包含线段ID
	public SegmentObj: IDataUnit;
	public AFGLocation: number; 			//防淹门在该防淹区的方位
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.SegmentID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.AFGLocation = BIN.ConvertTonumber(buf, startIndex, 1);
	}
	IndexObj(bin: BIN): void {
		this.SegmentObj = bin.dataMap.get(this.SegmentID);
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "防淹门信息_AFZSegment";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};

export class 防淹门信息 implements IDataUnit {
	public UID: number; 			//设备唯一标志符
	public Identifier: string; 			//防淹门的名称
	public LocSegmentID: number; 			//防淹门所在线段ID
	public LocSegmentObj: IDataUnit;
	public LocSegmentOffset: number; 			//防淹门所在位置离线段起点偏移
	public Width: number; 			//防淹门的厚度
	public m_AFZSegmentes: Array<防淹门信息_AFZSegment>;//
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Identifier = BIN.ConvertTostring(buf, startIndex, 16);
		this.LocSegmentID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LocSegmentOffset = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Width = BIN.ConvertTonumber(buf, startIndex, 4);
		{
			this.m_AFZSegmentes = new Array<防淹门信息_AFZSegment>();
			let len = BIN.ConvertTonumber(buf, startIndex, 1);
			let len2 = bin.config['TDB_MAX_AFZ_SEG_NUM'];
			for (let i = 0; i < len2; i++) { let tmp = new 防淹门信息_AFZSegment(); tmp.DumpFormByte(bin, buf, startIndex); if (i < len) { this.m_AFZSegmentes.push(tmp); } }
		}
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
		bin.dataMap.set(this.UID, this);
	}
	IndexObj(bin: BIN): void {
		this.LocSegmentObj = bin.dataMap.get(this.LocSegmentID);
		for (let o of this.m_AFZSegmentes) { o.IndexObj(bin); }
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "防淹门信息";
		id = this.UID;
		Name = this.Identifier;
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
export class 信标信息 implements IDataUnit {
	public UID: number; 			//设备唯一标志符
	public Identifier: string; 			//标识符
	public Attrib: number; 			//信标属性
	public LocSegmentID: number; 			//信标所在线段ID
	public LocSegmentObj: IDataUnit;
	public LocSegmentOffset: number; 			//信标所在位置离线段起点偏移
	public LocErr_UP: number; 			//上行位置误差
	public LocErr_DN: number; 			//下行位置误差
	public TagMsg: number; 			//信标报文
	public VersionInfo: number; 			//地图版本信息
	public LineNumber: number; 			//所属线路编号
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Identifier = BIN.ConvertTostring(buf, startIndex, 16);
		this.Attrib = BIN.ConvertTonumber(buf, startIndex, 1);
		this.LocSegmentID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LocSegmentOffset = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LocErr_UP = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LocErr_DN = BIN.ConvertTonumber(buf, startIndex, 4);
		this.TagMsg = BIN.ConvertTonumber(buf, startIndex, 8);
		this.VersionInfo = BIN.ConvertTonumber(buf, startIndex, 2);
		this.LineNumber = BIN.ConvertTonumber(buf, startIndex, 1);
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
		this.UID += (this.LineNumber << 16);
		bin.dataMap.set(this.UID, this);
	}
	IndexObj(bin: BIN): void {
		this.LocSegmentObj = bin.dataMap.get(this.LocSegmentID);
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "信标信息";
		id = this.UID;
		Name = this.Identifier;
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
class 动态信标信息_Msg_Switch implements IDataUnit {
	public switchUID: number; 			//道岔ID
	public switchObj: IDataUnit;
	public SwitchState: number; 			//道岔状态
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.switchUID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.SwitchState = BIN.ConvertTonumber(buf, startIndex, 1);
	}
	IndexObj(bin: BIN): void {
		this.switchObj = bin.dataMap.get(this.switchUID);
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "动态信标信息_Msg_Switch";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};

class 动态信标信息_Msg_TSR implements IDataUnit {
	public TSRSectionDistance: number; 			//TSR段距离主应答器的距离
	public TSRSectionLength: number; 			//TSR段长度
	public TSRValue: number; 			//TSR限速值
	public WorkZoneFlag: number; 			//工作区域表示
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.TSRSectionDistance = BIN.ConvertTonumber(buf, startIndex, 4);
		this.TSRSectionLength = BIN.ConvertTonumber(buf, startIndex, 4);
		this.TSRValue = BIN.ConvertTonumber(buf, startIndex, 1);
		this.WorkZoneFlag = BIN.ConvertTonumber(buf, startIndex, 1);
	}
	IndexObj(bin: BIN): void {
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "动态信标信息_Msg_TSR";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};

class 动态信标信息_Msg implements IDataUnit {
	public Index: number; 			//报文序号
	public MA_Length: number; 			//点式MA距离主应答器的距离(含保护区段)
	public Overlap: number; 			//是否包含保护区段
	public m_Switches: Array<动态信标信息_Msg_Switch>;//
	public m_TSRes: Array<动态信标信息_Msg_TSR>;//
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.Index = BIN.ConvertTonumber(buf, startIndex, 1);
		this.MA_Length = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Overlap = BIN.ConvertTonumber(buf, startIndex, 1);
		{
			this.m_Switches = new Array<动态信标信息_Msg_Switch>();
			let len = BIN.ConvertTonumber(buf, startIndex, 1);
			let len2 = bin.config['TDB_MAX_BEACON_SWITCH_NUM'];
			for (let i = 0; i < len2; i++) { let tmp = new 动态信标信息_Msg_Switch(); tmp.DumpFormByte(bin, buf, startIndex); if (i < len) { this.m_Switches.push(tmp); } }
		}
		{
			this.m_TSRes = new Array<动态信标信息_Msg_TSR>();
			let len = BIN.ConvertTonumber(buf, startIndex, 1);
			let len2 = bin.config['TDB_MAX_BEACON_TSR_NUM'];
			for (let i = 0; i < len2; i++) { let tmp = new 动态信标信息_Msg_TSR(); tmp.DumpFormByte(bin, buf, startIndex); if (i < len) { this.m_TSRes.push(tmp); } }
		}
	}
	IndexObj(bin: BIN): void {
		for (let o of this.m_Switches) { o.IndexObj(bin); }
		for (let o of this.m_TSRes) { o.IndexObj(bin); }
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "动态信标信息_Msg";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};

export class 动态信标信息 implements IDataUnit {
	public DynamicBeaconID: number; 			//设备唯一标志符
	public DynamicBeaconObj: IDataUnit;
	public RouteSignalID: number; 			//关联信号机的UID
	public RouteSignalObj: IDataUnit;
	public ReleaseDB_UID: number; 			//关联的预告信标
	public m_Msges: Array<动态信标信息_Msg>;//
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.DynamicBeaconID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.RouteSignalID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.ReleaseDB_UID = BIN.ConvertTonumber(buf, startIndex, 4);
		{
			this.m_Msges = new Array<动态信标信息_Msg>();
			let len = BIN.ConvertTonumber(buf, startIndex, 1);
			let len2 = 1;
			for (let i = 0; i < len2; i++) { let tmp = new 动态信标信息_Msg(); tmp.DumpFormByte(bin, buf, startIndex); if (i < len) { this.m_Msges.push(tmp); } }
		}
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
	}
	IndexObj(bin: BIN): void {
		this.DynamicBeaconObj = bin.dataMap.get(this.DynamicBeaconID);
		this.RouteSignalObj = bin.dataMap.get(this.RouteSignalID);
		for (let o of this.m_Msges) { o.IndexObj(bin); }
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "动态信标信息";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
export class 轮径校准信标信息 implements IDataUnit {
	public CurrentBeaconID: number; 			//当前信标ID
	public CurrentBeaconObj: IDataUnit;
	public Dir: number; 			//轮径校准方向
	public OtherBeaconID: number; 			//另一信标的UID
	public OtherBeaconObj: IDataUnit;
	public OtherBackBeaconID: number; 			//另一个备份信标的UID,若为0xFFFFFFFF表示无此信标
	public OtherBackBeaconObj: IDataUnit;
	public Length: number; 			//距离另一个轮径校准信标距离
	public BackLength: number; 			//距离另一备份的轮径校准信标
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.CurrentBeaconID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Dir = BIN.ConvertTonumber(buf, startIndex, 1);
		this.OtherBeaconID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.OtherBackBeaconID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Length = BIN.ConvertTonumber(buf, startIndex, 4);
		this.BackLength = BIN.ConvertTonumber(buf, startIndex, 4);
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
	}
	IndexObj(bin: BIN): void {
		this.CurrentBeaconObj = bin.dataMap.get(this.CurrentBeaconID);
		this.OtherBeaconObj = bin.dataMap.get(this.OtherBeaconID);
		this.OtherBackBeaconObj = bin.dataMap.get(this.OtherBackBeaconID);
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "轮径校准信标信息";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
export class PSR信息 implements IDataUnit {
	public UID: number; 			//设备唯一标志符
	public Identifier: string; 			//标识符
	public LineNo: number; 			//线号
	public LocSegmentID_Start: number; 			//限速区起点(上行起点)所在线段ID
	public LocSegmentObj_Start: IDataUnit;
	public LocSegmentOffset_Start: number; 			//限速区起点(上行起点)所在位置离线段起点偏移
	public LocSegmentID_End: number; 			//限速区终点(下行终点)所在线段ID
	public LocSegmentObj_End: IDataUnit;
	public LocSegmentOffset_End: number; 			//限速区终点(下行终点)所在位置离线段起点偏移
	public SpeedRestriction: number; 			//限速值
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Identifier = BIN.ConvertTostring(buf, startIndex, 16);
		this.LineNo = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LocSegmentID_Start = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LocSegmentOffset_Start = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LocSegmentID_End = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LocSegmentOffset_End = BIN.ConvertTonumber(buf, startIndex, 4);
		this.SpeedRestriction = BIN.ConvertTonumber(buf, startIndex, 2);
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
		bin.dataMap.set(this.UID, this);
	}
	IndexObj(bin: BIN): void {
		this.LocSegmentObj_Start = bin.dataMap.get(this.LocSegmentID_Start);
		this.LocSegmentObj_End = bin.dataMap.get(this.LocSegmentID_End);
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "PSR信息";
		id = this.UID;
		Name = this.Identifier;
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
export class 坡度信息 implements IDataUnit {
	public UID: number; 			//设备唯一标志符
	public Identifier: string; 			//标识符
	public LineNo: number; 			//线号
	public LocSegmentID_Start: number; 			//坡度区起点(上行起点)所在线段ID
	public LocSegmentObj_Start: IDataUnit;
	public LocSegmentOffset_Start: number; 			//坡度区起点(上行起点)所在位置离线段起点偏移
	public LocSegmentID_End: number; 			//坡度区终点(下行终点)所在线段ID
	public LocSegmentObj_End: IDataUnit;
	public LocSegmentOffset_End: number; 			//坡度区终点(下行终点)所在位置离线段起点偏移
	public Gradient: number; 			//坡度斜率
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Identifier = BIN.ConvertTostring(buf, startIndex, 16);
		this.LineNo = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LocSegmentID_Start = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LocSegmentOffset_Start = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LocSegmentID_End = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LocSegmentOffset_End = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Gradient = BIN.ConvertTonumber(buf, startIndex, 2);
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
		bin.dataMap.set(this.UID, this);
	}
	IndexObj(bin: BIN): void {
		this.LocSegmentObj_Start = bin.dataMap.get(this.LocSegmentID_Start);
		this.LocSegmentObj_End = bin.dataMap.get(this.LocSegmentID_End);
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "坡度信息";
		id = this.UID;
		Name = this.Identifier;
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
export class 停车点信息 implements IDataUnit {
	public UID: number; 			//设备唯一标志符
	public Identifier: string; 			//标识符
	public Attrib: number; 			//停车点类型
	public LocSegmentID: number; 			//停车点所在线段ID
	public LocSegmentObj: IDataUnit;
	public LocSegmentOffset: number; 			//停车点所在位置离线段起点偏移 
	public Direction: number; 			//停车方向
	public ConsistSupport: number; 			//支持的编组
	public AlignAttract: number; 			//对齐属性
	public OpeningSR: number; 			//开口速度防护
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Identifier = BIN.ConvertTostring(buf, startIndex, 16);
		this.Attrib = BIN.ConvertTonumber(buf, startIndex, 2);
		this.LocSegmentID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LocSegmentOffset = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Direction = BIN.ConvertTonumber(buf, startIndex, 1);
		this.ConsistSupport = BIN.ConvertTonumber(buf, startIndex, 2);
		this.AlignAttract = BIN.ConvertTonumber(buf, startIndex, 1);
		this.OpeningSR = BIN.ConvertTonumber(buf, startIndex, 2);
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
		bin.dataMap.set(this.UID, this);
	}
	IndexObj(bin: BIN): void {
		this.LocSegmentObj = bin.dataMap.get(this.LocSegmentID);
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "停车点信息";
		id = this.UID;
		Name = this.Identifier;
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
export class ZC边界信息 implements IDataUnit {
	public ZC_UID: number; 			//ZC的ID
	public EntrySegment: number; 			//入口线段ID，本区段不在ZC范围内
	public ExitSegment: number; 			//出口线段，本区段为ZC最外延的线段
	public ExitDirection: number; 			//离开方向，也即边界所在方位
	public Type: number; 			//边界类型
	public NeighborZCUID: number; 			//此边界的ZCID
	public ZCBoundaryUID: number; 			//边界UID
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.ZC_UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.EntrySegment = BIN.ConvertTonumber(buf, startIndex, 4);
		this.ExitSegment = BIN.ConvertTonumber(buf, startIndex, 4);
		this.ExitDirection = BIN.ConvertTonumber(buf, startIndex, 1);
		this.Type = BIN.ConvertTonumber(buf, startIndex, 1);
		this.NeighborZCUID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.ZCBoundaryUID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
	}
	IndexObj(bin: BIN): void {
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "ZC边界信息";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
class 通信码位信息_Bit implements IDataUnit {
	public DeviceID: number; 			//码位代码的设备的UID
	public DeviceAttrib: number; 			//设备属性
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.DeviceID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.DeviceAttrib = BIN.ConvertTonumber(buf, startIndex, 1);
	}
	IndexObj(bin: BIN): void {
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "通信码位信息_Bit";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};

export class 通信码位信息 implements IDataUnit {
	public SRC_UID: number; 			//源设备UID
	public DST_UID: number; 			//目标的UID
	public BitMapCRC: number; 			//码表源CRC
	public BitMapChannel: number; 			//码表通道序号
	public m_Bites: Array<通信码位信息_Bit>;//
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.SRC_UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.DST_UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.BitMapCRC = BIN.ConvertTonumber(buf, startIndex, 4);
		this.BitMapChannel = BIN.ConvertTonumber(buf, startIndex, 4);
		{
			this.m_Bites = new Array<通信码位信息_Bit>();
			let len = BIN.ConvertTonumber(buf, startIndex, 2);
			let len2 = bin.config['TDB_MAX_COM_BIT_NUM'];
			for (let i = 0; i < len2; i++) { let tmp = new 通信码位信息_Bit(); tmp.DumpFormByte(bin, buf, startIndex); if (i < len) { this.m_Bites.push(tmp); } }
		}
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
	}
	IndexObj(bin: BIN): void {
		for (let o of this.m_Bites) { o.IndexObj(bin); }
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "通信码位信息";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
class 进路信息_RouteSegment implements IDataUnit {
	public RouteSegmentUID: number; 			//进路路径线段ID
	public RouteSegmentObj: IDataUnit;
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.RouteSegmentUID = BIN.ConvertTonumber(buf, startIndex, 4);
	}
	IndexObj(bin: BIN): void {
		this.RouteSegmentObj = bin.dataMap.get(this.RouteSegmentUID);
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "进路信息_RouteSegment";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};

class 进路信息_RouteSwitch implements IDataUnit {
	public RouteSwitchUID: number; 			//进路道岔ID
	public RouteSwitchObj: IDataUnit;
	public RouteSwitchState: number; 			//道岔状态
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.RouteSwitchUID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.RouteSwitchState = BIN.ConvertTonumber(buf, startIndex, 1);
	}
	IndexObj(bin: BIN): void {
		this.RouteSwitchObj = bin.dataMap.get(this.RouteSwitchUID);
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "进路信息_RouteSwitch";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};

class 进路信息_ApSegment implements IDataUnit {
	public APSegmentUID: number; 			//接近区段的线段ID
	public APSegmentObj: IDataUnit;
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.APSegmentUID = BIN.ConvertTonumber(buf, startIndex, 4);
	}
	IndexObj(bin: BIN): void {
		this.APSegmentObj = bin.dataMap.get(this.APSegmentUID);
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "进路信息_ApSegment";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};

export class 进路信息 implements IDataUnit {
	public UID: number; 			//进路的唯一标识符
	public Identifier: string; 			//标识符
	public StartSignalUID: number; 			//始端信号机
	public StartSignalObj: IDataUnit;
	public EndSignalUID: number; 			//终端信号机
	public EndSignalObj: IDataUnit;
	public m_RouteSegmentes: Array<进路信息_RouteSegment>;//
	public m_RouteSwitches: Array<进路信息_RouteSwitch>;//
	public m_ApSegmentes: Array<进路信息_ApSegment>;//
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Identifier = BIN.ConvertTostring(buf, startIndex, 16);
		this.StartSignalUID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.EndSignalUID = BIN.ConvertTonumber(buf, startIndex, 4);
		{
			this.m_RouteSegmentes = new Array<进路信息_RouteSegment>();
			let len = BIN.ConvertTonumber(buf, startIndex, 1);
			let len2 = bin.config['TDB_MAX_ROUTE_SEGMENT_NUM'];
			for (let i = 0; i < len2; i++) { let tmp = new 进路信息_RouteSegment(); tmp.DumpFormByte(bin, buf, startIndex); if (i < len) { this.m_RouteSegmentes.push(tmp); } }
		}
		{
			this.m_RouteSwitches = new Array<进路信息_RouteSwitch>();
			let len = BIN.ConvertTonumber(buf, startIndex, 1);
			let len2 = bin.config['TDB_MAX_ROUTE_SWITCH_NUM'];
			for (let i = 0; i < len2; i++) { let tmp = new 进路信息_RouteSwitch(); tmp.DumpFormByte(bin, buf, startIndex); if (i < len) { this.m_RouteSwitches.push(tmp); } }
		}
		{
			this.m_ApSegmentes = new Array<进路信息_ApSegment>();
			let len = BIN.ConvertTonumber(buf, startIndex, 1);
			let len2 = bin.config['TDB_MAX_ROUTE_APSEGMENT_NUM'];
			for (let i = 0; i < len2; i++) { let tmp = new 进路信息_ApSegment(); tmp.DumpFormByte(bin, buf, startIndex); if (i < len) { this.m_ApSegmentes.push(tmp); } }
		}
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
		bin.dataMap.set(this.UID, this);
	}
	IndexObj(bin: BIN): void {
		this.StartSignalObj = bin.dataMap.get(this.StartSignalUID);
		this.EndSignalObj = bin.dataMap.get(this.EndSignalUID);
		for (let o of this.m_RouteSegmentes) { o.IndexObj(bin); }
		for (let o of this.m_RouteSwitches) { o.IndexObj(bin); }
		for (let o of this.m_ApSegmentes) { o.IndexObj(bin); }
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "进路信息";
		id = this.UID;
		Name = this.Identifier;
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
export class 列车信息 implements IDataUnit {
	public UID: number; 			//列车永久标识符，即为PVID
	public CC_1_ComUID: number; 			//1端CC的UID
	public CC_2_ComUID: number; 			//2端CC的UID
	public TOD_1_ComUID: number; 			//1端TOD的UID
	public TOD_2_ComUID: number; 			//2端TOD的UID
	public WM_1_ComUID: number; 			//1端唤醒模块的UID
	public WM_2_ComUID: number; 			//2端唤醒模块的UID
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.CC_1_ComUID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.CC_2_ComUID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.TOD_1_ComUID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.TOD_2_ComUID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.WM_1_ComUID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.WM_2_ComUID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
		bin.dataMap.set(this.UID, this);
	}
	IndexObj(bin: BIN): void {
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "列车信息";
		id = this.UID;
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
class ZC信息_LinkCBI implements IDataUnit {
	public LinkCBIUID: number; 			//CBI的ID
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.LinkCBIUID = BIN.ConvertTonumber(buf, startIndex, 4);
	}
	IndexObj(bin: BIN): void {
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "ZC信息_LinkCBI";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};

export class ZC信息 implements IDataUnit {
	public UID: number; 			//设备唯一标志符
	public RSSPIUID: number; 			//RSSP-I设备通信UD
	public ZC_Attrib: number; 			//ID属性
	public m_LinkCBIes: Array<ZC信息_LinkCBI>;//
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.RSSPIUID = BIN.ConvertTonumber(buf, startIndex, 2);
		this.ZC_Attrib = BIN.ConvertTonumber(buf, startIndex, 4);
		{
			this.m_LinkCBIes = new Array<ZC信息_LinkCBI>();
			let len = BIN.ConvertTonumber(buf, startIndex, 4);
			let len2 = bin.config['TDB_MAX_ZC_LINK_CBI_NUM'];
			for (let i = 0; i < len2; i++) { let tmp = new ZC信息_LinkCBI(); tmp.DumpFormByte(bin, buf, startIndex); if (i < len) { this.m_LinkCBIes.push(tmp); } }
		}
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
		bin.dataMap.set(this.UID, this);
	}
	IndexObj(bin: BIN): void {
		for (let o of this.m_LinkCBIes) { o.IndexObj(bin); }
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "ZC信息";
		id = this.UID;
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
export class ATS信息 implements IDataUnit {
	public UID: number; 			//设备唯一标志符
	public ID_Attrib: number; 			//ID属性
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.ID_Attrib = BIN.ConvertTonumber(buf, startIndex, 4);
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
		bin.dataMap.set(this.UID, this);
	}
	IndexObj(bin: BIN): void {
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "ATS信息";
		id = this.UID;
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
export class 联锁信息 implements IDataUnit {
	public UID: number; 			//设备唯一标志符
	public ID_Attrib: number; 			//ID属性
	public RSSPIUID: number; 			//RSSP-I设备通信UD
	public Type: number; 			//联锁类型
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.ID_Attrib = BIN.ConvertTonumber(buf, startIndex, 4);
		this.RSSPIUID = BIN.ConvertTonumber(buf, startIndex, 2);
		this.Type = BIN.ConvertTonumber(buf, startIndex, 1);
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
		bin.dataMap.set(this.UID, this);
	}
	IndexObj(bin: BIN): void {
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "联锁信息";
		id = this.UID;
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
export class 线号信息 implements IDataUnit {
	public LineNo: number; 			//线号
	public Name: string; 			//线号名称
	public StartDevID: number; 			//起始设备ID
	public EndDevID: number; 			//终点设备ID
	public TSRSupport: number; 			//是否支持在该线路上设置临时限速
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.LineNo = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Name = BIN.ConvertTostring(buf, startIndex, 20);
		this.StartDevID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.EndDevID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.TSRSupport = BIN.ConvertTonumber(buf, startIndex, 1);
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
	}
	IndexObj(bin: BIN): void {
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "线号信息";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
export class 断链信息 implements IDataUnit {
	public StartingChainageRef: string; 			//断链起点里程系标志
	public StartingChainage: number; 			//断链起点里程 
	public EndingChainage: number; 			//断链等价值里程
	public Difference: number; 			//差值
	public Type: number; 			//断链类型
	public LineNo: number; 			//线号
	public SegmentUID: number; 			//断链点坐在线段
	public SegmentObj: IDataUnit;
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.StartingChainageRef = BIN.ConvertTostring(buf, startIndex, 4);
		this.StartingChainage = BIN.ConvertTonumber(buf, startIndex, 4);
		this.EndingChainage = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Difference = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Type = BIN.ConvertTonumber(buf, startIndex, 1);
		this.LineNo = BIN.ConvertTonumber(buf, startIndex, 4);
		this.SegmentUID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
	}
	IndexObj(bin: BIN): void {
		this.SegmentObj = bin.dataMap.get(this.SegmentUID);
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "断链信息";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
export class 线段边界设备信息 implements IDataUnit {
	public SegBdyUID: number; 			//设备唯一标志符
	public Identifier: string; 			//标识符
	public ChainageRef: string; 			//工务里程系标志
	public Chainage: number; 			//工务里程值
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.SegBdyUID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Identifier = BIN.ConvertTostring(buf, startIndex, 16);
		this.ChainageRef = BIN.ConvertTostring(buf, startIndex, 4);
		this.Chainage = BIN.ConvertTonumber(buf, startIndex, 4);
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
	}
	IndexObj(bin: BIN): void {
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "线段边界设备信息";
		Name = this.Identifier;
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
class 多动道岔组信息_Switch implements IDataUnit {
	public SwitchUID: number; 			//道岔ID
	public SwitchObj: IDataUnit;
	public SwitchState: number; 			//道岔表示
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.SwitchUID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.SwitchState = BIN.ConvertTonumber(buf, startIndex, 1);
	}
	IndexObj(bin: BIN): void {
		this.SwitchObj = bin.dataMap.get(this.SwitchUID);
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "多动道岔组信息_Switch";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};

export class 多动道岔组信息 implements IDataUnit {
	public UID: number; 			//设备唯一标志符
	public Identifier: string; 			//标识符
	public m_Switches: Array<多动道岔组信息_Switch>;//
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Identifier = BIN.ConvertTostring(buf, startIndex, 16);
		{
			this.m_Switches = new Array<多动道岔组信息_Switch>();
			let len = BIN.ConvertTonumber(buf, startIndex, 1);
			let len2 = bin.config['TDB_MAX_SWITCH_GROUP_NUM'];
			for (let i = 0; i < len2; i++) { let tmp = new 多动道岔组信息_Switch(); tmp.DumpFormByte(bin, buf, startIndex); if (i < len) { this.m_Switches.push(tmp); } }
		}
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
		bin.dataMap.set(this.UID, this);
	}
	IndexObj(bin: BIN): void {
		for (let o of this.m_Switches) { o.IndexObj(bin); }
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "多动道岔组信息";
		id = this.UID;
		Name = this.Identifier;
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
export class 里程标信息 implements IDataUnit {
	public ChainageRef: string; 			//里程系标志
	public ADFlag: number; 			//里程标加减属性
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.ChainageRef = BIN.ConvertTostring(buf, startIndex, 4);
		this.ADFlag = BIN.ConvertTonumber(buf, startIndex, 1);
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
	}
	IndexObj(bin: BIN): void {
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "里程标信息";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
class 环线信息_LcSegment implements IDataUnit {
	public LcSegmentID: number; 			//环线分段的ID,通信ID
	public LcSegmentObj: IDataUnit;
	public LcAuxID: number; 			//环线分段附加识别码
	public LcIsLocEnable: number; 			//是否有定位功能
	public LcIsRespEnable: number; 			//是否为双向通信环线
	public LcEntrySegmentUID: number; 			//分段起点所在线段ID
	public LcEntrySegmentObj: IDataUnit;
	public LcEntrySegmentOffset: number; 			//分段起点所在位置离线段起点偏移
	public LcExitSegmentUID: number; 			//分段终点所在线段ID
	public LcExitSegmentObj: IDataUnit;
	public LcExitSegmentOffset: number; 			//分段终点所在位置离线段起点偏移
	public LcSegmentLength: number; 			//环线分段长度
	public LoclcEntrySegmentUID: number; 			//有定位功能的环线分段起点所在线段ID
	public LoclcEntrySegmentObj: IDataUnit;
	public LoclcEntrySegmentOffset: number; 			//有定位功能的环线分段起点所在位置离线段起点偏移
	public LoclcExitSegmentUID: number; 			//有定位功能的环线分段终点所在线段ID
	public LoclcExitSegmentObj: IDataUnit;
	public LoclcExitSegmentOffset: number; 			//有定位功能的环线分段终点所在位置离线段起点偏移
	public LoclcSegmentLength: number; 			//有定位功能的环线分段长度
	public LoclcEntryCodec: number; 			//有定位功能的环线分段下行起点编码值
	public LoclcExitCodec: number; 			//有定位功能的环线分段下行终点编码值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.LcSegmentID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LcAuxID = BIN.ConvertTonumber(buf, startIndex, 1);
		this.LcIsLocEnable = BIN.ConvertTonumber(buf, startIndex, 1);
		this.LcIsRespEnable = BIN.ConvertTonumber(buf, startIndex, 1);
		this.LcEntrySegmentUID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LcEntrySegmentOffset = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LcExitSegmentUID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LcExitSegmentOffset = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LcSegmentLength = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LoclcEntrySegmentUID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LoclcEntrySegmentOffset = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LoclcExitSegmentUID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LoclcExitSegmentOffset = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LoclcSegmentLength = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LoclcEntryCodec = BIN.ConvertTonumber(buf, startIndex, 2);
		this.LoclcExitCodec = BIN.ConvertTonumber(buf, startIndex, 2);
	}
	IndexObj(bin: BIN): void {
		this.LcSegmentObj = bin.dataMap.get(this.LcSegmentID);
		this.LcEntrySegmentObj = bin.dataMap.get(this.LcEntrySegmentUID);
		this.LcExitSegmentObj = bin.dataMap.get(this.LcExitSegmentUID);
		this.LoclcEntrySegmentObj = bin.dataMap.get(this.LoclcEntrySegmentUID);
		this.LoclcExitSegmentObj = bin.dataMap.get(this.LoclcExitSegmentUID);
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "环线信息_LcSegment";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};

export class 环线信息 implements IDataUnit {
	public UID: number; 			//设备唯一标志符
	public Name: string; 			//环线名称
	public m_LcSegmentes: Array<环线信息_LcSegment>;//
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Name = BIN.ConvertTostring(buf, startIndex, 16);
		{
			this.m_LcSegmentes = new Array<环线信息_LcSegment>();
			let len = BIN.ConvertTonumber(buf, startIndex, 4);
			let len2 = bin.config['TDB_MAX_LC_SEGMENT_NUM'];
			for (let i = 0; i < len2; i++) { let tmp = new 环线信息_LcSegment(); tmp.DumpFormByte(bin, buf, startIndex); if (i < len) { this.m_LcSegmentes.push(tmp); } }
		}
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
		bin.dataMap.set(this.UID, this);
	}
	IndexObj(bin: BIN): void {
		for (let o of this.m_LcSegmentes) { o.IndexObj(bin); }
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "环线信息";
		id = this.UID;
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
export class 风井信息 implements IDataUnit {
	public UID: number; 			//设备唯一标志符
	public Identifier: string; 			//风井的名称
	public LocSegmentID: number; 			//风井所在线段ID
	public LocSegmentObj: IDataUnit;
	public LocSegmentOffset: number; 			//风井所在位置离线段起点偏移
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Identifier = BIN.ConvertTostring(buf, startIndex, 16);
		this.LocSegmentID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LocSegmentOffset = BIN.ConvertTonumber(buf, startIndex, 4);
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
		bin.dataMap.set(this.UID, this);
	}
	IndexObj(bin: BIN): void {
		this.LocSegmentObj = bin.dataMap.get(this.LocSegmentID);
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "风井信息";
		id = this.UID;
		Name = this.Identifier;
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
export class 无电区信息 implements IDataUnit {
	public UID: number; 			//设备唯一标志符
	public Identifier: string; 			//标识符
	public DeadZoneType: number; 			//无电区类型
	public LocSegmentID_Start: number; 			//无电区起点(上行起点)所在线段ID
	public LocSegmentObj_Start: IDataUnit;
	public LocSegmentOffset_Start: number; 			//无电区起点(上行起点)所在位置离线段起点偏移
	public LocSegmentID_End: number; 			//无电区终点(下行终点)所在线段ID
	public LocSegmentObj_End: IDataUnit;
	public LocSegmentOffset_End: number; 			//无电区终点(下行终点)所在位置离线段起点偏移
	public PreSegmentID_Start: number; 			//无电区起点预告点(上行起点)所在线段ID
	public PreSegmentObj_Start: IDataUnit;
	public PreSegmentOffset_Start: number; 			//无电区起点预告点(上行起点)所在位置离线段起点偏移
	public PreSegmentID_End: number; 			//无电区终点预告点(下行终点)所在线段ID
	public PreSegmentObj_End: IDataUnit;
	public PreSegmentOffset_End: number; 			//无电区终点预告点(下行终点)所在位置离线段起点偏移
	public minSpeed: number; 			//过分相区时，入口需要的最低限速
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Identifier = BIN.ConvertTostring(buf, startIndex, 16);
		this.DeadZoneType = BIN.ConvertTonumber(buf, startIndex, 1);
		this.LocSegmentID_Start = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LocSegmentOffset_Start = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LocSegmentID_End = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LocSegmentOffset_End = BIN.ConvertTonumber(buf, startIndex, 4);
		this.PreSegmentID_Start = BIN.ConvertTonumber(buf, startIndex, 4);
		this.PreSegmentOffset_Start = BIN.ConvertTonumber(buf, startIndex, 4);
		this.PreSegmentID_End = BIN.ConvertTonumber(buf, startIndex, 4);
		this.PreSegmentOffset_End = BIN.ConvertTonumber(buf, startIndex, 4);
		this.minSpeed = BIN.ConvertTonumber(buf, startIndex, 2);
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
		bin.dataMap.set(this.UID, this);
	}
	IndexObj(bin: BIN): void {
		this.LocSegmentObj_Start = bin.dataMap.get(this.LocSegmentID_Start);
		this.LocSegmentObj_End = bin.dataMap.get(this.LocSegmentID_End);
		this.PreSegmentObj_Start = bin.dataMap.get(this.PreSegmentID_Start);
		this.PreSegmentObj_End = bin.dataMap.get(this.PreSegmentID_End);
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "无电区信息";
		id = this.UID;
		Name = this.Identifier;
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
export class 弯道信息 implements IDataUnit {
	public UID: number; 			//设备唯一标志符
	public Identifier: string; 			//标识符
	public LocSegmentID_Start: number; 			//弯道区起点(上行起点)所在线段ID
	public LocSegmentObj_Start: IDataUnit;
	public LocSegmentOffset_Start: number; 			//弯道区起点(上行起点)所在位置离线段起点偏移
	public LocSegmentID_End: number; 			//弯道区终点(下行终点)所在线段ID
	public LocSegmentObj_End: IDataUnit;
	public LocSegmentOffset_End: number; 			//弯道区终点(下行终点)所在位置离线段起点偏移
	public CurveRadius: number; 			//曲率半径
	public Superelevation: number; 			//曲线设计超高，坡面夹角正弦值
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Identifier = BIN.ConvertTostring(buf, startIndex, 16);
		this.LocSegmentID_Start = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LocSegmentOffset_Start = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LocSegmentID_End = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LocSegmentOffset_End = BIN.ConvertTonumber(buf, startIndex, 4);
		this.CurveRadius = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Superelevation = BIN.ConvertTonumber(buf, startIndex, 4);
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
		bin.dataMap.set(this.UID, this);
	}
	IndexObj(bin: BIN): void {
		this.LocSegmentObj_Start = bin.dataMap.get(this.LocSegmentID_Start);
		this.LocSegmentObj_End = bin.dataMap.get(this.LocSegmentID_End);
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "弯道信息";
		id = this.UID;
		Name = this.Identifier;
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
export class 隧道信息 implements IDataUnit {
	public UID: number; 			//设备唯一标志符
	public Identifier: string; 			//标识符
	public LocSegmentID_Start: number; 			//隧道区起点(上行起点)所在线段ID
	public LocSegmentObj_Start: IDataUnit;
	public LocSegmentOffset_Start: number; 			//隧道区起点(上行起点)所在位置离线段起点偏移
	public LocSegmentID_End: number; 			//隧道区终点(下行终点)所在线段ID
	public LocSegmentObj_End: IDataUnit;
	public LocSegmentOffset_End: number; 			//隧道区终点(下行终点)所在位置离线段起点偏移
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Identifier = BIN.ConvertTostring(buf, startIndex, 16);
		this.LocSegmentID_Start = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LocSegmentOffset_Start = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LocSegmentID_End = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LocSegmentOffset_End = BIN.ConvertTonumber(buf, startIndex, 4);
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
		bin.dataMap.set(this.UID, this);
	}
	IndexObj(bin: BIN): void {
		this.LocSegmentObj_Start = bin.dataMap.get(this.LocSegmentID_Start);
		this.LocSegmentObj_End = bin.dataMap.get(this.LocSegmentID_End);
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "隧道信息";
		id = this.UID;
		Name = this.Identifier;
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
export class 库门信息 implements IDataUnit {
	public UID: number; 			//设备唯一标志符
	public Identifier: string; 			//库门的名称
	public LocSegmentID: number; 			//库门所在线段ID
	public LocSegmentObj: IDataUnit;
	public LocSegmentOffset: number; 			//库门所在位置离线段起点偏移
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Identifier = BIN.ConvertTostring(buf, startIndex, 16);
		this.LocSegmentID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LocSegmentOffset = BIN.ConvertTonumber(buf, startIndex, 4);
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
		bin.dataMap.set(this.UID, this);
	}
	IndexObj(bin: BIN): void {
		this.LocSegmentObj = bin.dataMap.get(this.LocSegmentID);
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "库门信息";
		id = this.UID;
		Name = this.Identifier;
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
export class 洗车机信息 implements IDataUnit {
	public UID: number; 			//设备唯一标志符
	public Identifier: string; 			//标识符
	public Direction: number; 			//洗车方向
	public LocSegmentID: number; 			//洗车机所在线段
	public LocSegmentObj: IDataUnit;
	public LocSegmentOffset_Start: number; 			//洗车区域起点所在位置离线段起点偏移
	public LocSegmentOffset_End: number; 			//洗车区域终点所在位置所在位置离线段起点偏移
	public StepPointOffset: number; 			//洗车步进停车位置
	public Door1UID: number; 			//洗车库门1
	public Door2UID: number; 			//洗车库门2
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Identifier = BIN.ConvertTostring(buf, startIndex, 16);
		this.Direction = BIN.ConvertTonumber(buf, startIndex, 1);
		this.LocSegmentID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LocSegmentOffset_Start = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LocSegmentOffset_End = BIN.ConvertTonumber(buf, startIndex, 4);
		this.StepPointOffset = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Door1UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Door2UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
		bin.dataMap.set(this.UID, this);
	}
	IndexObj(bin: BIN): void {
		this.LocSegmentObj = bin.dataMap.get(this.LocSegmentID);
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "洗车机信息";
		id = this.UID;
		Name = this.Identifier;
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
export class 安全疏散区域信息 implements IDataUnit {
	public UID: number; 			//设备唯一标志符
	public Identifier: string; 			//标识符
	public LocSegmentID_Start: number; 			//安全疏散区起点(上行起点)所在线段ID
	public LocSegmentObj_Start: IDataUnit;
	public LocSegmentOffset_Start: number; 			//安全疏散起点(上行起点)所在位置离线段起点偏移
	public LocSegmentID_End: number; 			//安全疏散终点(下行终点)所在线段ID
	public LocSegmentObj_End: IDataUnit;
	public LocSegmentOffset_End: number; 			//安全疏散终点(下行终点)所在位置离线段起点偏移
	public Side: number; 			//侧向
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Identifier = BIN.ConvertTostring(buf, startIndex, 16);
		this.LocSegmentID_Start = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LocSegmentOffset_Start = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LocSegmentID_End = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LocSegmentOffset_End = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Side = BIN.ConvertTonumber(buf, startIndex, 1);
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
		bin.dataMap.set(this.UID, this);
	}
	IndexObj(bin: BIN): void {
		this.LocSegmentObj_Start = bin.dataMap.get(this.LocSegmentID_Start);
		this.LocSegmentObj_End = bin.dataMap.get(this.LocSegmentID_End);
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "安全疏散区域信息";
		id = this.UID;
		Name = this.Identifier;
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
class SPKS信息_ProtectSection implements IDataUnit {
	public SPKS_SectionID: number; 			//防护的区段ID
	public SPKS_SectionObj: IDataUnit;
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.SPKS_SectionID = BIN.ConvertTonumber(buf, startIndex, 4);
	}
	IndexObj(bin: BIN): void {
		this.SPKS_SectionObj = bin.dataMap.get(this.SPKS_SectionID);
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "SPKS信息_ProtectSection";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};

export class SPKS信息 implements IDataUnit {
	public UID: number; 			//设备唯一标志符
	public Identifier: string; 			//标识符
	public m_ProtectSectiones: Array<SPKS信息_ProtectSection>;//
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Identifier = BIN.ConvertTostring(buf, startIndex, 16);
		{
			this.m_ProtectSectiones = new Array<SPKS信息_ProtectSection>();
			let len = BIN.ConvertTonumber(buf, startIndex, 4);
			let len2 = bin.config['TDB_MAX_SPKS_SECTION_NUM'];
			for (let i = 0; i < len2; i++) { let tmp = new SPKS信息_ProtectSection(); tmp.DumpFormByte(bin, buf, startIndex); if (i < len) { this.m_ProtectSectiones.push(tmp); } }
		}
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
		bin.dataMap.set(this.UID, this);
	}
	IndexObj(bin: BIN): void {
		for (let o of this.m_ProtectSectiones) { o.IndexObj(bin); }
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "SPKS信息";
		id = this.UID;
		Name = this.Identifier;
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
export class 极点信息 implements IDataUnit {
	public PoleDevUID: number; 			//极点设备UID
	public Segment_1_UID: number; 			//极点一侧线段UID
	public Segment_1_Obj: IDataUnit;
	public Segment_1_Offset: number; 			//极点在一侧线段的偏移
	public Segment_2_UID: number; 			//极点另一侧线段UID
	public Segment_2_Obj: IDataUnit;
	public Segment_2_Offset: number; 			//极点在另一侧线段的偏移
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.PoleDevUID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Segment_1_UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Segment_1_Offset = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Segment_2_UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Segment_2_Offset = BIN.ConvertTonumber(buf, startIndex, 4);
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
	}
	IndexObj(bin: BIN): void {
		this.Segment_1_Obj = bin.dataMap.get(this.Segment_1_UID);
		this.Segment_2_Obj = bin.dataMap.get(this.Segment_2_UID);
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "极点信息";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
export class 休眠区域信息 implements IDataUnit {
	public SleepZoneIndex: number; 			//休眠区域编号
	public SleepZoneSectionUID: number; 			//所属区段
	public SleepZoneSectionObj: IDataUnit;
	public LineNo: number; 			//所属线号
	public StopPointUID: number; 			//对应的停车点(含编组信息)
	public SleepWindowStart: number; 			//休眠窗口起点
	public SleepWindowOff: number; 			//休眠窗口终点
	public TestPriorityDirection: number; 			//测试时，优先跳跃方向
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.SleepZoneIndex = BIN.ConvertTonumber(buf, startIndex, 4);
		this.SleepZoneSectionUID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LineNo = BIN.ConvertTonumber(buf, startIndex, 4);
		this.StopPointUID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.SleepWindowStart = BIN.ConvertTonumber(buf, startIndex, 4);
		this.SleepWindowOff = BIN.ConvertTonumber(buf, startIndex, 4);
		this.TestPriorityDirection = BIN.ConvertTonumber(buf, startIndex, 1);
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
	}
	IndexObj(bin: BIN): void {
		this.SleepZoneSectionObj = bin.dataMap.get(this.SleepZoneSectionUID);
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "休眠区域信息";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
class 单轨多开道岔信息_SwitchWay implements IDataUnit {
	public WayLinkSegmentID: number; 			//连接对象ID
	public WayLinkSegmentObj: IDataUnit;
	public SwitchWaySR: number; 			//以该股道过道岔时的限速
	public SwitchWayCurveLen: number; 			//岔后弯曲长度
	public SwitchWaySRF: number; 			//可挠性道岔圆滑曲线形成成功后，以该股道过道岔时的限速 
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.WayLinkSegmentID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.SwitchWaySR = BIN.ConvertTonumber(buf, startIndex, 2);
		this.SwitchWayCurveLen = BIN.ConvertTonumber(buf, startIndex, 4);
		this.SwitchWaySRF = BIN.ConvertTonumber(buf, startIndex, 2);
	}
	IndexObj(bin: BIN): void {
		this.WayLinkSegmentObj = bin.dataMap.get(this.WayLinkSegmentID);
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "单轨多开道岔信息_SwitchWay";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};

export class 单轨多开道岔信息 implements IDataUnit {
	public UID: number; 			//设备唯一标志符
	public Identifier: string; 			//标识符
	public OwnerSectionID: number; 			//道岔所属区段ID
	public OwnerSectionObj: IDataUnit;
	public SwitchSharp: number; 			//道岔开口方向*
	public Flexibility: number; 			//可挠性
	public PointLinkObjID: number; 			//岔尖连接对象ID
	public SwitchWayNum: number; 			//岔后股道数目
	public m_SwitchWayes: Array<单轨多开道岔信息_SwitchWay>;//
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Identifier = BIN.ConvertTostring(buf, startIndex, 16);
		this.OwnerSectionID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.SwitchSharp = BIN.ConvertTonumber(buf, startIndex, 1);
		this.Flexibility = BIN.ConvertTonumber(buf, startIndex, 1);
		this.PointLinkObjID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.SwitchWayNum = BIN.ConvertTonumber(buf, startIndex, 1);
		{
			this.m_SwitchWayes = new Array<单轨多开道岔信息_SwitchWay>();
			let len = BIN.ConvertTonumber(buf, startIndex, 4);
			let len2 = bin.config['TDB_MAX_N_SWITCH_WAY_NUM'];
			for (let i = 0; i < len2; i++) { let tmp = new 单轨多开道岔信息_SwitchWay(); tmp.DumpFormByte(bin, buf, startIndex); if (i < len) { this.m_SwitchWayes.push(tmp); } }
		}
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
		bin.dataMap.set(this.UID, this);
	}
	IndexObj(bin: BIN): void {
		this.OwnerSectionObj = bin.dataMap.get(this.OwnerSectionID);
		for (let o of this.m_SwitchWayes) { o.IndexObj(bin); }
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "单轨多开道岔信息";
		id = this.UID;
		Name = this.Identifier;
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
export class 鸣笛区域信息 implements IDataUnit {
	public UID: number; 			//设备唯一标志符
	public Identifier: string; 			//标识符
	public LineNo: number; 			//线号
	public LocSegmentID_Start: number; 			//鸣笛区起点(上行起点)所在线段ID
	public LocSegmentObj_Start: IDataUnit;
	public LocSegmentOffset_Start: number; 			//鸣笛区起点(上行起点)所在位置离线段起点偏移
	public LocSegmentID_End: number; 			//鸣笛区终点(下行终点)所在线段ID
	public LocSegmentObj_End: IDataUnit;
	public LocSegmentOffset_End: number; 			//鸣笛区终点(下行终点)所在位置离线段起点偏移
	public BlewInterval: number; 			//鸣笛间隔
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.Identifier = BIN.ConvertTostring(buf, startIndex, 16);
		this.LineNo = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LocSegmentID_Start = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LocSegmentOffset_Start = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LocSegmentID_End = BIN.ConvertTonumber(buf, startIndex, 4);
		this.LocSegmentOffset_End = BIN.ConvertTonumber(buf, startIndex, 4);
		this.BlewInterval = BIN.ConvertTonumber(buf, startIndex, 1);
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
		bin.dataMap.set(this.UID, this);
	}
	IndexObj(bin: BIN): void {
		this.LocSegmentObj_Start = bin.dataMap.get(this.LocSegmentID_Start);
		this.LocSegmentObj_End = bin.dataMap.get(this.LocSegmentID_End);
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "鸣笛区域信息";
		id = this.UID;
		Name = this.Identifier;
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};
class 互联互通ZC重叠区信息_OpSwitch implements IDataUnit {
	public OpSwitchUID: number; 			//道岔ID 
	public OpSwitchObj: IDataUnit;
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.OpSwitchUID = BIN.ConvertTonumber(buf, startIndex, 4);
	}
	IndexObj(bin: BIN): void {
		this.OpSwitchObj = bin.dataMap.get(this.OpSwitchUID);
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "互联互通ZC重叠区信息_OpSwitch";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};

class 互联互通ZC重叠区信息_OpSection_OpSegment implements IDataUnit {
	public OpSegmentUID: number; 			//线段ID 
	public OpSegmentObj: IDataUnit;
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.OpSegmentUID = BIN.ConvertTonumber(buf, startIndex, 4);
	}
	IndexObj(bin: BIN): void {
		this.OpSegmentObj = bin.dataMap.get(this.OpSegmentUID);
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "互联互通ZC重叠区信息_OpSection_OpSegment";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};

class 互联互通ZC重叠区信息_OpSection implements IDataUnit {
	public OpSectionUID: number; 			//区段ID 
	public OpSectionObj: IDataUnit;
	public m_OpSegmentes: Array<互联互通ZC重叠区信息_OpSection_OpSegment>;//
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.OpSectionUID = BIN.ConvertTonumber(buf, startIndex, 4);
		{
			this.m_OpSegmentes = new Array<互联互通ZC重叠区信息_OpSection_OpSegment>();
			let len = BIN.ConvertTonumber(buf, startIndex, 1);
			let len2 = bin.config['TDB_MAX_SEG_NUM_IN_SEC'];
			for (let i = 0; i < len2; i++) { let tmp = new 互联互通ZC重叠区信息_OpSection_OpSegment(); tmp.DumpFormByte(bin, buf, startIndex); if (i < len) { this.m_OpSegmentes.push(tmp); } }
		}
	}
	IndexObj(bin: BIN): void {
		this.OpSectionObj = bin.dataMap.get(this.OpSectionUID);
		for (let o of this.m_OpSegmentes) { o.IndexObj(bin); }
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "互联互通ZC重叠区信息_OpSection";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};

export class 互联互通ZC重叠区信息 implements IDataUnit {
	public HandoverZC_UID: number; 			//移交ZC
	public AcceptZC_UID: number; 			//接收ZC
	public m_OpSwitches: Array<互联互通ZC重叠区信息_OpSwitch>;//
	public m_OpSectiones: Array<互联互通ZC重叠区信息_OpSection>;//
	public CRC32: number; 			//单一信息区的CRC值
	DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void {
		this.HandoverZC_UID = BIN.ConvertTonumber(buf, startIndex, 4);
		this.AcceptZC_UID = BIN.ConvertTonumber(buf, startIndex, 4);
		{
			this.m_OpSwitches = new Array<互联互通ZC重叠区信息_OpSwitch>();
			let len = BIN.ConvertTonumber(buf, startIndex, 1);
			let len2 = bin.config['TDB_MAX_SWH_NUM_IN_OPZCOL'];
			for (let i = 0; i < len2; i++) { let tmp = new 互联互通ZC重叠区信息_OpSwitch(); tmp.DumpFormByte(bin, buf, startIndex); if (i < len) { this.m_OpSwitches.push(tmp); } }
		}
		{
			this.m_OpSectiones = new Array<互联互通ZC重叠区信息_OpSection>();
			let len = BIN.ConvertTonumber(buf, startIndex, 1);
			let len2 = bin.config['TDB_MAX_SEC_NUM_IN_OPZCOL'];
			for (let i = 0; i < len2; i++) { let tmp = new 互联互通ZC重叠区信息_OpSection(); tmp.DumpFormByte(bin, buf, startIndex); if (i < len) { this.m_OpSectiones.push(tmp); } }
		}
		this.CRC32 = BIN.ConvertTonumber(buf, startIndex, 4);
	}
	IndexObj(bin: BIN): void {
		for (let o of this.m_OpSwitches) { o.IndexObj(bin); }
		for (let o of this.m_OpSectiones) { o.IndexObj(bin); }
	}
	toString(): string {
		let id = 0; let Name = ""; let className = "互联互通ZC重叠区信息";
		if (Name !== "") { className = Name; } if (id && id !== 0) { className += "0x" + id.toString(16); }; return className;
	}
};

