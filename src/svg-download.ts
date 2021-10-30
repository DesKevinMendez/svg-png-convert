import { base64SvgToBase64Png, svgToSvgBase64 } from "./svg-convert";
  /**
   * 
   * @param name string
   * @param svg string svg base64
   */
   const downloadSVG = (name: string, svg: string): void => {
    const svgBlob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8', });
    const svgUrl = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement('a');
    downloadLink.href = svgUrl;
    downloadLink.download = name;
    downloadLink.click();
    downloadLink.remove();
  }

  /**
   * @param name string
   * @param size number
   * @param svg Node
   * */
  const downloadSVGasPNG =(name: string, size: number, svg: SVGAElement): void => {
    base64SvgToBase64Png(svgToSvgBase64(svg), size).then((pngSrc) => {
      if (pngSrc) {
        const a = document.createElement('a');
        a.href = pngSrc;
        a.download = `${name}`;
        a.click();
        a.remove();
      }
    });
  }

export { downloadSVG, downloadSVGasPNG }