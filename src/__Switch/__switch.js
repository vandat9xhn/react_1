import React, { useContext, useEffect, useState } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { context_api } from '../_context/ContextAPI';
//
import { Routes } from '../__routes/__main';
import Auth from '../_auth/Auth';

//
CustomSwitch.propTypes = {};

//
function CustomSwitch() {
    //
    const use_location = useLocation();
    const { root_floor_url_arr } = useContext(context_api);

    // //
    const [displayLocation, setDisplayLocation] = useState(use_location);

    // //
    useEffect(() => {
        setDisplayLocation({
            ...use_location,
            ...(root_floor_url_arr.current.length
                ? { pathname: root_floor_url_arr.current[0] }
                : {}),
        });
        // console.log(root_floor_url_arr.current, use_location);
    }, [use_location]);

    //
    return (
        <Switch location={displayLocation}>
            {Routes.map((route, index) => (
                <Route
                    key={`App_route_${index}`}
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
