import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import { useRouteLoaded } from '../../../../../../_custom_hooks/useRouteLoaded';

import { handleScrollSmooth } from '../../../../../../_some_function/handleScrollSmooth';
//
import RouteLoaded from '../../../../../../component/_route/route_loaded/RouteLoaded';
//
import { AboutRoutes, about_searches_str } from '../../__common/routes/routes';
//
import './AboutRight.scss';

//
AboutRight.propTypes = {};

//
function AboutRight({ name }) {
    //
    const ref_about_right = useRef(null);

    //
    const { route_arr } = useRouteLoaded({
        initial_route_arr: AboutRoutes.map((item) => {
            if (item.search == '?sk=about_details') {
                item.props = { name: name };
            }
            
            return item;
        }),
        part_location: 'search',
        allow_routes_str: about_searches_str,
        handleAfterSetRouteLoaded: handleAfterSetRouteLoaded,
    });

    //
    function handleAfterSetRouteLoaded() {
        if (window.innerWidth < 1000) {
            handleScrollSmooth(() => {
                ref_about_right.current.scrollIntoView(false);
            });
        }
    }

    //
    return (
        <div ref={ref_about_right}>
            <RouteLoaded
                route_arr={route_arr}
                fallback={<div className="AboutRight_fallback wh-100"></div>}
            />
        </div>
    );
}

export default AboutRight;
