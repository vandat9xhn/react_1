import { ROTATE_RATIO } from "../_constant/Constant";

//
export function getCenterClientRect(elm) {
    const { top, bottom, left, right } = elm.getBoundingClientRect();

    return {
        x_center: (left + right) / 2,
        y_center: (top + bottom) / 2,
    };
}

/*
@x, y: position of 1 point, ex: clientX, clientY
@x_center, y_center: center of client rect
*/
export function getAngleWithCenterRect({
    x = 0,
    y = 0,
    x_center = 0,
    y_center = 0,
}) {
    return (Math.atan2(y - y_center, x - x_center) * 180) / Math.PI;
}

//
export function getLengthFrom2Point({ x1 = 0, y1 = 0, x2 = 0, y2 = 0 }) {
    return ((x1 - x2) ** 2 + (y1 - y2) ** 2) ** 0.5;
}

/* -------------- */

//
export function handleResizeRect({
    elm,

    old_client_x,
    old_client_y,
    new_client_x,
    new_client_y,
}) {
    const { x_center, y_center } = getCenterClientRect(elm);

    const old_client_length = getLengthFrom2Point({
        x1: old_client_x,
        y1: old_client_y,
        x2: x_center,
        y2: y_center,
    });

    const new_client_length = getLengthFrom2Point({
        x1: new_client_x,
        y1: new_client_y,
        x2: x_center,
        y2: y_center,
    });

    return {
        scale_change: (new_client_length - old_client_length) / ROTATE_RATIO,
    };
}

//
export function handleRotateRect({
    elm,

    old_client_x,
    old_client_y,
    new_client_x,
    new_client_y,
}) {
    const { x_center, y_center } = getCenterClientRect(elm);

    const old_angle = getAngleWithCenterRect({
        x: old_client_x,
        y: old_client_y,
        x_center: x_center,
        y_center: y_center,
    });

    const new_angle = getAngleWithCenterRect({
        x: new_client_x,
        y: new_client_y,
        x_center: x_center,
        y_center: y_center,
    });

    return {
        rotate_change: new_angle - old_angle,
    };
}
