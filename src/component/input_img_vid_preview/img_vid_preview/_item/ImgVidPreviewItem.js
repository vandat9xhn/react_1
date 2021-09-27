import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';

import { context_api } from '../../../../_context/ContextAPI';
//
import { openScreenVidPic } from '../../../_screen/type/vid_pics/_main/ZoomVidPics';
//
import IconsArrow from '../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './ImgVidPreviewItem.scss';

//
ImgVidPreviewItem.propTypes = {
    item_ix: PropTypes.number,
    urls: PropTypes.array,
    url: PropTypes.string,
    type: PropTypes.string,

    video_controls: PropTypes.bool,
    video_preload: PropTypes.string,

    deleteAnItem: PropTypes.func,
};

ImgVidPreviewItem.defaultProps = {
    video_controls: false,
    video_preload: 'metadata',
};

//
function ImgVidPreviewItem({
    item_ix,
    urls,
    url,
    type,

    video_controls,
    video_preload,

    deleteAnItem,
}) {
    //
    const { openScreenFloor } = useContext(context_api);

    //
    const ref_video = useRef(null);

    /*------------------*/

    //
    function zoomOutVideo(e) {
        e.preventDefault();

        openScreenVidPic({
            openScreenFloor: openScreenFloor,

            urls: urls,
            current: item_ix,
        });
        //
        !ref_video.current.paused && ref_video.current.pause();
    }

    //
    function zoomOutPic() {
        openScreenVidPic({
            openScreenFloor: openScreenFloor,

            urls: urls,
            current: item_ix,
        });
    }

    //
    function onDeleteAnItem() {
        deleteAnItem(item_ix);
    }

    //
    return (
        <div className="ImgVidPreviewItem">
            {type.startsWith('video') ? (
                <video
                    className="wh-100 brs-5px"
                    src={url}
                    ref={ref_video}
                    alt=""
                    preload={video_preload}
                    controls={video_controls}
                    onClick={zoomOutVideo}
                />
            ) : (
                <img
                    className="wh-100 brs-5px object-fit-cover"
                    src={url}
                    alt=""
                    onClick={zoomOutPic}
                />
            )}

            <div className="ImgVidPreviewItem_delete">
                <div
                    className="ImgVidPreviewItem__icon-arrow display-flex-center brs-50 hv-opacity cursor-pointer"
                    onClick={onDeleteAnItem}
                    title="Delete"
                >
                    <IconsArrow y={400} size_icon="1rem" />
                </div>
            </div>
        </div>
    );
}

export default ImgVidPreviewItem;
