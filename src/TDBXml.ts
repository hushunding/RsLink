//加载XML

import xml2js = require('xml2js')
import fs = require('fs')

export class TDBXml {
    _viewRawData: object;
    _viewxmlfile: string;

    constructor(viewxmlfile: string, funcs: Array<Function> = null) {
        this._viewRawData = null
        let parser = new xml2js.Parser({ explicitArray: false });
        try {
            let xmlstr = fs.readFileSync(viewxmlfile, 'utf-8')
            parser.parseString(xmlstr, (err, result: object) => {
                if (err) { console.log(err) } else {
                    funcs.forEach(element => element(result))
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
}