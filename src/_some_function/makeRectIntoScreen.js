//
export function makeRectIntoScreen(elm) {
    const { left, right, width } = elm.getBoundingClientRect();

    if (innerWidth <= width) {
        return;
    }

    if (left < 0) {
        elm.style.transform = `translateX(${-left + 2}px)`;
    }

    if (right > innerWidth) {
        elm.style.transform = `translateX(${innerWidth - right}px)`;
    }
}
