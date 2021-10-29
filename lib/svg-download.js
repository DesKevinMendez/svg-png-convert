"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadPNG = exports.downloadSVG = void 0;
var svg_convert_1 = require("./svg-convert");
/**
 *
 * @param name string
 * @param svg string svg base64
 */
var downloadSVG = function (name, svg) {
    var svgBlob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8', });
    var svgUrl = URL.createObjectURL(svgBlob);
    var downloadLink = document.createElement('a');
    downloadLink.href = svgUrl;
    downloadLink.download = name;
    downloadLink.click();
    downloadLink.remove();
};
exports.downloadSVG = downloadSVG;
/**
 * @param name string
 * @param size number
 * @param svg Node
 * */
var downloadPNG = function (name, size, svg) {
    (0, svg_convert_1.base64SvgToBase64Png)((0, svg_convert_1.svgToSvgBase64)(svg), size).then(function (pngSrc) {
        if (pngSrc) {
            var a = document.createElement('a');
            a.href = pngSrc;
            a.download = "" + name;
            a.click();
            a.remove();
        }
    });
};
exports.downloadPNG = downloadPNG;
