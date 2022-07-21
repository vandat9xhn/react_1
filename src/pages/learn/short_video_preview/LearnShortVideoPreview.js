import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import ShortVideoPreviewList from "../../../component/short_video_fb/preview/list/ShortVideoPreviewList";

import thumb1 from "../../../../image/Aa.png";
import thumb2 from "../../../../image/banner_laptop_phone.jpg";
import thumb3 from "../../../../image/giay_the_thao.jpg";

import "./LearnShortVideoPreview.scss";

const list = [
    {
        id: 1,
        thumb: thumb1,
        name: "My Nguyen",
        likes: "2K",
    },
    {
        id: 2,
        thumb: thumb2,
        name: "My My",
        likes: "1K",
    },
    {
        id: 3,
        thumb: thumb3,
        name: "Nguyen Nguyen",
        likes: "4.5K",
    },
    {
        id: 4,
        thumb: thumb1,
        name: "Hai Nguyen",
        likes: "10.5K",
    },
];

//
LearnShortVideoPreview.propTypes = {};

//
function LearnShortVideoPreview(props) {
    //
    return (
        <div className="LearnShortVideoPreview">
            <div className="LearnShortVideoPreview_list">
                <ShortVideoPreviewList list={list} />
            </div>
        </div>
    );
}

export default LearnShortVideoPreview;
