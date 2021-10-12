//
export function toggleAppTouchNone({ touch_none = false }) {
    const html = document.getElementsByTagName('html')[0];

    if (touch_none) {
        if (!html.dataset.touchNone) {
            html.dataset.touchNone = 1;
        }
    } else {
        html.removeAttribute('data-touch-none');
    }
}
