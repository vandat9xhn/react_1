import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./ShortVideoFullMainPc.scss";

//
ShortVideoFullMainPc.propTypes = {};

//
function ShortVideoFullMainPc({ video, name, picture, link_to, content }) {
    //
    return (
        <div className="ShortVideoFullMainPc pos-rel wh-100 font-14px bg-black">
            <div className="display-flex align-items-center wh-100">
                <video
                    className="w-100per max-h-100per object-fit-cover"
                    src={video}
                    autoPlay
                    loop
                />
            </div>

            <div className="ShortVideoFullMainPc_user pos-abs-0 w-100per">
                <div className="display-flex align-items-center padding-12px bg-shadow-05">
                    <Link
                        to={link_to}
                        className="display-block hv-after-shadow-05"
                    >
                        <img
                            className="brs-50 object-fit-cover"
                            src={picture}
                            alt=""
                            width={42}
                            height={42}
                        />
                    </Link>

                    <div className="margin-left-12px">
                        <Link to={link_to} className="text-white">
                            {name}
                        </Link>
                    </div>
                </div>
            </div>

            <div className="ShortVideoFullMainPc_content pos-abs left-0 bottom-0 padding-12px bg-shadow-05 min-w-100per">
                <div className="wk-box-vertical line-clamp-2 overflow-hidden">
                    {content}
                </div>
            </div>
        </div>
    );
}

export default ShortVideoFullMainPc;
