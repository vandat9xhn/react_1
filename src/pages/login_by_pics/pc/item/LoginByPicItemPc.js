import React from "react";
import PropTypes from "prop-types";

import PicSquareDiv from "../../../../component/some_div/pic_square_div/PicSquareDiv";

import "./LoginByPicItemPc.scss";

//
LoginByPicItemPc.propTypes = {};

//
function LoginByPicItemPc({ ix, last_name, picture, handleLogin }) {
    //
    function onClick() {
        handleLogin(ix);
    }

    //
    return (
        <div className="LoginByPicItemPc" onClick={onClick}>
            <div className="brs-8px overflow-hidden">
                <div className="LoginByPicItemPc_pic">
                    <PicSquareDiv vid_pic={picture} brs_8px={false} />
                </div>

                <div className="LoginByPicItemPc_name padding-12px bg-primary text-align-center font-18px">
                    {last_name}
                </div>
            </div>
        </div>
    );
}

export default LoginByPicItemPc;
