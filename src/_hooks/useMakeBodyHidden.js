import { useLayoutEffect } from 'react';

/**
 * This hook is used for screen
 */
export const useMakeBodyHidden = (
    hidden_obj = {
        blur_header: true,
        hidden_app: false,
        hidden_header: false,
        hidden_scroll: false,
    }
) => {
    //
    const {
        blur_header = true,
        hidden_scroll = false,
        hidden_app = false,
        hidden_header = false,
    } = hidden_obj;

    //
    useLayoutEffect(() => {
        !hidden_scroll && window.scrollTo(0, 0);

        const body = document.getElementsByTagName('body')[0];

        body.dataset.countHidden =
            (body.dataset ? +body.dataset.countHidden || 0 : 0) + 1;

        blur_header &&
            (body.dataset.blurHeader =
                (body.dataset ? +body.dataset.blurHeader || 0 : 0) + 1);

        hidden_app &&
            (body.dataset.hiddenApp =
                (body.dataset ? +body.dataset.hiddenApp || 0 : 0) + 1);

        hidden_scroll &&
            (body.dataset.hiddenScroll =
                (body.dataset ? +body.dataset.hiddenScroll || 0 : 0) + 1);

        hidden_header &&
            (body.dataset.hiddenHeader =
                (body.dataset ? +body.dataset.hiddenHeader || 0 : 0) + 1);

        return () => {
            body.dataset.countHidden -= 1;
            blur_header && (body.dataset.blurHeader -= 1);
            hidden_scroll && (body.dataset.hiddenScroll -= 1);
            hidden_app && (body.dataset.hiddenApp -= 1);
            hidden_header && (body.dataset.hiddenHeader -= 1);

            if (body.dataset.countHidden == 0) {
                body.removeAttribute('data-count-hidden');
            }

            if (blur_header && body.dataset.blurHeader == 0) {
                body.removeAttribute('data-blur-header');
            }

            if (hidden_app && body.dataset.hiddenApp == 0) {
                body.removeAttribute('data-hidden-app');
            }

            if (hidden_scroll && body.dataset.hiddenScroll == 0) {
                body.removeAttribute('data-hidden-scroll');
            }

            if (hidden_header && body.dataset.hiddenHeader == 0) {
                body.removeAttribute('data-hidden-header');
            }
        };
    }, []);
};
