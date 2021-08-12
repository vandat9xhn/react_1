//
export function observerDisplay({ elm, callback }) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.target.getBoundingClientRect().height) {
                callback();
            }
        });
    });

    observer.observe(elm);
}
