import { IS_MOBILE } from "../_constant/Constant";

//
export function getClientX(e) {
    return IS_MOBILE ? e.touches[0].clientX : e.clientX;
}

//
export function getClientY(e) {
    return IS_MOBILE ? e.touches[0].clientY : e.clientY;
}

//
export function getClientXY(e) {
    return IS_MOBILE
        ? e.touches
            ? { client_x: e.touches[0].clientX, client_y: e.touches[0].clientY }
            : { client_x: 0, client_y: 0 }
        : { client_x: e.clientX, client_y: e.clientY };
}

//
export function getTouchClientXY(e, touche_ix) {
    return {
        client_x: e.touches[touche_ix].clientX,
        client_y: e.touches[touche_ix].clientY,
    };
}
