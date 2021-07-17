//
export function observeVirtualScroll(
    elm,
    handleIntersecting,
    rootMargin_y = 500
) {
    const observer_scroll = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    handleIntersecting(true);
                } else {
                    handleIntersecting(false);
                }
            });
        },
        {
            rootMargin: `${rootMargin_y}px 0px`,
        }
    );

    observer_scroll.observe(elm);
}
