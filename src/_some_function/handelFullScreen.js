//
export function requestFullscreen({
    elm = document.getElementsByTagName()[0],
}) {
    try {
        if (elm.requestFullscreen) {
            return elm.requestFullscreen();
        }

        if (elm.webkitRequestFullscreen) {
            return elm.webkitRequestFullscreen();
        }

        if (elm.msRequestFullscreen) {
            return elm.msRequestFullscreen();
        }
    } catch (err) {
        console.log(err);
    }
}

//
export function exitFullscreen() {
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
