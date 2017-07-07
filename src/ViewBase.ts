//定义图形的基本数据
export class Point {
    x: number
    y: number
    constructor([x, y]) {
        [this.x, this.y] = [x, y]
    }
    toString(fixed: number = 2): string {
        return `${this.x.toFixed(fixed)},${this.y.toFixed(fixed)}`
    }
    static fromString(pointStr: string): Point {
        let [x, y] = pointStr.split(',')
        return new Point([parseFloat(x), parseFloat(y)])
    }
    isEqual(p:Point):boolean
    {
        return (this.x===p.x) && (this.y === p.y)
    }
}
export class Polyline {
    pointList: Array<Point>
    lenList: Array<number>
    totalLen: number

    constructor() {
        this.pointList = new Array<Point>()
    }
    calcLen() {
        this.totalLen = 0
        for (let i = 0; i < this.pointList.length - 1; i++) {
            let s = this.pointList[i]
            let e = this.pointList[i + 1]
            let len = Math.sqrt(Math.pow(e.x - s.x, 2) + Math.pow(e.y - s.y, 2))
            this.lenList.push(len)
            this.totalLen += len
        }
    }
    getPoint(percent: number) {
        console.assert(percent <= 1.0)
        let leftlen = this.totalLen * percent;
        let lineCount = 0
        for (var i = 0; i < this.lenList.length; i++) {
            if (leftlen <= this.lenList[i]) {
                break
            }
            leftlen -= this.lenList[i]
        }
        let p = this.lenList[i] / leftlen
        let s = this.pointList[i]
        let e = this.pointList[i + 1]
        return {i:i, p:new Point([s.x + (e.x - s.x) * p, s.y + (e.y - s.y) * p])}
    }
    toString(fixed: number = 2) {
        let res: string = ""
        let pointStrList = new Array<string>()
        for (let point of this.pointList) {
            pointStrList.push(point.toString(fixed))
        }
        return pointStrList.join(" ")
    }
    static fromString(polyString: string): Polyline {
        let res = new Polyline()
        for (let pstr of polyString.split('[ ;]')) {
            res.pointList.push(Point.fromString(pstr))
        }
        res.calcLen()
        return res
    }
    pushBack(p:Point)
    {
        if(this.pointList.length ===0 
        ||!this.pointList[this.pointList.length-1].isEqual(p))
        {
            this.pointList.push(p)
        }
    }
    concatBack(pointList:Array<Point>)
    {
        for(let p of pointList)
        {
            this.pushBack(p)
        }
    }
    
    pushBefore(p:Point)
    {
        if(this.pointList.length ===0 
        ||!this.pointList[0].isEqual(p))
        {
            this.pointList.unshift(p)
        }
    }
    concatBefore(pointList:Array<Point>)
    {
        for(let p of pointList)
        {
            this.pushBefore(p)
        }
    }
}




