let viewdata = require('./LoadLineData.js').LoadLineData
let viewSrv = require('./ViewSrv.js').ViewSrc
let ViewSvgData, ViewRawData;

//准备站场数据
let viewxmlfile = 'res/ATSProject.xml'
viewdata.Load(viewxmlfile, (raw,svg) => {
    ViewRawData = raw;
    viewSrv('OC', 8081, svg);
})
