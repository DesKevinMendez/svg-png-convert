/**
 *
 * @param name string
 * @param svg string svg base64
 */
declare const downloadSVG: (name: string, svg: string) => void;
/**
 * @param name string
 * @param size number
 * @param svg Node
 * */
declare const downloadPNG: (name: string, size: number, svg: SVGAElement) => void;
export { downloadSVG, downloadPNG };
//# sourceMappingURL=svg-download.d.ts.map