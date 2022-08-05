import React from "react";
import PropTypes from "prop-types";

import LoginByPicItemMb from "./LoginByPicItemMb";
import SkeletonDiv from "../../../../component/skeleton/skeleton_div/SkeletonDiv";

//
LoginByPicItemPlMb.propTypes = {};

//
function LoginByPicItemPlMb({}) {
    //
    return (
        <div className="padding-6px bg-primary">
            <SkeletonDiv />
        </div>
    );
}

export default LoginByPicItemPlMb;
