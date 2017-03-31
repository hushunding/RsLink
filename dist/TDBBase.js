"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name
 */
class RefInt {
    constructor() {
        this.Rest();
    }
    Rest() {
        this.value = 0;
    }
    Set(value) {
        this.value = value;
    }
}
exports.RefInt = RefInt;
class BIN {
    constructor() {
        this.dataMap = new Map();
        this.config = new Object;
    }
    static ConvertTostring(buf, startiondex, size) {
        for (var last = 0; last < size; last++) {
            if (buf[last + startiondex.value] == 0) {
                break;
            }
        }
        let res = buf.toString("utf-8", startiondex.value, startiondex.value + last);
        startiondex.value += size;
        return res;
    }
    static ConvertTonumber(buf, startiondex, size) {
        let res = buf.readUIntBE(startiondex.value, size);
        startiondex.value += size;
        return res;
    }
}
exports.BIN = BIN;
//# sourceMappingURL=TDBBase.js.map