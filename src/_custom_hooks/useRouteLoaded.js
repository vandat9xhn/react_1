import { useEffect, useLayoutEffect, useRef, useState } from 'react';

//
export const useRouteLoaded = ({
    initial_route_arr = [],
    allow_routes_str = '',
    part_location = 'pathname',
    deps = [],

    handleNotFoundRoute = () => {},
    handleBeforeSetRouteLoaded = () => {},
    handleAfterSetRouteLoaded = () => {},
}) => {
    //
    const [route_arr, setRouteArr] = useState(initial_route_arr);

    //
    const is_first = useRef(false);

    //
    useLayoutEffect(() => {
        if (deps.length && !is_first.current) {
            handleChangePartLocation(true)
        }
    }, deps);

    //
    useLayoutEffect(() => {
        if (is_first.current) {
            is_first.current = false

            return;
        }

        if (!allow_routes_str.includes(location[part_location])) {
            handleNotFoundRoute();
        } else {
            handleBeforeSetRouteLoaded();
            handleChangePartLocation();
            handleAfterSetRouteLoaded();
        }
    }, [location[part_location]]);

    //
    function handleChangePartLocation(should_reset = false) {
        const new_route_arr = [...route_arr];

        const route_ix = new_route_arr.findIndex((item) =>
            item[part_location].includes(location[part_location])
        );

        if (!new_route_arr[route_ix].is_active || should_reset) {
            new_route_arr.map((item, ix) => {
                if (ix == route_ix) {
                    item.is_active = true;
                    item.is_loaded = true;
                } else {
                    item.is_active = false;
                    should_reset && (item.is_loaded = false);
                }

                return item;
            });

            setRouteArr(new_route_arr);
        }
    }

    //
    return { route_arr, setRouteArr, handleChangePartLocation };
};
