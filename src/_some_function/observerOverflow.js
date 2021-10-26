//
export function observerOverflow({
    elm,
    detectOverflow = ({ entry }) => {},
    callbackOverflow = ({ entry }) => {},
    options = {},
}) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (detectOverflow({ entry: entry })) {
                callbackOverflow({ entry: entry, observer: observer });
            }
        }, options);
    });

    observer.observe(elm);
}
