//
function observeToDo({
    elm,
    when_over = false,
    callback = () => {},

    root = null,
    rootMargin = `500px`,
    threshold = 0,
}) {
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (
                    entry.isIntersecting ||
                    (when_over && entry.boundingClientRect.bottom <= 0)
                ) {
                    callback();
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            root: root,
            threshold: threshold,
            rootMargin: rootMargin,
        }
    );

    observer.observe(elm);
}

export default observeToDo;
