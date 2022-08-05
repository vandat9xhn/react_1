import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//
LoginByPicLinkMb.propTypes = {};

//
function LoginByPicLinkMb({ Icon, to, title }) {
    //
    return (
        <Link className="display-flex align-items-center" to={to}>
            <div className="display-flex-center bg-blue padding-8px text-white">
                {Icon}
            </div>

            <div className="margin-left-12px">{title}</div>
        </Link>
    );
}

export default LoginByPicLinkMb;
