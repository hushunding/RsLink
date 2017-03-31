function defualtResp(req, res)
{
    res.send({status:Array({id:0, state:'hb'}), comment:'Heatbeat'})
}
exports.ViewSrc = function (srvName, port, svgdata, viewCmdResp = null) {
    let express = require('express');
    let URL = require('url')
    let bodyParser = require('body-parser');
    let pathLib = require('path')
    let app = express();
    app.use("/MyView", express.static('MyView'));
    app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
    app.use(bodyParser.json()); // for parsing application/json
    app.get('/getManView', (req, res) => {
        res.send(svgdata)
    })
    app.post('/viewCmd', (req, res) => {
        if(viewCmdResp == null || viewCmdResp(req, res) == 0)
        {
            defualtResp(req, res)
        }
        
    })
    let server = app.listen(port, function () {
        let host = server.address();
        console.log(`设备${srvName}的View地址为 http://%s:%s`, host.address, host.port);
    })
}
