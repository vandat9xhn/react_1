import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { useShortVideoMainMb } from "../../../../../component/short_video_fb/_hooks/useShortVideoMainMb";

import VidPicObserve from "../../../../../component/vid_pic/observe/VidPicObserve";
import IconsPlayPause from "../../../../../_icons_svg/icon_play_pause/IconsPlayPause";

import "./ShortVideoFullMainMb.scss";

//
ShortVideoFullMainMb.propTypes = {};

//
function ShortVideoFullMainMb({
    video,
    paused = true,
    currentTime,

    name,
    picture,
    link_to,
    content,
}) {
    //
    const {
        ref_main,
        ref_video,
        is_play,
        is_true,

        togglePlay,
        toggleBool,
        handleLoadedMetadata,
    } = useShortVideoMainMb({
        paused: paused,
        currentTime: currentTime,
    });

    //
    return (
        <div
            ref={ref_main}
            className="ShortVideoFullMainMb pos-rel wh-100 font-13px bg-black"
        >
            <div className="display-flex align-items-center wh-100">
                {/* <VidPicObserve
                    vid_pic={video}
                    type="video"
                    video_props={{
                        ref: ref_video,
                        className: "w-100per max-h-100per object-fit-cover",
                        src: video,
                        autoPlay: initial_is_play,
                        loop: true,
                        onClick: toggleBool,
                        onLoadedMetadata: handleLoadedMetadata,
                    }}
                /> */}
                <video
                    ref={ref_video}
                    className="w-100per max-h-100per object-fit-cover"
                    src={video}
                    // autoPlay={!paused}
                    loop
                    onClick={toggleBool}
                    onLoadedMetadata={handleLoadedMetadata}
                />
            </div>

            <div className="ShortVideoFullMainMb_user pos-abs-0 w-100per">
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

            <div
                className={`pos-abs-center ${
                    is_true
                        ? ""
                        : "opacity-0 visibility-hidden transition-all-250ms"
                }`}
                onClick={togglePlay}
                title={is_play ? "Pause" : "Play"}
            >
                <IconsPlayPause x={is_play ? 200 : 0} size_icon="36px" />
            </div>

            <div className="ShortVideoFullMainMb_content pos-abs left-0 bottom-0 padding-12px bg-shadow-05 min-w-100per">
                <div className="wk-box-vertical line-clamp-2 overflow-hidden">
                    {content}
                </div>
            </div>
        </div>
    );
}

export default ShortVideoFullMainMb;
