import React from 'react';
import PropTypes from 'prop-types';
//
import StoryPicBdPcC from '../body/_main/StoryPicBdPcC';
import StoryPicFootPcC from '../foot/StoryPicFootPcC';
import StoryAddTextPcC from '../add_text/_main/StoryAddTextPcC';
//
import './StoryPicRightPcC.scss';

//
StoryPicRightPcC.propTypes = {};

//
function StoryPicRightPcC({
    ref_body_elm,
    story_width,
    
    vid_pic_obj,
    text_arr,
    add_text_obj,
    value_zoom_pic,

    openChangeText,
    handleAddText,
    handleMovePic,
    handleMoveText,
    handleResizeText,
    handleRotateText,
    handleDeleteText,

    handleChangeZoom,
    afterMouseUpZoom,
    handleRotatePic,
}) {
    

    //
    return (
        <div className="StoryPicRightPcC display-flex flex-col h-100per">
            <div
                ref={ref_body_elm}
                className="flex-grow-1 display-flex-center overflow-hidden"
            >
                <div
                    className="pos-rel h-100per"
                    style={{
                        width: `${story_width}px`,
                    }}
                >
                    <StoryPicBdPcC
                        vid_pic_obj={vid_pic_obj}
                        text_arr={text_arr}
                        add_text_obj={add_text_obj}
                        //
                        openChangeText={openChangeText}
                        handleMovePic={handleMovePic}
                        handleMoveText={handleMoveText}
                        handleResizeText={handleResizeText}
                        handleRotateText={handleRotateText}
                        handleDeleteText={handleDeleteText}
                    />

                    {add_text_obj.is_open ? (
                        <div className="pos-abs-100 bg-shadow-5">
                            <StoryAddTextPcC
                                add_text_obj={add_text_obj}
                                handleAddText={handleAddText}
                            />
                        </div>
                    ) : null}
                </div>
            </div>

            <div>
                <StoryPicFootPcC
                    value_zoom={value_zoom_pic}
                    handleChangeZoom={handleChangeZoom}
                    afterMouseUpZoom={afterMouseUpZoom}
                    handleRotatePic={handleRotatePic}
                />
            </div>
        </div>
    );
}

export default StoryPicRightPcC;
