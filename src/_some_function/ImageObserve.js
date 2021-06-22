// 
export default function observerVidPic({
    elements,
    threshold = 0,
    callback = () => {},
}) {
    const intersection_observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.src = entry.target.dataset.src;
                    entry.target.removeAttribute('data-src');
                    observer.unobserve(entry.target);
                    callback();
                }
            });
        },
        {
            threshold: threshold,
        }
    );

    elements.forEach((element) => {
        intersection_observer.observe(element);
    });
}
