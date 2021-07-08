import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { context_api } from '../_context/ContextAPI';

//
Auth.propTypes = {};

//
function Auth({ route, ...props }) {
    //
    const { user } = useContext(context_api);

    //
    if (route.auth && !user.id) {
        return <Redirect to="/login-form" />;
    }

    //
    if (
        route.path.search(/(\/login-form|\/registration-form)/) >= 0 &&
        user.id
    ) {
        return <Redirect to={sessionStorage.url_before_login || '/home'} />;
    }

    if (sessionStorage.new_member) {
        alert('Welcome ' + sessionStorage.new_member);
        sessionStorage.removeItem('new_member');
    }

    route.reset_position && window.scrollTo(0, 0);

    //
    return <route.component {...props} />;
}

export default Auth;
