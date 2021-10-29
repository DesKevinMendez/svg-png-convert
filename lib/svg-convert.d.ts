/**
 *
 * @param svg SVGAElement
 * @returns string
 */
declare const svgToSvgBase64: (svg: SVGAElement) => string;
/**
 *
 * @param originalBase64 base64 svg image
 * @param width size to image
 * @returns Promise<string | null>
 */
declare const base64SvgToBase64Png: (originalBase64: string, width: number) => Promise<string | null>;
/**
 *
 * @param svgXML SVGAElement
 * @param size number
 * @returns Promise<string | null>
 */
declare const svgToPng: (svgXML: SVGAElement, size: number) => Promise<string | null>;
export { base64SvgToBase64Png, svgToSvgBase64, svgToPng };
//# sourceMappingURL=svg-convert.d.ts.map