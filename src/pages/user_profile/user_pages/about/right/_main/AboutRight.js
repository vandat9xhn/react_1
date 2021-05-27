import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import { useRouteLoaded } from '../../../../../../_custom_hooks/useRouteLoaded';
//
import RouteLoaded from '../../../../../../component/_route/route_loaded/RouteLoaded';
//
import { AboutRoutes, about_search_arr } from '../../__common/routes/routes';
//
import './AboutRight.scss';
import { handleScrollSmooth } from '../../../../../../_some_function/handleScrollSmooth';

//
AboutRight.propTypes = {};

//
function AboutRight(props) {
    // 
    const ref_about_right = useRef(null)

    //
    const [route_loaded_arr, setRouteLoadedArr] = useRouteLoaded({
        part_location: 'search',
        handleAfterSetRouteLoaded: handleAfterSetRouteLoaded,
        allowed_routes: about_search_arr,
    });

    // 
    function handleAfterSetRouteLoaded(){
        if (window.innerWidth < 1000) {            
            handleScrollSmooth(() => {
                ref_about_right.current.scrollIntoView(false)
            })
        }

        console.log(1);
    }

    // console.log(1);
    //
    return (
        <div ref={ref_about_right}>
            <RouteLoaded
                route_arr={AboutRoutes}
                part_location="search"
                route_loaded_arr={route_loaded_arr}
                fallback={<div className="AboutRight_fallback wh-100"></div>}
            />
        </div>
    );
}

export default AboutRight;
