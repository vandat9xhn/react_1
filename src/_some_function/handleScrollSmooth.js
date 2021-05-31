//
export function handleScrollSmooth(
    handleScrollTo = function () {},
    elm = document.getElementsByTagName('HTML')[0],
) {
    elm.style.scrollBehavior = 'smooth';

    setTimeout(() => {
        handleScrollTo();

        setTimeout(() => {
            elm.style.scrollBehavior = 'auto';
        }, 0);
    }, 0);
}
