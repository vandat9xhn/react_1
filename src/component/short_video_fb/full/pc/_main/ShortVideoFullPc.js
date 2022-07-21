import React from "react";
import PropTypes from "prop-types";

import { useMakeBodyHidden } from "../../../../../_hooks/useMakeBodyHidden";

import ShortVideoInteract from "../../_common/interact/ShortVideoInteract";
import ShortVideoFullMainPc from "../video/ShortVideoFullMainPc";

import "./ShortVideoFullPc.scss";

//
ShortVideoFullPc.propTypes = {};

//
function ShortVideoFullPc({
    video,
    thumb,
    interacts,
    
    name,
    picture,
    content,
    link_to,
}) {
    //
    useMakeBodyHidden({
        hidden_header: true,
    });

    //
    return (
        <div className="ShortVideoFullPc pos-rel text-white">
            <div
                className="ShortVideoFullPc_bg pos-abs-100"
                style={{ backgroundImage: `url(${thumb})` }}
            ></div>

            <div className="ShortVideoFullPc_contain pos-rel display-flex-center wh-100 padding-y-10px">
                <div className="ShortVideoFullPc_video brs-10px overflow-hidden">
                    <ShortVideoFullMainPc
                        video={video}
                        name={name}
                        picture={picture}
                        link_to={link_to}
                        content={content}
                    />
                </div>

                <div className="h-100per">
                    <ShortVideoInteract interacts={interacts} />
                </div>
            </div>
        </div>
    );
}

export default ShortVideoFullPc;
