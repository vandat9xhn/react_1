import { useLayoutEffect, useRef, useState } from 'react';
import update from 'immutability-helper';

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
    const should_reset = useRef(false);

    //
    useLayoutEffect(() => {
        makeReset();
    }, deps);

    /* ---------------------- */

    //
    useLayoutEffect(() => {
        if (!allow_routes_str.includes(location[part_location])) {
            handleNotFoundRoute();
        } else {
            handleBeforeSetRouteLoaded();
            handleChangePartLocation();
            handleAfterSetRouteLoaded();
        }
    }, [location[part_location], ...deps]);

    //
    function makeReset() {
        should_reset.current = true;
    }

    //
    function handleResetRoute() {
        const route_ix = route_arr.findIndex((item) =>
            item[part_location].includes(location[part_location])
        );
        const active_route_ix = route_arr.findIndex((item) => item.is_active);

        if (route_ix == active_route_ix) {
            setRouteArr(initial_route_arr);

            setTimeout(() => {
                handleChangeRoute();
            }, 100);

            return;
        } else {
            handleChangeRoute();
        }
    }

    //
    function handleChangeRoute() {
        setRouteArr((route_arr) => {
            const route_ix = route_arr.findIndex((item) =>
                item[part_location].includes(location[part_location])
            );

            const new_route_arr = update(route_arr, {
                [route_ix]: {
                    is_active: { $set: true },
                    is_loaded: { $set: true },
                },
            });

            new_route_arr.map((item, ix) => {
                if (ix != route_ix) {
                    item.is_active = false;
                    should_reset.current && (item.is_loaded = false);
                }

                return item;
            });

            should_reset.current = false;

            return new_route_arr;
        });
    }

    /* ---------------------- */

    //
    function handleChangePartLocation() {
        if (should_reset.current) {
            handleResetRoute();
        } else {
            handleChangeRoute();
        }
    }

    //
    return { route_arr, should_reset, setRouteArr, makeReset };
};
