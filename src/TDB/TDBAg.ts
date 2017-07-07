//算法
import { TDB, SegmentEx, VectorLineP, Direction, IDataUnit, SwitchEx } from "./TDBBIN";

export function GetObjListBetween(scope: VectorLineP, includeSwh:Boolean = true, maxCount:number = 20): IDataUnit[] {
    let res = new Array<IDataUnit>()
    let cur:IDataUnit = scope.startP.SegmentObj
    while(maxCount > 0)
    {
        res.push(cur)
        if(cur === scope.endP.SegmentObj)
        {
            break
        }
        let pre = cur as SegmentEx
        cur = pre.GetLinkObj(scope.dir)
        if( cur instanceof SegmentEx)
        {
            //继续下一条
        }
        else if(cur instanceof SwitchEx)
        {
            if(includeSwh)
            {
                res.push(cur)
            }
            cur = (cur as SwitchEx).GetLinkSegment(pre, scope.dir)
        }
        maxCount--
    }
    return res
}