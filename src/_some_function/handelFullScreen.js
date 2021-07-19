import { IS_MOBILE } from "../_constant/Constant";

// 
const should_full_screen = false

//
export function requestFullscreen() {
    if (!should_full_screen || !IS_MOBILE) {
        return;
    }

    try {
        const body = document.getElementsByTagName('BODY')[0];

        if (body.requestFullscreen) {
            body.requestFullscreen();
        } else if (body.webkitRequestFullscreen) {
            body.webkitRequestFullscreen();
        } else if (body.msRequestFullscreen) {
            body.msRequestFullscreen();
        }
    } catch (err) {
        console.log(err);
    }
}

//
export function exitFullscreen() {
    if (!should_full_screen || !IS_MOBILE) {
        return;
    }

    if (document.fullscreenElement) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}
