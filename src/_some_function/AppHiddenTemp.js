//
export function toggleAppHiddenTemp({ is_hidden = false }) {
    const html = document.getElementsByTagName('html')[0];

    const count_hidden = (+html.dataset.scrollNoneOnce || 0) + (is_hidden ? 1 : -1)

    if (count_hidden > 0) {
        html.dataset.scrollNoneOnce = count_hidden;
    } else {
        html.removeAttribute('data-scroll-none-once');
    }
    
}
