import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { useShortVideoMain } from "../../../../../component/short_video_fb/_hooks/useShortVideoMain";

import IconsPlayPause from "../../../../../_icons_svg/icon_play_pause/IconsPlayPause";

import "./ShortVideoFullMainPc.scss";

//
ShortVideoFullMainPc.propTypes = {};

//
function ShortVideoFullMainPc({
    video,
    initial_is_play = true,
    currentTime,

    name,
    picture,
    link_to,
    content,
}) {
    //
    const { ref_video, is_play, togglePlay } = useShortVideoMain({
        initial_is_play: initial_is_play,
        currentTime: currentTime,
    });

    //
    return (
        <div className="ShortVideoFullMainPc pos-rel wh-100 font-14px bg-black">
            <div className="display-flex align-items-center wh-100">
                <video
                    ref={ref_video}
                    className="w-100per max-h-100per object-fit-cover"
                    src={video}
                    autoPlay={initial_is_play}
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

                    <div className="margin-x-6px">·</div>

                    <div
                        className="cursor-pointer"
                        onClick={togglePlay}
                        title={is_play ? "Pause" : "Play"}
                    >
                        <IconsPlayPause
                            x={is_play ? 200 : 0}
                            size_icon="16px"
                        />
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
