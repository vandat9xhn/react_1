import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../../_context/ContextAPI';
//
import { handle_API_FashionCommentVidPicMore_L } from '../../../../../../../../_handle_api/fashion/FashionItemCmtHandleAPI';
//
import { useScreenFetching } from '../../../../../../../../_hooks/UseScreenFetching';
//
import { VideoOrImage } from '../../../../../../../../_some_function/VideoOrImage';
//
import { openScreenVidPic } from '../../../../../../../../component/_screen/type/vid_pics/_main/ZoomVidPics';
import FetchingDiv from '../../../../../../../../component/some_div/fetching/FetchingDiv';

//
FsICmtVidPic.propTypes = {};

//
function FsICmtVidPic({ id, vid_pics, count_vid_pic }) {
    //
    const { openScreenFloor } = useContext(context_api);

    //
    const [cmt_vid_pic_state, setCmtVidPicState] = useState({
        has_fetched: vid_pics.length >= count_vid_pic,
        is_fetching: false,
    });

    const { has_fetched, is_fetching } = cmt_vid_pic_state;

    //
    const handleScreenFetching = useScreenFetching();

    //
    async function getMoreVidPic() {
        if (is_fetching) {
            return;
        }

        setCmtVidPicState({
            ...cmt_vid_pic_state,
            is_fetching: true,
        });

        const new_vid_pics = await handle_API_FashionCommentVidPicMore_L({
            comment_model: id,
            c_count: vid_pics.length,
        });
        vid_pics.push(...new_vid_pics);

        setCmtVidPicState({
            ...cmt_vid_pic_state,
            has_fetched: true,
            is_fetching: false,
        });
    }

    //
    async function onZoomVidPics(vid_pic_ix) {
        if (!has_fetched) {
            await handleScreenFetching(getMoreVidPic);
        }

        openScreenVidPic({
            openScreenFloor: openScreenFloor,
            urls: vid_pics,
            current: vid_pic_ix,
        });
    }
    //
    return (
        <div>
            <div className="FashionItemCmtItem_images">
                {vid_pics.map((vid_pic, vid_pic_ix) => (
                    <div
                        key={`vid_pics${vid_pic_ix}`}
                        className="FashionItemCmtItem_image"
                        onClick={() => onZoomVidPics(vid_pic_ix)}
                    >
                        {VideoOrImage(
                            vid_pic.vid_pic || vid_pic.url,
                            vid_pic.vid_pic || vid_pic.type
                        )}
                    </div>
                ))}

                <div className={`${has_fetched ? 'display-none' : ''}`}>
                    {!is_fetching ? (
                        <div
                            className="label-field text-secondary cursor-pointer"
                            onClick={getMoreVidPic}
                        >
                            {' '}
                            +{count_vid_pic - vid_pics.length}
                        </div>
                    ) : (
                        <FetchingDiv is_fetching={is_fetching} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default FsICmtVidPic;
