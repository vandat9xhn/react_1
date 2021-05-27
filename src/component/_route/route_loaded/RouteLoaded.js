import React, { Fragment, Suspense } from 'react';
import PropTypes from 'prop-types';

//
RouteLoaded.propTypes = {
    route_arr: PropTypes.array,
    part_location: PropTypes.string,
    route_loaded_arr: PropTypes.array,
    fallback: PropTypes.element,
};

RouteLoaded.defaultProps = {
    part_location: 'pathname',
    fallback: <Fragment />,
};

//
function RouteLoaded({ route_arr, part_location, route_loaded_arr, fallback }) {
    //
    return (
        <Suspense fallback={fallback}>
            {route_arr.map((route_obj, index) => (
                <div
                    key={`RouteLoaded_${index}`}
                    className={
                        (
                            typeof route_obj[part_location] == 'string'
                                ? route_obj[part_location] ==
                                  location[part_location]
                                : route_obj[part_location].includes(
                                      location[part_location]
                                  )
                        )
                            ? ''
                            : 'display-none'
                    }
                >
                    {(typeof route_obj[part_location] == 'string'
                        ? route_loaded_arr.includes(route_obj[part_location])
                        : route_loaded_arr.some((item) =>
                              route_obj[part_location].includes(item)
                          )) && (
                        <route_obj.component {...(route_obj.props || {})} />
                    )}
                </div>
            ))}
        </Suspense>
    );
}

export default RouteLoaded;
