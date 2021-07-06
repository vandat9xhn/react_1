import { useLayoutEffect } from 'react';
//
import { window_screen_scroll_arr } from '../component/_screen/_main/AppScreen';

//
export const useMakeBodyHidden = (
    hidden_obj = {
        not_use: false,
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

        window.scrollTo(0, 0);

        const screen_floor_ix = window_screen_scroll_arr.length - 1;
        const { x, y } =
            window_screen_scroll_arr[window_screen_scroll_arr.length - 1];

        if (body.dataset.countHidden == 1) {
            const App = document.getElementsByClassName('App')[0];
            App.scrollTo(x, y);
        } else {
            const app_screen_floor =
                document.getElementsByClassName('AppScreen_floor')[
                    screen_floor_ix - 1
                ];
            app_screen_floor.scrollTo(x, y);
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

            setTimeout(() => {
                window.scrollTo(x, y);

                window_screen_scroll_arr.splice(
                    window_screen_scroll_arr.length - 1,
                    1
                );
            }, 0);
        };
    }, []);
};
