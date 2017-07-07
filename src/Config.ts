import { readFileSync } from "fs";
let resRoot = 'res'
let Config = JSON.parse(readFileSync(`${resRoot}/Config.json`).toString('utf-8'))
for (var mainkey in Config) {
    for (var key in Config[mainkey]) {
        if (key.endsWith('FilePath')) {
            Config[mainkey][key] = `${resRoot}/${Config[mainkey][key]}`
        }
    }
}
Config['resRoot'] = 'res'
export { Config }