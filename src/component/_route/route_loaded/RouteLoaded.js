import React, { Fragment, Suspense } from 'react';
import PropTypes from 'prop-types';

//
RouteLoaded.propTypes = {
    route_arr: PropTypes.array,
    fallback: PropTypes.element,
};

RouteLoaded.defaultProps = {
    part_location: 'pathname',
    fallback: <Fragment />,
};

//
function RouteLoaded({ route_arr, fallback }) {
    //
    return (
        <Suspense fallback={fallback}>
            {route_arr.map((route_obj, index) => (
                <div
                    key={`RouteLoaded_${index}`}
                    className={route_obj.is_active ? '' : 'display-none'}
                >
                    {route_obj.is_loaded && (
                        <route_obj.component {...(route_obj.props || {})} />
                    )}
                </div>
            ))}
        </Suspense>
    );
}

export default RouteLoaded;
