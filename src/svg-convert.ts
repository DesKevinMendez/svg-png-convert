/**
 * 
 * @param svg SVGAElement
 * @returns string
 */
const svgToSvgBase64 = (svg: SVGAElement): string => {
  const xml = new XMLSerializer().serializeToString(svg);
  const svg64 = btoa(xml);
  const b64start = 'data:image/svg+xml;base64,';
  const image64 = b64start + svg64;
  return image64;
}

/**
 * 
 * @param originalBase64 base64 svg image
 * @param width size to image
 * @returns Promise<string | null>
 */
const base64SvgToBase64Png = (originalBase64: string, width: number): Promise<string | null> => {
  const img = document.createElement('img');
  return new Promise((resolve, reject): void => {
    img.onload = function () {
      document.body.appendChild(img);
      const canvas = document.createElement('canvas');
      const ratio = (img.clientWidth / img.clientHeight) || 1;
      document.body.removeChild(img);
      canvas.width = width;
      canvas.height = width / ratio;
      const ctx = canvas.getContext('2d');
      (ctx as CanvasRenderingContext2D).drawImage(img, 0, 0, canvas.width, canvas.height);
      try {
        resolve(canvas.toDataURL('image/png'));
      } catch (e) {
        reject(null);
      }
    };
    img.src = originalBase64;
    img.remove();
  });
}

/**
 * 
 * @param svgXML SVGAElement
 * @param size number
 * @returns Promise<string | null>
 */
const svgToPng = (svgXML: SVGAElement, size: number): Promise<string | null> => {
  return base64SvgToBase64Png(svgToSvgBase64(svgXML), size)
}

export { base64SvgToBase64Png, svgToSvgBase64, svgToPng }