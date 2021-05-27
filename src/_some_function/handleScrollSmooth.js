//
export function handleScrollSmooth(handleScrollTo = function () {}) {
    document.getElementsByTagName('HTML')[0].style.scrollBehavior = 'smooth';

    setTimeout(() => {
        handleScrollTo();

        setTimeout(() => {
            document.getElementsByTagName('HTML')[0].style.scrollBehavior =
                'auto';
        }, 0);
    }, 0);
}
