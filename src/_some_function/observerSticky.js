//
export function observerSticky({
    fake_elm,
    fake_bottom = 0,
    callbackOver = () => {},
    callbackNotOver = () => {},
    options = {},
}) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.boundingClientRect.bottom <= fake_bottom) {
                callbackOver();
            } else {
                callbackNotOver();
            }
        }, options);
    });

    observer.observe(fake_elm);

    return observer;
}
