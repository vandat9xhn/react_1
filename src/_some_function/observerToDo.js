//
const observeToDo = (
    elm,
    callback = () => {},
    threshold = 0.9,
    when_over = false,
    rootMargin = `100px 100px`,
) => {
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
            threshold: threshold,
            rootMargin: rootMargin,
        }
    );
    observer.observe(elm);
};

export default observeToDo;
