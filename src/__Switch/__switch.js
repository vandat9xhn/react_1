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
    const { root_floor_url_arr, profile_friends_pathname } =
        useContext(context_api);

    // //
    const [displayLocation, setDisplayLocation] = useState(use_location);

    // //
    useEffect(() => {
        setDisplayLocation({
            ...use_location,
            pathname: getNewPathname(),
        });
    }, [use_location]);

    // ----

    //
    function getNewPathname() {
        // ---- SCREEN FLOOR HAS URL

        if (root_floor_url_arr.current.length > 0) {
            return root_floor_url_arr.current[0];
        }

        // -----

        let new_pathname = use_location.pathname;

        if (IS_MOBILE) {
            return new_pathname;
        }

        // ----- PROFILE IN FRIENDS PAGES

        if (
            profile_friends_pathname.current &&
            /^\/profile\/\d+/.test(new_pathname)
        ) {
            new_pathname = profile_friends_pathname.current;
        } else {
            profile_friends_pathname.current = '';
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
