//
export function toggleAppHiddenTemp({ is_hidden = false }) {
    const html = document.getElementsByTagName('html')[0];

    if (is_hidden) {
        html.dataset.scrollNoneOnce = 1;
    } else {
        html.removeAttribute('data-scroll-none-once');
    }
}
