import { useEffect, useRef } from 'react';
//
import {
    changeBodyOverflowY,
    checkBodyHidden,
} from '../_some_function/makeBodyHidden';

//
export const useMakeBodyHidden = () => {
    //
    const is_body_hidden = useRef(checkBodyHidden());

    //
    useEffect(() => {
        !is_body_hidden.current && changeBodyOverflowY('hidden');

        return () => {
            !is_body_hidden.current && changeBodyOverflowY('auto');
        };
    }, []);
};
