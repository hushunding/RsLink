var xml2js = require('xml2js')
var fs = require('fs')
const util = require('util');
// import * as xml2js from 'xml2js';
exports.LoadLineData = {
    Load(viewxmlfile, func = null) {
        this._viewxmlfile = viewxmlfile
        this._viewSvgData = ''
        this._viewRawData = null
        this._viewSize = { 'x': Number.MAX_VALUE, 'y': Number.MAX_VALUE, 'x1': 0, 'y1': 0 }

        let xmlstr = fs.readFileSync(viewxmlfile, 'utf-8')

        let parser = new xml2js.Parser({ explicitArray: false });
        parser.parseString(xmlstr, (err, result) => {
            //解析出svg
            this._viewRawData = result
            this.BuildViewSvg(this._viewRawData)
            if (func != null) {
                func(this._viewRawData, this._viewSvgData)
            }
        })

    },
    updateSize(points) {
        for (let p of points.split(';')) {
            let [x, y] = p.split(',')
            x = Math.round(x)
            y = Math.round(y)
            this._viewSize.x = this._viewSize.x > x ? x : this._viewSize.x
            this._viewSize.y = this._viewSize.y > y ? y : this._viewSize.y
            this._viewSize.x1 = this._viewSize.x1 < x ? x : this._viewSize.x1
            this._viewSize.y1 = this._viewSize.y1 < y ? y : this._viewSize.y1
        }
    },
    DBDevFrame(devView, devName, devFunc) {

        // if(devView.hasOwnProperty('LeftUpPoint'))
        // {

        // }
        try {
            let devFrame = {
                '$': {
                    'id': devView.ID.slice(1),
                    'class': 'DB_Item DB_' + devName
                }
            }
            this[devName](devView, devFrame)
            return devFrame
        }
        catch (e) {
            return null
        }

    },
    Segment(devView, devFrame) {
        devFrame['polyline'] =
            {
                '$': {
                    'class': "DB_Segment_Main",
                    'points': devView.PointList.replace(/;/g, ' ')
                }
            }
        this.updateSize(devView.PointList)
    },
    Switch(devView, devFrame) {
        devFrame['polyline'] =
            [{
                '$': {
                    'class': "DB_Swh_P",    //岔前
                    'points': devView.MergePoint + ' ' + devView.SwitchPoint
                }
            },
            {
                '$': {
                    'class': "DB_Swh_N",    //岔后，直
                    'points': devView.SwitchPoint + ' ' + devView.NormalPoint
                }
            },
            {
                '$': {
                    'class': "DB_Swh_R",    //岔后，湾
                    'points': devView.SwitchPoint + ' ' + devView.ReversePoint
                }
            },
            ]
            this.TypeText(devView, devFrame)
    },
    TypeText(devView, devFrame) {
        let [x, y] = devView.NamePoint.split(',')
        let [ff, fz] = devView.NameFont.split(',')
        devFrame['text'] = {
            '$': {
                x: x,
                y: y,
            },
            '_': devView.Name
        }
    },
    Platform(devView, devFrame) {
        let [x, y] = devView.LeftUpPoint.split(',')
        devFrame['rect'] = {
            '$': {
                x: x,
                y: y,
                width: devView.DeviceWidth,
                height: devView.DeviceHeight
            }
        }
        this.updateSize(devView.LeftUpPoint)
    },
    ControlArea(devView, devFrame) {
        let [x, y] = devView.NamePoint.split(',')
        let [ff, fz] = devView.NameFont.split(',')
        devFrame['text'] = {
            '$': {
                x: x,
                y: Math.round(y) + 100,
            },
            '_': devView.Name
        }
        this.updateSize(devView.LeftUpPoint)
    },
    BuildViewSvg(viewData) {
        let svgObject = { 'svg': { 'g': [] } }
        //debug

        let defs = {
            'style': {
                '$': {
                    'type': "text/css"
                },
                '_': '.DB_Segment_Main{stroke-width:5;}\n'
                + '.DB_Item{fill:none;stroke:LightGray;stroke-width:1;}'

            }
        }
        //svgObject.svg['defs'] = defs;
        let objList = svgObject.svg.g
        let Graphs = viewData.Project.Graphs;
        for (let devViewAtt in Graphs) {
            let devName = devViewAtt.slice(0, -1)
            let devViewList = Graphs[devViewAtt][devName]
            if (!this.hasOwnProperty(devName)) {
                continue
            }
            for (let devView of devViewList) {
                let devframe = this.DBDevFrame(devView, devName)
                if (devframe != null) objList.push(devframe);
            }

        }
        svgObject.svg['$'] = {
            id: 'MianView',
            'version': "1.1",
            'xmlns': "http://www.w3.org/2000/svg",
            'xmlns:xlink': "http://www.w3.org/1999/xlink",
            'width': Math.round(this._viewSize.x1 * 0.8),
            'height': Math.round(this._viewSize.y1 * 0.8),
            viewBox: util.format("%d,%d,%d,%d", this._viewSize.x, this._viewSize.y / 2, this._viewSize.x1, this._viewSize.y1)
        }
        let builder = new xml2js.Builder({ 'cdata': true })
        this._viewSvgData = builder.buildObject(svgObject)
        //debug
        fs.writeFile("test1.svg", this._viewSvgData)
    }
}