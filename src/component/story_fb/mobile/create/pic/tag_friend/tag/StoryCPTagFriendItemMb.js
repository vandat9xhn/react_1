import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import { use2FingersResize } from '../../../../../../../_hooks/use2FingersResize';
import { useMouseMoveXY } from '../../../../../../../_hooks/useMouseMoveXY';
//
import IconsArrow from '../../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './StoryCPTagFriendItemMb.scss';

//
StoryCPTagFriendItemMb.propTypes = {};

//
function StoryCPTagFriendItemMb({
    ix,
    tag_user_obj,

    changeBgColorIx,
    handleResizeTag,
    handleMoveTag,
    handleDelTag,
}) {
    //
    const { user, bg, color, trans_x, trans_y, rotate, scale } = tag_user_obj;

    //
    const ref_fake_elm = useRef(null);

    //
    const { handleTouchStart, handleTouchMove, handleTouchEnd } =
        use2FingersResize({
            handleResize: onResizeTag,
        });

    const { handleStart: handleStartMove } = useMouseMoveXY({
        handleMouseMove: onMoveTag,
    });

    //
    function onTouchStart(e) {
        if (e.touches.length == 1) {
            handleStartMove(e);
        } else {
            handleTouchStart(e);

            ref_fake_elm.current.style.display = 'block';
        }
    }

    //
    function onTouchMove(e) {
        handleTouchMove(e);
    }

    //
    function onTouchEnd(e) {
        handleTouchEnd(e);

        if (e.touches.length == 0) {
            ref_fake_elm.current.style.display = '';
        }
    }

    //
    function onResizeTag(data_resize) {
        handleResizeTag({ ...data_resize, ix: ix });
    }

    //
    function onMoveTag(data_move) {
        handleMoveTag({ ...data_move, ix: ix });
    }

    //
    function onDelTagFriend() {
        handleDelTag(ix);
    }

    //
    function onChangeBgColorIx() {
        changeBgColorIx(ix);
    }

    //
    return (
        <div
            className="StoryCPTagFriendItemMb pos-abs left-50per top-50per touch-action-none"
            style={{
                transform: `translate(-50%, -50%) translate(${trans_x}px, ${trans_y}px) rotate(${rotate}deg) scale(${scale})`,
            }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            <div
                className="padding-8px brs-8px text-nowrap"
                style={{ backgroundColor: bg, color: color }}
                onClick={onChangeBgColorIx}
            >
                <span className="label-field font-18px">
                    @ {user.first_name} {user.last_name}
                </span>
            </div>

            <div
                className="StoryCPTagFriendItemMb_close pos-abs left-100per bottom-100per display-none"
                style={{
                    transform: `translate(-50%, 50%) scale(${1 / scale})`,
                }}
            >
                <div
                    className="StoryCPTagFriendItemMb_close_contain display-flex-center bg-always-white brs-50 box-shadow-1"
                    onClick={onDelTagFriend}
                >
                    <IconsArrow y={400} size_icon="1rem" />
                </div>
            </div>

            <div className="pos-abs-100"></div>

            <div
                ref={ref_fake_elm}
                className="pos-abs-center wh-200v display-none"
                style={{ transform: `scale(${1 / scale})` }}
            ></div>
        </div>
    );
}

export default StoryCPTagFriendItemMb;
