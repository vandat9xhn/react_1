// ---
export function getDataCanvasCrop({
    img_elm = <img />,
    x = 0,
    y = 0,
    width = 0,
    height = 0,
}) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(img_elm, x, y, width, height, 0, 0, width, height);

    return canvas.toDataURL('image/png');
}
