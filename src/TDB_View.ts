//连接图形与数据

import { LocPointP, VectorLineP, SegmentEx, SwitchEx, TDB } from "./TDB/TDBBIN";
import { GetObjListBetween } from "./TDB/TDBAg";
import { Polyline, Point } from "./ViewBase";

export function LinkTDBbView(tdbbin: TDB, ViewObjMap: Map<number, object>)
{
    for( let seg of tdbbin.DeviceInfo['线段信息'])
    {
       //(seg as SegmentEx).SpecalData
    }
}

export function SegmentPointToViewPoint(locPoint: LocPointP, ViewObjMap: Map<number, object>) {
    let SegPoly: Polyline = (ViewObjMap.get(locPoint.SegmentID) as any).PointList
    let segPoint = SegPoly.getPoint(locPoint.Offset / locPoint.SegmentObj.Length)
    return { segPoint, SegPoly }
}

export function VectorLineToViewPolyLine(vctLine: VectorLineP, ViewObjMap: Map<number, object>): Polyline {
    let res = new Polyline()
    let vct = vctLine.getNormalLine()
    let linkList = GetObjListBetween(vct)
    let starPoint = SegmentPointToViewPoint(vct.startP, ViewObjMap)
    let endPoint = SegmentPointToViewPoint(vct.endP, ViewObjMap)


    if (vct.startP.SegmentID === vct.endP.SegmentID) {
        res.pushBack(starPoint.segPoint.p)
        let mid = starPoint.SegPoly.pointList.slice(starPoint.segPoint.i + 1, endPoint.segPoint.i + 1)
        res.concatBack(mid)
        res.pushBack(endPoint.segPoint.p)
    }
    else {
        res.pushBack(starPoint.segPoint.p)
        let left = starPoint.SegPoly.pointList.slice(starPoint.segPoint.i + 1)
        res.concatBack(left)

        //去头尾
        let mid = new Array<Point>()
        for (let i = 1; i < linkList.length - 1; i++) {
            let cur = linkList[i]
            if (cur instanceof SegmentEx) {
                let SegPoly: Polyline = (ViewObjMap.get((cur as SegmentEx).UID) as any).PointList
                res.concatBack(SegPoly.pointList)
            }
            else if (cur instanceof SwitchEx) {
                let SwhPoint: Point = (ViewObjMap.get((cur as SwitchEx).UID) as any).SwitchPoint
                res.pushBack(SwhPoint)
            }
        }
        let right = endPoint.SegPoly.pointList.slice(0, endPoint.segPoint.i + 1)
        res.concatBack(right)
        res.pushBack(endPoint.segPoint.p)
    }
    return res
}
