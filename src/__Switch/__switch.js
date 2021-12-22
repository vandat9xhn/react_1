import React, { useContext, useEffect, useState } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { context_api } from '../_context/ContextAPI';
//
import { IS_MOBILE } from '../_constant/Constant';
//
import { Routes } from '../__routes/__main';
import Auth from '../_auth/Auth';

//
CustomSwitch.propTypes = {};

//
function CustomSwitch() {
    //
    const use_location = useLocation();
    const { root_floor_url_arr, profile_friends_pathname, forceUpdateApp } =
        useContext(context_api);

    // //
    const [displayLocation, setDisplayLocation] = useState(use_location);

    // //
    useEffect(() => {
        // if (
        //     use_location.pathname + use_location.search !=
        //     displayLocation.pathname + displayLocation.search
        // ) {
        const new_pathname = getNewPathname();

        setDisplayLocation({
            ...use_location,
            pathname: new_pathname,
        });
        // }
    }, [use_location]);

    // ----

    //
    function getNewPathname() {
        // ---- SCREEN FLOOR HAS URL

        if (root_floor_url_arr.current.length > 0) {
            return root_floor_url_arr.current[0];
        }

        // ----- PROFILE IN FRIENDS PAGES

        let new_pathname = use_location.pathname;

        //
        if (!profile_friends_pathname.current || IS_MOBILE) {
            profile_friends_pathname.current = '';

            return new_pathname;
        }

        if (/^\/profile\/\d+/.test(new_pathname)) {
            new_pathname = profile_friends_pathname.current;
        } else {
            profile_friends_pathname.current = '';
            forceUpdateApp();
        }

        return new_pathname;
    }

    //
    return (
        <Switch location={displayLocation}>
            {Routes.map((route, index) => (
                <Route
                    key={`${index}`}
                    path={route.path}
                    render={(props) => <Auth route={route} {...props} />}
                    exact={route.exact}
                />
            ))}

            <Redirect from="" to="/home" />
        </Switch>
    );
}

export default CustomSwitch;
