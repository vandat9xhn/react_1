import React from 'react';
import PropTypes from 'prop-types';
//
import { useRouteLoaded } from '../../../../../../_custom_hooks/useRouteLoaded';
//
import RouteLoaded from '../../../../../../component/_route/route_loaded/RouteLoaded';
//
import { AboutRoutes } from '../../__common/routes/routes';
// 
import './AboutRight.scss';

//
AboutRight.propTypes = {};

//
function AboutRight(props) {
    //
    const [route_loaded_arr, setRouteLoadedArr] = useRouteLoaded('search');

    //
    return (
        <RouteLoaded
            route_arr={AboutRoutes}
            part_location="search"
            route_loaded_arr={route_loaded_arr}
            fallback={<div className="AboutRight_fallback wh-100"></div>}
        />
    );
}

export default AboutRight;
