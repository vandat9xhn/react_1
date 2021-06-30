import React, { useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../_context/ContextAPI';
//
import { useHold } from '../../../_hooks/useHold';
//
import { type_likes } from '../list_type_like/type_likes/TypeLikes';
//
import './Like.scss';

//
Like.propTypes = {
    type_like: PropTypes.number,
    changeTypeLike: PropTypes.func,
    //
    icon_small: PropTypes.bool,
};

Like.defaultProps = {
    type_like: -1,
    icon_small: false,
};

//
function Like({ changeTypeLike, icon_small, type_like }) {
    //
    const { openDivFixLike, closeDivFixLike } = useContext(context_api);

    //
    const is_mobile = localStorage.is_mobile == 1;

    //
    const ref_like_elm = useRef(null);

    const { StartHold, StopHold } = useHold(is_mobile ? 400 : 600);
    const { StartHold: StartOut, StopHold: StopOut } = useHold(
        is_mobile ? 100 : 600
    );

    //
    function openFixLike() {
        const { x, y } = ref_like_elm.current.getBoundingClientRect();

        const fixed_state = {
            icon_small: icon_small,
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave,
            chooseListTypeLike: ChooseListTypeLike,
        };

        !is_mobile
            ? openDivFixLike({
                  left: x + window.pageXOffset,
                  top: y + window.pageYOffset,
                  transform_x: 0,
                  transform_y: '-100%',

                  ...fixed_state,
              })
            : openDivFixLike({
                  left: '50%',
                  top: '50%',
                  transform_x: '-50%',
                  transform_y: '-50%',

                  ...fixed_state,
              });
    }

    /* ------------- MAIN LIKE ------------ */

    //
    function onMouseEnter() {
        StopOut();
    }
    //
    function onMouseLeave() {
        StartOut(closeListTypeLike);
    }

    /* ------------- TYPE LIKE --------------- */

    //
    function onMouseEnterLike() {
        StartHold(openFixLike);
    }

    //
    function onMouseLeaveLike() {
        StopHold();
    }

    /* ------- CHOOSE TYPE --------------- */

    //
    function closeListTypeLike() {
        closeDivFixLike();
    }

    //
    function handleLike() {
        StopHold();
        closeListTypeLike();

        if (type_like >= 0) {
            changeTypeLike(-1);
        } else {
            changeTypeLike(0);
        }
    }

    //
    function ChooseListTypeLike(index) {
        closeListTypeLike();
        changeTypeLike(index);
    }

    //
    return (
        <div
            ref={ref_like_elm}
            className="Like"
            onMouseLeave={is_mobile ? undefined : onMouseLeave}
            onMouseEnter={is_mobile ? undefined : onMouseEnter}
        >
            <div
                className={`Like_type display-flex-center padding-8px cursor-pointer ${
                    icon_small ? 'Like_icon-small' : ''
                } ${type_like == 0 ? 'nav-active active-color' : ''}`}
                onClick={handleLike}
                onTouchStart={onMouseEnterLike}
                onTouchEnd={onMouseLeaveLike}
                onMouseEnter={is_mobile ? undefined : onMouseEnterLike}
                onMouseLeave={is_mobile ? undefined : onMouseLeaveLike}
            >
                {type_like < 0
                    ? type_likes[0].component
                    : type_likes[type_like].component}
            </div>
        </div>
    );
}

export default Like;
