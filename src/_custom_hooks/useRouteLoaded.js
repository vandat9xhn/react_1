import { useLayoutEffect, useState } from 'react';

//
export const useRouteLoaded = ({
    part_location = 'pathname',
    allowed_routes = [],
    handleNotFoundRoute = () => {},
    handleBeforeSetRouteLoaded = () => {},
    handleAfterSetRouteLoaded = () => {},
}) => {
    //
    const [route_loaded_arr, setRouteLoadedArr] = useState([]);

    //
    useLayoutEffect(() => {
        const new_route_loaded = location[part_location];

        if (
            allowed_routes.length &&
            !allowed_routes.includes(new_route_loaded)
        ) {
            handleNotFoundRoute();
        }
        //
        else {
            handleBeforeSetRouteLoaded();

            !route_loaded_arr.includes(new_route_loaded) &&
                setRouteLoadedArr((route_loaded_arr) => [
                    ...route_loaded_arr,
                    new_route_loaded,
                ]);

            handleAfterSetRouteLoaded();
        }
    }, [location[part_location]]);

    return [route_loaded_arr, setRouteLoadedArr];
};
