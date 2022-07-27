import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { IS_MOBILE } from "../../../../../_constant/Constant";

import ShortVideoPreviewList from "../../../../../component/short_video_fb/preview/list/ShortVideoPreviewList";
import ShortVideoPreview from "../../../../../component/short_video_fb/preview/_main/ShortVideoPreview";

import thumb1 from "../../../../../../image/Aa.png";
import thumb2 from "../../../../../../image/banner_laptop_phone.jpg";
import thumb3 from "../../../../../../image/giay_the_thao.jpg";

import "./NewFeedShortVideo.scss";

//
NewFeedShortVideo.propTypes = {};

const default_list = [
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
function NewFeedShortVideo(props) {
    //
    const [list, setList] = useState([]);

    //
    useEffect(() => {
        getList();
    }, []);

    // ----

    const getList = () => {
        setTimeout(() => {
            setList(IS_MOBILE ? default_list.slice(0, 1) : default_list);
        }, 250);
    };

    //
    return (
        <div className="NewFeedShortVideo w-500px max-w-100per margin-auto padding-y-12px brs-8px-pc bg-primary box-shadow-1">
            <h2 className="margin-bottom-12px padding-x-12px font-17px font-600">
                Short Video
            </h2>

            <div>
                {IS_MOBILE ? (
                    list.length && (
                        <ShortVideoPreview
                            thumb={list[0].thumb}
                            name={list[0].name}
                            likes={list[0].likes}
                        />
                    )
                ) : (
                    <ShortVideoPreviewList list={list} />
                )}
            </div>
        </div>
    );
}

export default NewFeedShortVideo;
