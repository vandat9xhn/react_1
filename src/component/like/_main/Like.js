import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { useHoldPress } from '../../../_custom_hooks/useHoldPress';
//
import ListTypeLike from '../list_type_like/_main/ListTypeLike';
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
function Like(props) {
    //
    const { changeTypeLike, icon_small, type_like } = props;

    // state
    const [open_type_like, setOpenTypeLike] = useState(false);

    // ref
    const is_mobile = useRef(localStorage.is_mobile == 1);

    // use hook
    const [StartHoldPress, StopHoldPress] = useHoldPress(8, () => {
        setOpenTypeLike(true);
    });

    const [StartOutPress, StopOutPress] = useHoldPress(10, () => {
        setOpenTypeLike(false);
    });

    /* ##################### LAPTOP ####################### */

    /* ------------------- MAIN LIKE ----------------------------- */

    // when enter
    function onMouseEnter() {
        StopOutPress();
    }
    // when leave
    function onMouseLeave() {
        StartOutPress();
    }

    /* ------------------- TYPE LIKE ----------------------------- */

    //
    function onMouseEnterLike() {
        StartHoldPress();
    }
    //
    function onMouseLeaveLike() {
        StopHoldPress();
    }

    /* ##################### PHONE IPAD ####################### */

    // when touch start
    function onTouchStartLike() {
        StartHoldPress();
    }
    // when touch end
    function onTouchEndLike() {
        StopHoldPress();
    }

    /* ------------------- CHOOSE TYPE ----------------------------- */

    //
    function handleLike() {
        StopHoldPress();
        if (open_type_like) {
            setOpenTypeLike(false);
        }
        //
        if (type_like >= 0) {
            changeTypeLike(-1);
        } else {
            changeTypeLike(0);
        }
    }

    //
    function ChooseListTypeLike(index) {
        setOpenTypeLike(false);
        changeTypeLike(index);
    }

    //
    function closeListTypeLike() {
        setOpenTypeLike(false);
    }

    /* ------------------------------------------- */

    return (
        <div
            className="Like"
            onMouseLeave={onMouseLeave}
            onMouseEnter={onMouseEnter}
        >
            <div className="Like_contain">
                <div
                    className={`Like_type ${
                        icon_small ? 'Like_icon-small' : ''
                    } ${type_like == 0 ? 'nav-active active-color' : ''}`}
                    onClick={handleLike}
                    onTouchStart={
                        is_mobile.current ? onTouchStartLike : undefined
                    }
                    onTouchEnd={is_mobile.current ? onTouchEndLike : undefined}
                    onMouseEnter={
                        is_mobile.current ? undefined : onMouseEnterLike
                    }
                    onMouseLeave={
                        is_mobile.current ? undefined : onMouseLeaveLike
                    }
                >
                    {type_like < 0
                        ? type_likes[0].component
                        : type_likes[type_like].component}
                </div>

                {!is_mobile.current && open_type_like && (
                    <div
                        className={`Like_list-type ${
                            icon_small ? 'Like_list-small' : ''
                        }`}
                    >
                        <ListTypeLike
                            chooseListTypeLike={ChooseListTypeLike}
                            open_type_like={open_type_like}
                        />
                    </div>
                )}
            </div>

            {/* when can touch */}
            {is_mobile.current && open_type_like && (
                <div
                    className="Like_screen-list-type screen-blur"
                    onClick={closeListTypeLike}
                >
                    <div className="Like_list-type-touch">
                        <ListTypeLike
                            chooseListTypeLike={ChooseListTypeLike}
                            open_type_like={open_type_like}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Like;
