import { useEffect, useRef } from 'react';
//
import { useDataShowMore } from './useDataShowMore';
//
import {
    ScrollDownBool,
    WindowScrollDownBool,
} from '../_some_function/ScrollDown';

//
export const useScrollDown = ({
    elm = window,
    thresh_hold = 1,
    more_bottom = 100,

    initial_data_arr = [],
    handle_API_L = () => new Promise(),
}) => {
    //
    const { data_state, setDataState, getData_API, is_max, data_count } =
        useDataShowMore({
            initial_arr: initial_data_arr,
            handle_API_L: handle_API_L,
        });

    //
    const pos = useRef(0);
    const just_fetching = useRef(true);

    //
    function handleWhenFinally() {
        setTimeout(() => {
            just_fetching.current = false;
        }, 0);

        if (is_max.current || data_count.current > 0) {
            return;
        }

        if (elm == window) {
            if (pageYOffset == document.body.offsetHeight - innerHeight) {
                window.scrollTop = pageYOffset - 250;
            }
        } else if (elm.scrollTop == elm.scrollHeight - elm.clientHeight) {
            elm.scrollTop -= 100;
        }
    }

    /* -------------------- */

    //
    function handleScroll() {
        if (
            data_count.current == 0 ||
            (elm == window &&
                document.getElementsByTagName('body')[0].dataset.countHidden)
        ) {
            return;
        }

        if (
            elm == window
                ? WindowScrollDownBool(
                      pos.current,
                      just_fetching.current,
                      is_max.current,
                      thresh_hold,
                      more_bottom
                  )
                : ScrollDownBool(
                      elm,
                      pos.current,
                      just_fetching.current,
                      is_max.current,
                      thresh_hold,
                      more_bottom
                  )
        ) {
            pos.current = elm == window ? window.pageYOffset : elm.scrollTop;
            just_fetching.current = true;

            getData_API({ handleWhenFinally: handleWhenFinally });
        }
    }

    //
    function getData_API_at_first() {
        getData_API({
            start_obj_state: {
                data_arr: [],
                count: 0,
                has_fetched: false,
            },
            handleWhenFinally: handleWhenFinally,
        });
    }

    //
    function resetStopScrollDown() {
        pos.current = 0;
        data_count.current = 0;
    }

    //
    return {
        data_state,
        setDataState,

        handleScroll,
        getData_API_at_first,
        resetStopScrollDown,
    };
};

//
export function useScrollDownWindow({
    initial_data_arr = [],
    handle_API_L = () => new Promise(),
    thresh_hold = 1,
    more_bottom = 1000,
}) {
    //
    const {
        data_state,
        setDataState,

        handleScroll,
        getData_API_at_first,
        resetStopScrollDown,
    } = useScrollDown({
        initial_data_arr,
        handle_API_L,
        thresh_hold,
        more_bottom,
    });

    //
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    //
    return {
        data_state,
        setDataState,

        getData_API_at_first,
        resetStopScrollDown,
    };
}
