import React from 'react';
import PropTypes from 'prop-types';
//
import { getRandomBool } from '../../../_default/_common/default_bool';
import { getRandomId } from '../../../_default/_common/default_id';
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
    function chooseListTypeLike(new_like) {
        console.log(new_like);
    }

    //
    function changeStyleAction({
        top_or_bottom,
        position_y,
        transform_y,
        max_height,

        left_or_right,
        position_x,
        transform_x,
    }) {
        console.log(
            top_or_bottom,
            position_y,
            transform_y,
            max_height,

            left_or_right,
            position_x,
            transform_x
        );
        return {};
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
                    title_action={type_likes[0].component}
                    class_action_contain="LearnPreviewProfile_like"
                    changeStyleAction={changeStyleAction}
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
