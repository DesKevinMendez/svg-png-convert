/**
 * 
 * @param originalBase64 base64 svg image
 * @param width size to image
 * @returns Promise<string | null>
 */
export const base64SvgToBase64Png = (originalBase64: string, width: number): Promise<string | null> => {
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