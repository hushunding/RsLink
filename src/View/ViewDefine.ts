
export class ViewCmd {
    UID: string
    cmd: string
}
export class ViewCmdList {
    lastchaneid: number  //-1,表示整体更新
    cmdList: ViewCmd[]
}

//变更内容
export interface ItemInfo {
    class: string,
    style: string,
    geo: string,
}
export class ViewData {
    //interface
    UID: string; //设备内容
    data: ItemInfo
    isEqual(o: ViewData) {
        if (JSON.stringify(this) === JSON.stringify(o)) {
            return true
        }
        return false
    }
}
export class ViewUpdateInfo {
    startChangeid: number    //如果为-1表示整体更新
    changeid: number   //变更号
    changeInfo: Map<string,ViewData>
    constructor() {
        this.changeInfo = new Map<string,ViewData>()
    }
}

export class ChangeLog {
    changeid: number   //变更号
    changeInfo: ViewData
}