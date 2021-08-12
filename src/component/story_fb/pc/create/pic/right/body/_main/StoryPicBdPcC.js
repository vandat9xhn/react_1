import React from 'react';
import PropTypes from 'prop-types';
//
import StoryPicBdTextPcC from '../text/StoryPicBdTextPcC';
import StoryPicBdPicPcC from '../pic/StoryPicBdPicPcC';
//
import './StoryPicBdPcC.scss';

//
StoryPicBdPcC.propTypes = {};

//
function StoryPicBdPcC({
    vid_pic_obj,
    text_arr,
    add_text_obj,

    openChangeText,
    handleMovePic,
    handleMoveText,
    handleResizeText,
    handleRotateText,
    handleDeleteText,
}) {
    //
    return (
        <div className="StoryPicBdPcC pos-rel wh-100 user-select-none">
            <div
                className="StoryPicBdPcC_bg pos-abs-100"
                style={{ backgroundImage: `url(${vid_pic_obj.vid_pic})` }}
            ></div>

            <div className="pos-abs-center h-100per">
                <StoryPicBdPicPcC
                    vid_pic_obj={vid_pic_obj}
                    handleMove={handleMovePic}
                />
            </div>

            {text_arr.map((item, ix) => (
                <div
                    key={`${item.key}`}
                    className={`pos-abs-center w-100per z-index-lv1 ${
                        add_text_obj.is_open && add_text_obj.num == ix
                            ? 'display-none'
                            : ''
                    }`}
                >
                    <StoryPicBdTextPcC
                        ix={ix}
                        text_obj={item}
                        //
                        openChangeText={openChangeText}
                        handleMove={handleMoveText}
                        handleResize={handleResizeText}
                        handleRotate={handleRotateText}
                        handleDelete={handleDeleteText}
                    />
                </div>
            ))}

            <div className="pos-abs-center crop-border pointer-events-none"></div>
        </div>
    );
}

export default StoryPicBdPcC;
