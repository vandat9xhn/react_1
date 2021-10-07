//
export function getDataCanvasRotate({ img, width = 0, height = 0 }) {
    const wh_max = width >= height ? width : height;

    const x_center = wh_max / 2;
    const y_center = wh_max / 2;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = wh_max;
    canvas.height = wh_max;

    ctx.translate(x_center, y_center);
    ctx.rotate(Math.PI / 2);
    ctx.translate(-x_center, -y_center);
    ctx.drawImage(img, 0, 0, width, height);

    const new_img =
        width < height
            ? ctx.getImageData(0, 0, height, width)
            : ctx.getImageData(wh_max - height, wh_max - width, height, width);

    const canvas_2 = document.createElement('canvas');
    const ctx_2 = canvas_2.getContext('2d');

    canvas_2.width = height;
    canvas_2.height = width;

    ctx_2.putImageData(new_img, 0, 0);

    return canvas_2.toDataURL('image/png');
}
