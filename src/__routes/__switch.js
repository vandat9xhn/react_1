import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { Routes } from './__main';
import Auth from '../_auth/Auth';

//
CustomSwitch.propTypes = {};

//
function CustomSwitch() {
    // 
    // const location = useLocation()

    // //
    // const [displayLocation, setDisplayLocation] = useState(location);

    // //
    // useEffect(() => {
    //     // console.log('location changed', location.pathname);
    //     setDisplayLocation({
    //         ...location,
    //         pathname: '/home'
    //     });
    // }, [location]);

    // console.log(1);

    //
    return (
        <Switch
            // location={displayLocation}
        >
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
