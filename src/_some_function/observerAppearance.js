const observerAppearance = (elm) => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.dataset.appearance = true
                observer.unobserve(entry.target)
            } else {
                if (entry.target.dataset.appearance) {
                    entry.target.dataset.appearance = false
                    observer.unobserve(entry.target)
                }
            }
        });
    }, {
        threshold: 0.9
    });
    //
    observer.observe(elm);
};

export default observerAppearance;
