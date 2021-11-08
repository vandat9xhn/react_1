//
export function observeVirtualScroll(
    elm,
    handleIntersecting,
    rootMargin_y = 500,
    root
) {
    const observer_scroll = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.boundingClientRect.height) {
                    if (entry.isIntersecting) {
                        handleIntersecting(true);
                    } else {
                        handleIntersecting(false);
                    }
                }

                // console.log(entry);
            });
        },
        {
            rootMargin: `${rootMargin_y}px 0px`,
            root: root,
        }
    );

    observer_scroll.observe(elm);
}
