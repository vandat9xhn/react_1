import React from "react";
import PropTypes from "prop-types";

import ShortVideoFullMainMb from "../video/ShortVideoFullMainMb";
import ShortVideoInteract from "../../_common/interact/ShortVideoInteract";

//
ShortVideoFullMb.propTypes = {};

//
function ShortVideoFullMb({
    video,
    paused,
    currentTime,

    name,
    picture,
    link_to,
    content,
    interacts,

    handleAction,
}) {
    //
    return (
        <div className="ShortVideoFullMb pos-rel wh-100 text-white">
            <ShortVideoFullMainMb
                video={video}
                paused={paused}
                currentTime={currentTime}
                name={name}
                picture={picture}
                link_to={link_to}
                content={content}
            />

            <div className="pos-abs right-0 bottom-0">
                <ShortVideoInteract
                    interacts={interacts}
                    handleAction={handleAction}
                />
            </div>
        </div>
    );
}

export default ShortVideoFullMb;
