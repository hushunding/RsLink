/**
 * name
 */
export class RefInt {
    public value: number;
    constructor()
    {
        this.Rest()
    }
    public Rest()
    {
        this.value = 0;
    }
    public Set(value: number)
    {
        this.value = value;
    }
}
import Buffer = require('buffer')
export class BIN {
    dataMap:Map<number, IDataUnit>;
    config:Object
    constructor() {
        this.dataMap = new Map<number, IDataUnit>()
        this.config = new Object;
    }
    static ConvertTostring(buf: Buffer, startiondex: RefInt, size: number): string {
        for(var last = 0; last < size; last++)
        {
            if(buf[last+startiondex.value] === 0)
            {
                break
            }
        }
        let res =  buf.toString("utf-8", startiondex.value, startiondex.value + last);
        startiondex.value += size
        return res
    }
    static ConvertTonumber(buf: Buffer, startiondex: RefInt, size: number): number {
        let res = buf.readUIntBE(startiondex.value, size)
        startiondex.value += size
        return res
    }
}

export interface IDataUnit {
    DumpFormByte(bin: BIN, buf: Buffer, startIndex: RefInt): void;
    IndexObj(bin:BIN):void;
}

