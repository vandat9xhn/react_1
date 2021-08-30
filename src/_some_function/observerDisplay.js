//
export function observerDisplay({
    elm,
    callbackDisplay = () => {},
    callbackNoDisplay = () => {},
    options = {},
}) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                callbackDisplay();
            } else {
                callbackNoDisplay();
            }
        }, options);
    });

    observer.observe(elm);
}
