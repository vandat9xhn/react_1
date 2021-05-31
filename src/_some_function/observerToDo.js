//
const observeToDo = (elm, callback = () => {}, threshold = 0.9) => {
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
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
