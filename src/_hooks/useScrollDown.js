import { useEffect, useRef, useState } from 'react';
//
import { is_api_fake } from '../api/_ConstAPI';

import { useMounted } from './useMounted';

import {
    ScrollDownBool,
    WindowScrollDownBool,
} from '../_some_function/ScrollDown';

//
export const useScrollDown = ({
    initial_data_arr = [],
    handle_API_L = () => new Promise(),
    thresh_hold = 0.7,
    elm = window,
}) => {
    // state
    const [data_state, setDataState] = useState({
        data_arr: initial_data_arr,
        count: 0,
        is_fetching: false,
        has_fetched: false,
    });

    // ref
    ;
    const pos = useRef(0);
    const is_max = useRef(false);
    const just_fetching = useRef(true);
    const data_count = useRef(0);

    //
    const mounted = useMounted();

    /*---------------------------- GET API ---------------------------------*/

    // get post
    async function getData_API(start_obj_state = {}) {
        try {
            setDataState((data_state) => ({
                ...data_state,
                is_fetching: true,
                ...start_obj_state,
            }));

            const { data, count: new_count } = await handle_API_L(
                data_count.current
            );

            mounted &&
                setDataState((data_state) => {
                    const { has_fetched, data_arr, count } = data_state;

                    data_count.current += data.length;
                    is_max.current = has_fetched
                        ? count <= data_arr.length + new_count
                        : new_count <= data.length;

                    return {
                        data_arr: has_fetched ? [...data_arr, ...data] : data,
                        count: has_fetched ? count : new_count,
                        is_fetching: false,
                        has_fetched: true,
                    };
                });
        } catch (e) {
            console.log(e);
        } finally {
            just_fetching.current = false;
        }
    }

    /* --------------------------------------------- */

    //
    function handleGetMoreData() {
        pos.current = elm == window ? window.pageYOffset : elm.scrollTop;
        just_fetching.current = true;
        getData_API();
    }

    //
    function handleScroll() {
        if (data_count.current == 0) {
            return;
        }

        if (
            elm == window
                ? WindowScrollDownBool(
                      pos.current,
                      just_fetching.current,
                      is_api_fake ? false : is_max.current,
                      thresh_hold
                  )
                : ScrollDownBool(
                      elm,
                      pos.current,
                      just_fetching.current,
                      is_api_fake ? false : is_max.current,
                      thresh_hold
                  )
        ) {
            handleGetMoreData();
        }
    }

    //
    function getData_API_at_first() {
        getData_API({
            data_arr: [],
            count: 0,
            has_fetched: false,
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
    thresh_hold = 0.7,
}) {
    //
    const {
        data_state,
        setDataState,

        handleScroll,
        getData_API_at_first,
        resetStopScrollDown,
    } = useScrollDown({ initial_data_arr, handle_API_L, thresh_hold });

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
