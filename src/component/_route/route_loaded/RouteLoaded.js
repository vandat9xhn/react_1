import React, { Fragment, Suspense } from 'react';
import PropTypes from 'prop-types';

//
RouteLoaded.propTypes = {
    route_arr: PropTypes.array,
    fallback: PropTypes.element,
    use_loaded: PropTypes.bool,
};

RouteLoaded.defaultProps = {
    part_location: 'pathname',
    fallback: <Fragment />,
    use_loaded: true,
};

//
function RouteLoaded({ route_arr, fallback, use_loaded }) {
    //
    return (
        <div>
            <Suspense fallback={fallback}>
                {route_arr.map((route_obj, index) => (
                    <div
                        key={`RouteLoaded_${index}`}
                        className={route_obj.is_active ? '' : 'display-none'}
                    >
                        {(use_loaded
                            ? route_obj.is_loaded
                            : route_obj.is_active) && (
                            <route_obj.component {...(route_obj.props || {})} />
                        )}
                    </div>
                ))}
            </Suspense>

            {!route_arr.some((item) => item.is_active) ? (
                <div className="opacity-0">{fallback}</div>
            ) : (
                <div></div>
            )}
        </div>
    );
}

export default RouteLoaded;
