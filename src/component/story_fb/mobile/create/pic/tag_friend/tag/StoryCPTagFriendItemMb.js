import React from 'react';
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
    const { handleStart: handleStartResize } = use2FingersResize({
        handleResize: onResizeTag,
    });

    const { handleStart: handleStartMove } = useMouseMoveXY({
        handleMouseMove: onMoveTag,
    });

    //
    function handleTouchStart(e) {
        if (e.touches.length == 1) {
            handleStartMove(e);
        } else {
            handleStartResize(e);
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
            className="StoryCPTagFriendItemMb pos-abs left-50per top-50per"
            style={{
                transform: `translate(-50%, -50%) translate(${trans_x}px, ${trans_y}px) rotate(${rotate}deg)`,
            }}
            onTouchStart={handleTouchStart}
        >
            <div
                className="padding-8px brs-8px text-nowrap"
                style={{ backgroundColor: bg, color: color }}
                onClick={onChangeBgColorIx}
            >
                <span
                    className="label-field"
                    style={{ fontSize: `${scale * 14 + 2}px` }}
                >
                    @ {user.first_name} {user.last_name}
                </span>
            </div>

            <div className="StoryCPTagFriendItemMb_close pos-abs left-100per bottom-100per display-none">
                <div
                    className="StoryCPTagFriendItemMb_close_contain display-flex-center bg-always-white brs-50"
                    onClick={onDelTagFriend}
                >
                    <IconsArrow y={400} size_icon="1rem" />
                </div>
            </div>
        </div>
    );
}

export default StoryCPTagFriendItemMb;
