import { useEffect, useState } from 'react';

//
export const useRouteLoaded = (
    part_location = 'pathname',
    handleBeforeSetRouteLoaded = () => location[part_location]
) => {
    //
    const [route_loaded_arr, setRouteLoadedArr] = useState([]);

    //
    useEffect(() => {
        const str_part_location = handleBeforeSetRouteLoaded();

        !route_loaded_arr.includes(location[part_location]) &&
            setRouteLoadedArr((route_loaded_arr) => [
                ...route_loaded_arr,
                str_part_location,
            ]);
    }, [location[part_location]]);

    return [route_loaded_arr, setRouteLoadedArr];
};
