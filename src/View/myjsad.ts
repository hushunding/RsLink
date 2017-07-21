interface Window
{
    require:Function;
    exports:{};
}
var exports
if (exports === undefined) {
    exports = {}
    window.exports = exports
    window.require = function (lib:String) {
        //./seen.my

        var ss = lib.split(/[\\/\.]/)
        var libName = ss[ss.length-2]
        return window[libName]
    }
}
