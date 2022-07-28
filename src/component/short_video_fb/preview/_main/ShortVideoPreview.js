import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { IS_MOBILE } from "../../../../_constant/Constant";
import { context_api } from "../../../../_context/ContextAPI";
import { openScreenWithElm } from "../../../../component/_screen/type/with_elm/ScreenWithElm";

import { useMakeBodyHidden } from "../../../../_hooks/useMakeBodyHidden";

import ShortVideoFullPgPc from "../../../../pages/short_video_full/pc/ShortVideoFullPgPc";
import ShortVideoFullPgMb from "../../../../pages/short_video_full/mobile/ShortVideoFullPgMb";

import "./ShortVideoPreview.scss";

//
ShortVideoPreview.propTypes = {
    id: PropTypes.number,
    thumb: PropTypes.string,
    name: PropTypes.string,
    likes: PropTypes.string,
};

const ShortVideoFullScreen = ({ closeScreenTitle }) => {
    //
    useMakeBodyHidden({
        hidden_header: true,
        hidden_scroll: true,
        hidden_app: true,
    });

    // ----

    if (IS_MOBILE) {
        return <ShortVideoFullPgMb show_screen_title={true} />;
    }

    //
    return (
        <ShortVideoFullPgPc
            show_screen_title={true}
            closeScreenTitle={closeScreenTitle}
        />
    );
};

//
function ShortVideoPreview({ id, thumb, name, likes }) {
    //
    const { openScreenFloor } = useContext(context_api);

    // -----

    //
    const closeScreenTitle = () => {
        history.back();
    };

    //
    const handleClick = (e) => {
        e.preventDefault();

        history.pushState("", "", `/short-video/${id}`);
        openScreenWithElm({
            openScreenFloor: openScreenFloor,
            elm: <ShortVideoFullScreen closeScreenTitle={closeScreenTitle} />,
        });
    };

    //
    return (
        <Link
            className="ShortVideoPreview display-block pos-rel wh-100 overflow-hidden cursor-pointer"
            to={`/short-video/${id}`}
            onClick={handleClick}
        >
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
        </Link>
    );
}

export default ShortVideoPreview;
