import React from 'react';
import PropTypes from 'prop-types';
//
import ChatMessageVidPic from '../item/ChatMessageVidPic';

//
ChatMessVidPic.propTypes = {};

//
function ChatMessVidPic({ mess_id, vid_pics, vid_pic_count }) {
    //
    return (
        <div className="ChatMessVidPic bg-shadow-9">
            <div className="VidPics_grid">
                {vid_pics.map((item, index) => (
                    <div
                        key={index}
                        className={`VidPics_count_${
                            vid_pic_count > 4 ? 5 : vid_pic_count
                        }`}
                        data-length={
                            vid_pic_count > 4 && index == 3
                                ? vid_pic_count - 4
                                : ''
                        }
                    >
                        <ChatMessageVidPic
                            mess_id={mess_id}
                            ix={index}
                            vid_pics={vid_pics}
                            vid_pic_count={vid_pic_count}
                            index={index}
                            item={item}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ChatMessVidPic;
