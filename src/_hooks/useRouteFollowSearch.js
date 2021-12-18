import { useEffect, useState } from 'react';

//
export function useRouteFollowSearch({
    base_path = /./,
    route_arr = [{ component: () => <div></div>, search: '' }],
    has_func_detect_route = false,
    is_exact = false,

    getRouteIx = () => 0,
    getRouteProps = () => {
        return {};
    },
    handleNotFound = () => {},
}) {
    //
    const [state_obj, setStateObj] = useState({
        route_ix: 0,
        route_props: {},
    });

    //
    useEffect(() => {
        detectRoute();
    }, [location.href]);

    // -----

    //
    function detectRouteIx() {
        const search = location.search;

        if (has_func_detect_route) {
            return getRouteIx();
        }

        const new_route_ix = route_arr.findIndex((item) => {
            return is_exact || item.search == ''
                ? item.search == search
                : search.startsWith(item.search);
        });

        return new_route_ix;
    }

    //
    function detectRoute() {
        if (!base_path.test(location.href)) {
            return;
        }

        const new_route_ix = detectRouteIx();

        if (new_route_ix >= 0) {
            setStateObj((state_obj) => {
                return {
                    ...state_obj,
                    route_ix: new_route_ix,
                    route_props: getRouteProps(new_route_ix),
                };
            });
        } else {
            handleNotFound();
        }
    }

    // ----

    return {
        ...state_obj,
    };
}
