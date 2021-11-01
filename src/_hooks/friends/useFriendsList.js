import { useRef, useEffect } from 'react';
//
import { IS_MOBILE } from '../../_constant/Constant';
// 
import { initial_profile } from '../../_initial/profile/InitialProfile';
//
import { handle_API_ProfileInfo_L } from '../../_handle_api/profile/info';
//
import { useObserverShowMore } from '../useObserverShowMore';

//
export function useFriendsList({
    friend_type_api = 'request' || 'suggest',
    key_request = 'accepted' || 'sent',
    value_request = false,

    rootMargin = '0px 0px 200px 0px',
    margin = 200,
}) {
    //
    const ref_root = useRef(null);
    const ref_fake_elm = useRef(null);

    const ref_params_api = useRef({});

    //
    const {
        data_state,

        setDataState,
        getData_API,
        refreshData_API,

        observerShowMore,
    } = useObserverShowMore({
        initial_arr: [] || [
            {
                ...initial_profile(),
                ...(key_request ? { [key_request]: false } : {}),
            },
        ],
        handle_API_L: handle_API_L,
    });

    //
    useEffect(() => {
        getData_API();

        ref_fake_elm.current &&
            observerShowMore({
                fake_elm_end: ref_fake_elm.current,
                root: IS_MOBILE ? null : ref_root.current,
                rootMargin: rootMargin,
                way_scroll: 'to_bottom',
                margin: margin,
            });
    }, []);

    // ------- API

    //
    async function handle_API_L(c_count = 0) {
        const res = await handle_API_ProfileInfo_L({
            c_count: c_count,
            type: friend_type_api,
            ...ref_params_api.current,
        });

        // console.log(res);
        if (!key_request) {
            return res;
        }

        return {
            ...res,
            data: res.data.map((item) => {
                return {
                    ...item,
                    [key_request]: value_request,
                };
            }),
        };
    }

    //
    return {
        ref_root,
        ref_fake_elm,
        ref_params_api,

        data_state,
        setDataState,

        refreshData_API,
        getData_API,
    };
}
