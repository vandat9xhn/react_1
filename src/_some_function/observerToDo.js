//
const observeToDo = (
    elm,
    callback = () => {},
    threshold = 0.9,
    when_over = false
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
        }
    );
    observer.observe(elm);
};

export default observeToDo;
