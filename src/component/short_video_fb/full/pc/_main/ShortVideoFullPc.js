import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { IS_MOBILE } from "../../../../../_constant/Constant";

import ScreenTitle from "../../../../../component/_screen/components/frame/has_title/title/ScreenTitle";
import NextPrevDiv from "../../../../../component/some_div/next_prev_div/NextPrevDiv";
import CircleLoading from "../../../../../component/waiting/circle_loading/CircleLoading";

import ShortVideoInteract from "../../_common/interact/ShortVideoInteract";
import ShortVideoFullMainPc from "../video/ShortVideoFullMainPc";

import "./ShortVideoFullPc.scss";

//
ShortVideoFullPc.propTypes = {};

//
function ShortVideoFullPc({
    video,
    currentTime,
    paused,
    thumb,
    interacts,

    name,
    picture,
    content,
    link_to,

    is_fetching,
    show_screen_title,
    is_has_next,
    is_has_prev,

    handleAction,
    closeScreenTitle,

    handleNext,
    handlePrev,
}) {
    //
    const ref_video = useRef(null);

    //
    useEffect(() => {
        const video_elm = ref_video.current.getElementsByTagName("video")[0];
        video_elm.currentTime = currentTime;
        paused && video_elm.pause();
    }, []);

    // -----

    {
        is_fetching ? (
            <div className="pos-abs-100 bg-black">
                <div className="pos-abs-center">
                    <CircleLoading is_fetching={true} />
                </div>
            </div>
        ) : null;
    }

    //
    return (
        <div className="ShortVideoFullPc pos-rel">
            <div
                className="ShortVideoFullPc_bg pos-abs-100"
                style={{ backgroundImage: `url(${thumb})` }}
            ></div>

            <div className="pos-abs-100 bg-shadow-8"></div>

            <div className="ShortVideoFullPc_contain pos-rel display-flex-center wh-100 padding-y-10px text-white">
                {IS_MOBILE ? null : (
                    <div className="padding-20px">
                        <div className="padding-10px"></div>
                    </div>
                )}

                <div
                    ref={ref_video}
                    className="ShortVideoFullPc_video brs-10px-pc overflow-hidden"
                >
                    <ShortVideoFullMainPc
                        video={video}
                        initial_is_play={!paused}
                        name={name}
                        picture={picture}
                        link_to={link_to}
                        content={content}
                    />
                </div>

                <div
                    className={`h-100per ${
                        IS_MOBILE ? "pos-abs right-0 top-0" : ""
                    }`}
                >
                    <ShortVideoInteract
                        interacts={interacts}
                        handleAction={handleAction}
                    />
                </div>
            </div>

            {IS_MOBILE ? null : (
                <React.Fragment>
                    <div className="pos-abs top-50per left-0 w-100per">
                        <div className="NextPrevDivScreen pos-rel margin-auto w-620px max-w-100per">
                            <NextPrevDiv
                                is_btn_circle={true}
                                is_has_next={is_has_next}
                                is_has_prev={is_has_prev}
                                handleNext={handleNext}
                                handlePrev={handlePrev}
                            />
                        </div>
                    </div>

                    <div className="pos-abs left-0 top-0 padding-left-8px">
                        <ScreenTitle
                            show_screen_title={show_screen_title}
                            has_download={false}
                            tooltipCloseElm={"Close"}
                            closeScreenTitle={closeScreenTitle}
                        />
                    </div>
                </React.Fragment>
            )}
        </div>
    );
}

export default ShortVideoFullPc;
