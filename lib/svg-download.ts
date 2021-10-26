import { base64SvgToBase64Png } from "./svg-convert";

  /**
   * 
   * @param name string
   * @param svg string
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
  const downloadPNG =(name: string, size: number, svg: Node): void => {
    const xml = new XMLSerializer().serializeToString(svg);
    const svg64 = btoa(xml);
    const b64start = 'data:image/svg+xml;base64,';
    const image64 = b64start + svg64;
    base64SvgToBase64Png(image64, size * 2).then((pngSrc) => {
      if (pngSrc) {
        const a = document.createElement('a');
        a.href = pngSrc;
        a.download = `${name}-qr-code`;
        a.click();
        a.remove();
      }
    });
  }

export { downloadSVG, downloadPNG }