var changSet;
var changSettmp;
var cmdList; //命令集
function AddRefFun(set, item, func, arg) {
    item.data('func', func);
    item.data('arg', arg);
    set.push(item)
}
function freshView() {

    if(cmdList.length == 0)
    {
        cmdList = [{id : 0,c:'hb'}]
    }
    $.post("/viewCmd", { cmd: cmdList },
        (data, status) => {
            if(data.comment == 'Heatbeat')
            {
                console.log(JSON.stringify(data))
            }
        })

    //申请数据更新
    changSettmp.clear()
    changSet.forEach(function (item) {
        item.data('func')(item, item.data('arg'))
    })
    //changSet.clear()
    var tmp = changSet
    changSet = changSettmp;
    changSettmp = tmp;
}

$(document).ready(function () {
    $('#myviewsvg').load('/getManView')
    changSet = Snap.selectAll()
    changSettmp = Snap.selectAll()
    setInterval(freshView, 1000);
    cmdList = []
})