import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { handleScrollSmooth } from '../../../../../../_some_function/handleScrollSmooth';
//
import { useRouteFollowSearch } from '../../../../../../_hooks/useRouteFollowSearch';
//
import RouteFollowSearch from '../../../../../../component/_route/follow_search/RouteFollowSearch';
//
import { AboutRoutes } from '../../__common/routes/routes';
//
import ProfileSkeleton from '../../../../__common/skeleton/ProfileSkeleton';
//
import './AboutRight.scss';

//
AboutRight.propTypes = {};

//
function AboutRight({ name, user_id }) {
    //
    const use_history = useHistory();

    //
    const ref_about_right = useRef(null);

    //
    const { route_ix, route_props } = useRouteFollowSearch({
        base_path: /\/profile\/\d+\?sk=about/,
        route_arr: AboutRoutes,
        is_exact: false,

        getRouteProps: getRouteProps,
        handleNotFound: handleNotFound,
    });

    //
    useEffect(() => {
        handleRouteChange();
    }, [route_ix]);

    // -----

    //
    function getRouteProps(new_route_ix = 0) {
        return {
            name: name,
            user_id: user_id,
        };
    }

    //
    function handleNotFound() {
        use_history.replace(`${location.pathname}${AboutRoutes[0].search}`);
    }

    //
    function handleRouteChange() {
        if (window.innerWidth < 1000) {
            handleScrollSmooth(() => {
                ref_about_right.current &&
                    ref_about_right.current.scrollIntoView(false);
            });
        }
    }

    //
    return (
        <div ref={ref_about_right}>
            <RouteFollowSearch
                RouteComponent={AboutRoutes[route_ix].component}
                route_props={route_props}
                fallback={<ProfileSkeleton />}
            />
        </div>
    );
}

export default AboutRight;
