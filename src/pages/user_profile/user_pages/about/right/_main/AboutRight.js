import React, { useRef } from 'react';
import update from 'immutability-helper';
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
function AboutRight({ name, user_id }) {
    //
    const ref_about_right = useRef(null);

    //
    const { route_arr, makeReset } = useRouteLoaded({
        initial_route_arr: update(AboutRoutes, {
            0: { props: { $set: { name: name, user_id: user_id } } },
        }),
        part_location: 'search',
        allow_routes_str: about_searches_str,
        deps: [user_id],
        handleAfterSetRouteLoaded: handleAfterSetRouteLoaded,
    });

    //
    function handleAfterSetRouteLoaded() {
        if (window.innerWidth < 1000) {
            handleScrollSmooth(() => {
                ref_about_right.current && ref_about_right.current.scrollIntoView(false);
            });
        }
    }

    //
    return (
        <div ref={ref_about_right}>
            <RouteLoaded
                route_arr={route_arr}
                fallback={<div className="AboutRight_fallback wh-100"></div>}
                // use_loaded={false}
            />
        </div>
    );
}

export default AboutRight;
