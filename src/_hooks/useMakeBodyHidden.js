import { useLayoutEffect } from 'react';

/**
 * This hook is used for screen
*/
export const useMakeBodyHidden = (
    hidden_obj = {
        hidden_scroll: false,
        hidden_app: false,
        hidden_header: false,
        scroll_contain: false,
    }
) => {
    //
    const { hidden_scroll, hidden_app, hidden_header } = hidden_obj;

    //
    useLayoutEffect(() => {
        const body = document.getElementsByTagName('body')[0];

        body.dataset.countHidden =
            (body.dataset ? +body.dataset.countHidden || 0 : 0) + 1;

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
            hidden_scroll && (body.dataset.hiddenScroll -= 1);
            hidden_app && (body.dataset.hiddenApp -= 1);
            hidden_header && (body.dataset.hiddenHeader -= 1);

            if (body.dataset.countHidden == 0) {
                body.removeAttribute('data-count-hidden');
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
