import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../_constant/Constant';
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
    const ref_like_elm = useRef(null);

    const { StartHold, StopHold } = useHold(IS_MOBILE ? 400 : 600);
    const { StartHold: StartOut, StopHold: StopOut } = useHold(
        IS_MOBILE ? 100 : 600
    );

    //
    function openFixLike() {
        const { x, y } = ref_like_elm.current.getBoundingClientRect();

        openDivFixLike({
            ...(!IS_MOBILE
                ? {
                      scroll_elm: ref_like_elm.current.closest(
                          '[class~=div_fix_scroll]'
                      ),
                      left: x,
                      top: y + pageYOffset,
                      transform_x: 0,
                      transform_y: '-100%',
                  }
                : {
                      left: '50%',
                      top: '50%',
                      transform_x: '-50%',
                      transform_y: '-50%',
                  }),

            icon_small: icon_small,
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave,
            chooseListTypeLike: ChooseListTypeLike,
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
            className="Like wh-100 cursor-pointer"
            onMouseLeave={IS_MOBILE ? undefined : onMouseLeave}
            onMouseEnter={IS_MOBILE ? undefined : onMouseEnter}
        >
            <div
                className={`Like_type display-flex-center padding-8px ${
                    icon_small ? 'Like_icon-small' : ''
                } ${type_like == 0 ? 'nav-active active-color' : ''}`}
                onClick={handleLike}
                onTouchStart={onMouseEnterLike}
                onTouchEnd={onMouseLeaveLike}
                onMouseEnter={IS_MOBILE ? undefined : onMouseEnterLike}
                onMouseLeave={IS_MOBILE ? undefined : onMouseLeaveLike}
            >
                {type_like < 0
                    ? type_likes[0].component
                    : type_likes[type_like].component}
            </div>
        </div>
    );
}

export default Like;
