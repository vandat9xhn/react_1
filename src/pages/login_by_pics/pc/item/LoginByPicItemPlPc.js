import React from "react";
import PropTypes from "prop-types";

import LoginByPicItemPc from "./LoginByPicItemPc";

import './LoginByPicItemPlPc.scss';

//
LoginByPicItemPlPc.propTypes = {};

//
function LoginByPicItemPlPc({}) {
    //
    return (
        <div className="LoginByPicItemPlPc">
            <LoginByPicItemPc
                ix={0}
                last_name=""
                picture=""
                handleLogin={() => {}}
                handleDel={() => {}}
            />
        </div>
    );
}

export default LoginByPicItemPc;
