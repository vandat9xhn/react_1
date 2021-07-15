// 
export function observeVirtualScroll(elm, handleIntersecting) {
    const observer_scroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                handleIntersecting(true)
            } else {
                handleIntersecting(false)
            }
        });
    }, {
        rootMargin: '500px 0px'
    })

    observer_scroll.observe(elm)
}