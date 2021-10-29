import React from 'react';
import PropTypes from 'prop-types';
//
import { useBool } from '../../../_hooks/useBool';
//
import { type_likes } from '../list_type_like/type_likes/TypeLikes';
//
import ActionsHoldPc from '../../actions_hold/pc/ActionsHoldPc';
import ListTypeLike from '../list_type_like/_main/ListTypeLike';
//
import './Like.scss';
import { IS_MOBILE } from '../../../_constant/Constant';
import ActionsHoldMb from '../../actions_hold/mobile/ActionsHoldMb';

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
    const title_action = (
        <div
            className={`Like_current_like display-flex-center h-100per ${
                icon_small ? 'Like_current_like-small' : ''
            }`}
            onClick={handleLike}
        >
            {type_likes[0].component}
        </div>
    );

    //
    if (IS_MOBILE) {
        return (
            <ActionsHoldMb
                title_action={title_action}
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
                title_action={title_action}
                class_action_contain={`Like_like ${
                    icon_small ? 'Like_like-small' : ''
                }`}
                x_always={'left'}
                y_always={'bottom'}
                //
                force_close={is_true}
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
