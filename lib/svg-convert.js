"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.svgToPng = exports.svgToSvgBase64 = exports.base64SvgToBase64Png = void 0;
/**
 *
 * @param svg SVGAElement
 * @returns string
 */
var svgToSvgBase64 = function (svg) {
    var xml = new XMLSerializer().serializeToString(svg);
    var svg64 = btoa(xml);
    var b64start = 'data:image/svg+xml;base64,';
    var image64 = b64start + svg64;
    return image64;
};
exports.svgToSvgBase64 = svgToSvgBase64;
/**
 *
 * @param originalBase64 base64 svg image
 * @param width size to image
 * @returns Promise<string | null>
 */
var base64SvgToBase64Png = function (originalBase64, width) {
    var img = document.createElement('img');
    return new Promise(function (resolve, reject) {
        img.onload = function () {
            document.body.appendChild(img);
            var canvas = document.createElement('canvas');
            var ratio = (img.clientWidth / img.clientHeight) || 1;
            document.body.removeChild(img);
            canvas.width = width;
            canvas.height = width / ratio;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            try {
                resolve(canvas.toDataURL('image/png'));
            }
            catch (e) {
                reject(null);
            }
        };
        img.src = originalBase64;
        img.remove();
    });
};
exports.base64SvgToBase64Png = base64SvgToBase64Png;
/**
 *
 * @param svgXML SVGAElement
 * @param size number
 * @returns Promise<string | null>
 */
var svgToPng = function (svgXML, size) {
    return base64SvgToBase64Png(svgToSvgBase64(svgXML), size);
};
exports.svgToPng = svgToPng;
