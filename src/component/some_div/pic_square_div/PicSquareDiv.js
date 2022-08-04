import React from "react";
import PropTypes from "prop-types";
//
import { VideoOrImage } from "../../../_some_function/VideoOrImage";
//
import "./PicSquareDiv.scss";

//
PicSquareDiv.propTypes = {
    vid_pic: PropTypes.string,
    brs_8px: PropTypes.bool,
};

//
function PicSquareDiv({ vid_pic, brs_8px = true }) {
    //
    return (
        <div
            className={`PicSquareDiv pos-rel w-100per padding-top-100per border-blur overflow-hidden ${
                brs_8px ? "brs-8px" : ""
            }`}
        >
            <div className="pos-abs-100">{VideoOrImage(vid_pic, "")}</div>
        </div>
    );
}

export default PicSquareDiv;
