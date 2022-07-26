import React from "react";
import PropTypes from "prop-types";

import ShortVideoFullLayoutPc from "../layout/ShortVideoFullLayoutPc";
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
    return (
        <ShortVideoFullLayoutPc
            is_fetching={is_fetching}
            show_screen_title={show_screen_title}
            is_has_next={is_has_next}
            is_has_prev={is_has_prev}
            //
            handleNext={handleNext}
            handlePrev={handlePrev}
            closeScreenTitle={closeScreenTitle}
        >
            <div className="ShortVideoFullPc pos-rel">
                <div
                    className="ShortVideoFullPc_bg pos-abs-100"
                    style={{ backgroundImage: `url(${thumb})` }}
                ></div>

                <div className="pos-abs-100 bg-shadow-8"></div>

                <div className="ShortVideoFullPc_contain pos-rel display-flex-center wh-100 padding-y-10px text-white">
                    <div className="padding-20px">
                        <div className="padding-10px"></div>
                    </div>

                    <div className="ShortVideoFullPc_video brs-10px-pc overflow-hidden">
                        <ShortVideoFullMainPc
                            video={video}
                            initial_is_play={!paused}
                            currentTime={currentTime}
                            name={name}
                            picture={picture}
                            link_to={link_to}
                            content={content}
                        />
                    </div>

                    <div className="h-100per">
                        <ShortVideoInteract
                            interacts={interacts}
                            handleAction={handleAction}
                        />
                    </div>
                </div>
            </div>
        </ShortVideoFullLayoutPc>
    );
}

export default ShortVideoFullPc;
