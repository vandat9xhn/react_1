import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../_constant/Constant';
//
import { useBool } from '../../../_hooks/useBool';
//
import { type_likes } from '../list_type_like/type_likes/TypeLikes';
//
import ActionsHoldPc from '../../actions_hold/pc/ActionsHoldPc';
import ActionsHoldMb from '../../actions_hold/mobile/ActionsHoldMb';
import ListTypeLike from '../list_type_like/_main/ListTypeLike';
//
import './Like.scss';

//
const TitleAction = ({ icon_small, type_like, handleLike }) => (
    <div
        className={`Like_current_like display-flex-center h-100per cursor-pointer ${
            icon_small ? 'Like_current_like-small' : ''
        } ${type_like == 0 ? 'nav-active' : ''}`}
        onClick={handleLike}
    >
        {type_likes[type_like < 0 ? 0 : type_like].component}
    </div>
);

//
Like.propTypes = {
    type_like: PropTypes.number,
    changeTypeLike: PropTypes.func,

    icon_small: PropTypes.bool,

    use_caret: PropTypes.bool,
};

Like.defaultProps = {
    type_like: -1,
    icon_small: false,

    use_caret: false,
};

//
function Like({ changeTypeLike, icon_small, type_like, use_caret }) {
    //
    const { is_true, toggleBool } = useBool();

    //
    function handleLike() {
        toggleBool();

        if (type_like >= 0) {
            changeTypeLike(-1);
        } else {
            changeTypeLike(0);
        }
    }

    //
    function ChooseListTypeLike(index) {
        toggleBool();
        changeTypeLike(index);
    }

    //
    if (IS_MOBILE) {
        return (
            <ActionsHoldMb
                title_action={
                    <TitleAction
                        icon_small={icon_small}
                        type_like={type_like}
                        handleLike={handleLike}
                    />
                }
                class_action_contain_mb={'pos-abs-center'}
                force_close={is_true}
            >
                <div className="Like_like">
                    <ListTypeLike
                        open_type_like={true}
                        chooseListTypeLike={ChooseListTypeLike}
                    />
                </div>
            </ActionsHoldMb>
        );
    }

    //
    return (
        <div className="Like h-100per">
            <ActionsHoldPc
                title_action={
                    <TitleAction
                        icon_small={icon_small}
                        type_like={type_like}
                        handleLike={handleLike}
                    />
                }
                class_action_contain={`Like_like ${
                    icon_small ? 'Like_like-small' : ''
                }`}
                x_always={'left'}
                y_always={'bottom'}
                //
                force_close={is_true}
                //
                use_caret={use_caret}
            >
                <ListTypeLike
                    open_type_like={true}
                    chooseListTypeLike={ChooseListTypeLike}
                />
            </ActionsHoldPc>
        </div>
    );
}

export default Like;
