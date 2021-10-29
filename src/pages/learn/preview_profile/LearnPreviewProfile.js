import React from 'react';
import PropTypes from 'prop-types';
//
import { getRandomBool } from '../../../_default/_common/default_bool';
import { getRandomId } from '../../../_default/_common/default_id';
//
import { useBool } from '../../../_hooks/useBool';
//
import { type_likes } from '../../../component/like/list_type_like/type_likes/TypeLikes';
//
import ActionPreviewProfile from '../../../component/action_preview_profile/_main/ActionPreviewProfile';
import ActionsHoldPc from '../../../component/actions_hold/pc/ActionsHoldPc';
import ListTypeLike from '../../../component/like/list_type_like/_main/ListTypeLike';
//
import './LearnPreviewProfile.scss';

//
LearnPreviewProfile.propTypes = {};

//
function LearnPreviewProfile(props) {
    //
    const { is_true, toggleBool } = useBool();

    //
    function chooseListTypeLike(new_like) {
        console.log(new_like);
        toggleBool();
    }

    //
    function chooseLike() {
        console.log('toggle like');
        toggleBool();
    }

    //
    return (
        <div>
            <div className="display-flex-center">
                <ActionPreviewProfile
                    user_id={getRandomBool() ? 1 : getRandomId()}
                    title_action={<div className="font-600">Nguyen Nguyen</div>}
                />
            </div>
            <br />
            <br />

            <div className="display-flex-center">
                <ActionsHoldPc
                    title_action={
                        <div
                            className="LearnPreviewProfile_current_like padding-y-8px padding-x-20px brs-18px border-blur bg-primary"
                            onClick={chooseLike}
                        >
                            {type_likes[0].component}
                        </div>
                    }
                    class_action_contain="LearnPreviewProfile_like"
                    x_always={'left'}
                    y_always={'bottom'}
                    //
                    force_close={is_true}
                >
                    <div className="LearnPreviewProfile_like_contain">
                        <ListTypeLike
                            open_type_like={true}
                            chooseListTypeLike={chooseListTypeLike}
                        />
                    </div>
                </ActionsHoldPc>
            </div>
        </div>
    );
}

export default LearnPreviewProfile;
