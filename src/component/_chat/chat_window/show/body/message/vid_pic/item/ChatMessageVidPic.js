import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../../_context/ContextAPI';
//
import { handle_API_ChatVidPic_L } from '../../../../../../../../_handle_api/chat/ChatHandleAPI';
// 
import { openScreenVidPic } from '../../../../../../../_screen/type/vid_pics/_main/ZoomVidPics';
//
import { VideoOrImage } from '../../../../../../../../_some_function/VideoOrImage';

//
ChatMessageVidPic.propTypes = {};

//
function ChatMessageVidPic({ mess_id, vid_pics, vid_pic_count, ix, item }) {
    //
    const { openScreenFloor } = useContext(context_api);

    //
    async function openZoomVidPic() {
        if (vid_pics.length < vid_pic_count) {
            const new_vid_pics = await handle_API_ChatVidPic_L(
                mess_id,
                vid_pics.length
            );

            vid_pics.push(...new_vid_pics);
        }

        openScreenVidPic({
            openScreenFloor: openScreenFloor,
            urls: vid_pics,
            current: ix,
        });
    }

    //
    return (
        <div className="h-100per" onClick={openZoomVidPic}>
            {VideoOrImage(item.vid_pic || item.url, item.type)}
        </div>
    );
}

export default ChatMessageVidPic;
