import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

//
RouteFollowSearch.propTypes = {
    RouteComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    route_props: PropTypes.object,
    fallback: PropTypes.element,
};

RouteFollowSearch.defaultProps = {
    route_props: {},
    fallback: null,
};

//
function RouteFollowSearch({ RouteComponent, route_props, fallback }) {
    //
    return (
        <Suspense fallback={fallback}>
            <RouteComponent {...route_props} />
        </Suspense>
    );
}

export default RouteFollowSearch;
