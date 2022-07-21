import React from "react";
import PropTypes from "prop-types";

import "./ShortVideoPreview.scss";

//
ShortVideoPreview.propTypes = {
    thumb: PropTypes.string,
    name: PropTypes.string,
    likes: PropTypes.string,
};

//
function ShortVideoPreview({ thumb, name, likes }) {
    return (
        <div className="ShortVideoPreview pos-rel wh-100 overflow-hidden cursor-pointer">
            <div className="wh-100">
                <img className="wh-100 object-fit-cover" src={thumb} alt="" />
            </div>

            <div className="ShortVideoPreview_bg pos-abs-100 bg-shadow-1"></div>

            <div className="ShortVideoPreview_info pos-abs bottom-0 left-0 text-white font-500">
                <div className="padding-12px">
                    <div>{name}</div>

                    <div>ᐅ {likes}</div>
                </div>
            </div>
        </div>
    );
}

export default ShortVideoPreview;
