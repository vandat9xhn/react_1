import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../../_constant/Constant';
//
import { handle_API_PostAction_L } from '../../../../../../../_handle_api/post/post_action';
//
import ActionsMultiList from '../../../../../../actions_multi_list/_main/ActionsMultiList';
//
import './PostHeadAction.scss';

//
PostHeadAction.propTypes = {};

//
function PostHeadAction({ post_id, post_type, handleAction }) {
    //
    function handle_API_Action_L() {
        return handle_API_PostAction_L({
            params: { post_id: post_id, type: post_type },
        });
    }

    //
    return (
        <div className="PostHeadAction">
            <ActionsMultiList
                class_action_contain={
                    IS_MOBILE
                        ? 'PostHeadAction_list-mb pos-abs bottom-0 left-0 w-100per bg-primary overflow-y-auto scroll-width-0'
                        : 'PostHeadAction_list-pc brs-8px bg-primary box-shadow-fb'
                }
                x_always="right"
                //
                handle_API_L={handle_API_Action_L}
                handleAction={handleAction}
            />
        </div>
    );
}

export default PostHeadAction;
