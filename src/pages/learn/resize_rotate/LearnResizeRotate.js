import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import {
    handleResizeRect,
    handleRotateRect,
} from '../../../_some_function/handleResizeRotateRect';
//
import { useMouseMoveXY } from '../../../_hooks/useMouseMoveXY';
//
import StoryTextResizePicC from '../../../component/story_fb/_components/create/story_pic/text/resize/StoryTextResizePicC';
import StoryTextRotatePicC from '../../../component/story_fb/_components/create/story_pic/text/rotate/StoryTextRotatePicC';
import StoryTextContentPicC from '../../../component/story_fb/_components/create/story_pic/text/content/StoryTextContentPicC';
//
import './LearnResizeRotate.scss';

//
LearnResizeRotate.propTypes = {};

//
function LearnResizeRotate(props) {
    //
    const [state_obj, setStateObj] = useState({
        rotate: 0,
        scale: 1,
        trans_x: 0,
        trans_y: 0,
    });

    const { rotate, scale, trans_x, trans_y } = state_obj;

    //
    const { handleStart } = useMouseMoveXY({
        handleMouseMove: handleMouseMove,
    });

    //
    function getMainElm() {
        return document.getElementsByClassName('LearnResizeRotate_rotate')[0];
    }

    /* -------------- */

    //
    function handleMouseMove({ client_x_change, client_y_change }) {
        setStateObj((state_obj) => {
            return {
                ...state_obj,
                trans_x: state_obj.trans_x + client_x_change,
                trans_y: state_obj.trans_y + client_y_change,
            };
        });
    }

    //
    function handleResize({
        old_client_x,
        old_client_y,
        new_client_x,
        new_client_y,
    }) {
        const { scale_change } = handleResizeRect({
            elm: getMainElm(),
            old_client_x: old_client_x,
            old_client_y: old_client_y,
            new_client_x: new_client_x,
            new_client_y: new_client_y,
        });

        setStateObj((state_obj) => {
            return {
                ...state_obj,
                scale: state_obj.scale + scale_change,
            };
        });
    }

    //
    function handleRotate({
        old_client_x,
        old_client_y,
        new_client_x,
        new_client_y,
    }) {
        const { rotate_change } = handleRotateRect({
            elm: getMainElm(),
            old_client_x: old_client_x,
            old_client_y: old_client_y,
            new_client_x: new_client_x,
            new_client_y: new_client_y,
        });

        setStateObj((state_obj) => {
            return {
                ...state_obj,
                rotate: state_obj.rotate + rotate_change,
            };
        });
    }

    //
    return (
        <div className="LearnResizeRotate display-flex-center">
            <div
                className="LearnResizeRotate_transform pos-rel"
                style={{ transform: `translate(${trans_x}px, ${trans_y}px)` }}
                onMouseDown={handleStart}
            >
                <div
                    className="LearnResizeRotate_rotate pos-rel"
                    style={{
                        transform: `rotate(${rotate}deg)`,
                    }}
                >
                    <div
                        className="LearnResizeRotate_contain pos-rel bg-primary box-shadow-1"
                        style={{
                            transform: `scale(${scale})`,
                        }}
                    >
                        <div>
                            <StoryTextContentPicC
                                text={`asda sa\nasdad\nasd adaasd sadadas d\nadadsadsad`}
                            />
                        </div>

                        <div className="LearnResizeRotate_resize pos-abs bottom-100per right-100per">
                            <div className="wh-100">
                                <StoryTextResizePicC
                                    handleResize={handleResize}
                                />
                            </div>

                            <div className="LearnResizeRotate_resize_contain pos-abs-center brs-50 bg-blue pointer-events-none"></div>
                        </div>

                        <div className="LearnResizeRotate_rotate pos-abs left-100per top-100per">
                            <div className="LearnResizeRotate_rotate_contain">
                                <StoryTextRotatePicC
                                    handleRotate={handleRotate}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LearnResizeRotate;
