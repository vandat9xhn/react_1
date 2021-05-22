import React, { Fragment, Suspense } from 'react';
import PropTypes from 'prop-types';

//
RouteLoaded.propTypes = {
    route_arr: PropTypes.array,
    part_location: PropTypes.string,
    route_loaded_arr: PropTypes.array,
};

RouteLoaded.defaultProps = {
    part_location: 'pathname',
}

//
function RouteLoaded({ route_arr, part_location, route_loaded_arr }) {
    //
    return (
        <Suspense fallback={<Fragment />}>
            {route_arr.map((route_obj, index) => (
                <div
                    key={`RouteLoaded_${index}`}
                    className={
                        location[part_location] == route_obj[part_location]
                            ? ''
                            : 'display-none'
                    }
                >
                    {route_loaded_arr.includes(route_obj[part_location]) && (
                        <route_obj.component />
                    )}
                </div>
            ))}
        </Suspense>
    );
}

export default RouteLoaded;
