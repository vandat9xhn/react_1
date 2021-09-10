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

        use_z_index: false,
        screen_z_index: 0,
    }
) => {
    //
    const {
        blur_header = true,
        hidden_scroll = false,
        hidden_app = false,
        hidden_header = false,

        use_z_index = false,
        screen_z_index = 0,
    } = hidden_obj;

    //
    useLayoutEffect(() => {
        !hidden_scroll && window.scrollTo(0, 0);

        const body = document.getElementsByTagName('body')[0];

        body.dataset.countHidden =
            (body.dataset ? +body.dataset.countHidden || 0 : 0) + 1;

        blur_header &&
            (body.dataset.blurHeader = (+body.dataset.blurHeader || 0) + 1);

        hidden_app &&
            (body.dataset.hiddenApp = (+body.dataset.hiddenApp || 0) + 1);

        hidden_scroll &&
            (body.dataset.hiddenScroll = (+body.dataset.hiddenScroll || 0) + 1);

        hidden_header &&
            (body.dataset.hiddenHeader = (+body.dataset.hiddenHeader || 0) + 1);

        return () => {
            body.dataset.countHidden -= 1;

            if (body.dataset.countHidden == 0) {
                body.removeAttribute('data-count-hidden');
            }

            if (blur_header) {
                body.dataset.blurHeader -= 1;
                body.dataset.blurHeader == 0 &&
                    body.removeAttribute('data-blur-header');
            }

            if (hidden_app) {
                body.dataset.hiddenApp -= 1;
                body.dataset.hiddenApp == 0 &&
                    body.removeAttribute('data-hidden-app');
            }

            if (hidden_scroll) {
                body.dataset.hiddenScroll -= 1;
                body.dataset.hiddenScroll == 0 &&
                    body.removeAttribute('data-hidden-scroll');
            }

            if (hidden_header) {
                body.dataset.hiddenHeader -= 1;
                body.dataset.hiddenHeader == 0 &&
                    body.removeAttribute('data-hidden-header');
            }
        };
    }, []);

    useLayoutEffect(() => {
        const body = document.getElementsByTagName('body')[0];
        const screen_bg = document.getElementsByClassName(
            'AppScreen_floor-active'
        )[0];

        if (use_z_index) {
            body.dataset.screenZIndex =
                (body.dataset.screenZIndex || '') +
                '_' +
                screen_z_index.toString();
            screen_bg.style.zIndex = screen_z_index;
        } else if (body.dataset.screenZIndex) {
            screen_bg.style.zIndex = body.dataset.screenZIndex.slice(
                body.dataset.screenZIndex.lastIndexOf('_') + 1
            );
        }

        return () => {
            if (use_z_index) {
                body.dataset.screenZIndex = body.dataset.screenZIndex.slice(
                    0,
                    body.dataset.screenZIndex.lastIndexOf('_')
                );

                if (body.dataset.screenZIndex == '') {
                    body.removeAttribute('data-screen-z-index');
                }
            }
        };
    }, []);
};
