import { useEffect, useRef } from 'react';
//
import {
    changeBodyOverflowY,
    checkBodyHidden,
} from '../_some_function/makeBodyHidden';

//
// export const useMakeBodyHidden = () => {
//     //
//     const is_body_hidden = useRef(checkBodyHidden());

//     //
//     useEffect(() => {
//         !is_body_hidden.current && changeBodyOverflowY('hidden');

//         return () => {
//             !is_body_hidden.current && changeBodyOverflowY('auto');
//         };
//     }, []);
// };

//
export const useMakeBodyHidden = () => {
    //
    const scroll_y = useRef(0);

    //
    useEffect(() => {
        scroll_y.current = window.scrollY;

        const body = document.getElementsByTagName('body')[0];
        body.dataset.countHidden =
            (body.dataset ? +body.dataset.countHidden || 0 : 0) + 1;

        localStorage.is_mobile != 1 &&
            window.addEventListener('scroll', handleStopScroll);

        return () => {
            body.dataset.countHidden -= 1;

            if (body.dataset.countHidden == 0) {
                body.removeAttribute('data-count-hidden');
            }

            localStorage.is_mobile != 1 &&
                window.removeEventListener('scroll', handleStopScroll);
        };
    }, []);

    //
    function handleStopScroll() {
        window.scrollTo({ top: scroll_y.current });
    }
};
