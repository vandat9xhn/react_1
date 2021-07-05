import { useLayoutEffect } from 'react';

//
const window_scroll_arr = [
    // {
    //     x: 0,
    //     y: 0,
    // }
];

//
export const useMakeBodyHidden = (
    hidden_obj = {
        hidden_scroll: false,
        hidden_app: false,
        hidden_header: false,
    }
) => {
    //
    const { hidden_scroll, hidden_app, hidden_header } = hidden_obj;

    //
    useLayoutEffect(() => {
        const body = document.getElementsByTagName('body')[0];

        // if (!body.dataset.countHidden || body.dataset.countHidden == 0) {
        window_scroll_arr.push({
            x: window.scrollX,
            y: window.scrollY,
        });

        console.log(document.getElementsByTagName('html')[0].scrollTop);
        // }

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

        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);

        if (body.dataset.countHidden == 1) {
            const App = document.getElementsByClassName('App')[0];
            App.scrollTo(window_scroll_arr[0].x, window_scroll_arr[0].y);
        }

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

            const { x, y } = window_scroll_arr[window_scroll_arr.length - 1];
            console.log(x, y, window_scroll_arr);
            window.scrollTo(x, y);

            setTimeout(() => {
                window_scroll_arr.splice(window_scroll_arr.length - 1, 1);
            }, 0);
        };
    }, []);
};
