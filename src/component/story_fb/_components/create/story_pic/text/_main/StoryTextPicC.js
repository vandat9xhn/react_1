import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../../_constant/Constant';
//
import {
    handleResizeRect,
    handleRotateRect,
} from '../../../../../../../_some_function/handleResizeRotateRect';
//
import StoryTextPicDel from '../close/StoryTextPicDel';
import StoryTextResizePicC from '../resize/StoryTextResizePicC';
import StoryTextRotatePicC from '../rotate/StoryTextRotatePicC';
import StoryTextContentPicC from '../content/StoryTextContentPicC';
//
import './StoryTextPicC.scss';

//
StoryTextPicC.propTypes = {};

//
function StoryTextPicC({
    ix,
    text_obj,
    show_action,

    openChangeText,
    handleMove,
    handleResize,
    handleRotate,
    handleDelete,
}) {
    //
    const { text, color, font, trans_x, trans_y, rotate, scale } = text_obj;

    //
    const ref_main_elm = useRef(null);

    //
    function getMainElm() {
        return ref_main_elm.current;
    }

    /* -------------- */

    //
    function onOpenChangeText() {
        openChangeText(ix);
    }

    //
    function handleMouseMove({ client_x_change, client_y_change }) {
        handleMove({
            ix: ix,
            client_x_change: client_x_change,
            client_y_change: client_y_change,
        });
    }

    //
    function onResize({
        old_client_x,
        old_client_y,
        new_client_x,
        new_client_y,
    }) {
        handleResize({
            ix: ix,
            ...handleResizeRect({
                elm: getMainElm(),
                old_client_x: old_client_x,
                old_client_y: old_client_y,
                new_client_x: new_client_x,
                new_client_y: new_client_y,
            }),
        });
    }

    //
    function onRotate({
        old_client_x,
        old_client_y,
        new_client_x,
        new_client_y,
    }) {
        handleRotate({
            ix: ix,
            ...handleRotateRect({
                elm: getMainElm(),
                old_client_x: old_client_x,
                old_client_y: old_client_y,
                new_client_x: new_client_x,
                new_client_y: new_client_y,
            }),
        });
    }

    //
    function onDelete() {
        handleDelete(ix);
    }

    //
    return (
        <div
            ref={ref_main_elm}
            className="StoryTextPicC position-abs max-w-100per"
            style={{
                transform: `translate(${-50}%, ${-50}%) translate(${trans_x}px, ${trans_y}px) rotate(${rotate}deg)`,
            }}
        >
            <div
                className={`StoryTextPicC_content padding-8px ${
                    show_action ? 'StoryTextPicC_content-active brs-5px' : ''
                }`}
                style={{ fontSize: `${16 * scale}px` }}
            >
                <StoryTextContentPicC
                    text={text}
                    color={color}
                    font={font}
                    openChangeText={onOpenChangeText}
                    handleMouseMove={handleMouseMove}
                />
            </div>

            <div className={`${show_action ? '' : 'display-none'}`}>
                <div className="StoryTextPicC_del position-abs top-left-center">
                    <StoryTextPicDel handleDelete={onDelete} />
                </div>

                <div>
                    {!IS_MOBILE ? (
                        <div className="StoryTextPicC_resize position-abs bottom-right-center">
                            <StoryTextResizePicC handleResize={onResize} />
                        </div>
                    ) : null}

                    <div className="StoryTextPicC_rotate position-abs top-right-center ">
                        <StoryTextRotatePicC handleRotate={onRotate} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoryTextPicC;
