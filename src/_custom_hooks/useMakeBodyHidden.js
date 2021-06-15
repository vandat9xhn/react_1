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
    useEffect(() => {
        const body = document.getElementsByTagName('body')[0];
        body.dataset.countHidden =
            (body.dataset ? +body.dataset.countHidden || 0 : 0) + 1;

        return () => {
            body.dataset.countHidden -= 1;
        };
    }, []);
};
