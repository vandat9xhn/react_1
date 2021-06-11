// 
const should_full_screen = false

//
export function requestFullscreen() {
    if (!should_full_screen) {
        return;
    }

    if (localStorage.is_mobile == 0) {
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
    if (!should_full_screen) {
        return;
    }
    
    if (localStorage.is_mobile == 0) {
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
