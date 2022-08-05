import React from "react";
import PropTypes from "prop-types";

import IconsArrow from "../../../../_icons_svg/icons_arrow/IconsArrow";
import PicSquareDiv from "../../../../component/some_div/pic_square_div/PicSquareDiv";

import "./LoginByPicItemPc.scss";

//
LoginByPicItemPc.propTypes = {};

//
function LoginByPicItemPc({ ix, last_name, picture, handleLogin, handleDel }) {
    //
    function onLogin() {
        handleLogin(ix);
    }

    //
    function onDel() {
        handleDel(ix);
    }

    //
    return (
        <div className="LoginByPicItemPc pos-rel">
            <div
                className="brs-8px bg-primary overflow-hidden"
                onClick={onLogin}
            >
                <div className="LoginByPicItemPc_pic">
                    <PicSquareDiv vid_pic={picture} brs_8px={false} />
                </div>

                <div className="LoginByPicItemPc_name padding-12px text-align-center font-18px">
                    {last_name}
                </div>
            </div>

            <div
                className="LoginByPicItemPc_del pos-abs display-flex-center cursor-pointer"
                onClick={onDel}
            >
                <IconsArrow y={400} size_icon="10px" />
            </div>
        </div>
    );
}

export default LoginByPicItemPc;
