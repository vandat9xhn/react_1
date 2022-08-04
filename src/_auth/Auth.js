import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
//
import { REG_ACCOUNT } from "../_constant/Constant";
import { context_api } from "../_context/ContextAPI";

//
Auth.propTypes = {};

//
function Auth({ route, ...props }) {
    //
    const { user } = useContext(context_api);

    // need login
    if (route.auth && !user.id) {
        return <Redirect to="/login-form" />;
    }

    // no need login
    if (
        route.path.search(REG_ACCOUNT) >=
            0 &&
        user.id > 0
    ) {
        return <Redirect to={sessionStorage.url_before_login || "/home"} />;
    }

    // new member
    if (sessionStorage.new_member) {
        alert("Welcome " + sessionStorage.new_member);
        sessionStorage.removeItem("new_member");
    }

    // route.reset_position && window.scrollTo(0, 0);

    route.title && (document.title = route.title);

    //
    return <route.component {...props} />;
}

export default Auth;
