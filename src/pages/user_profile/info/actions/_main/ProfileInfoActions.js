import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import IconsMenu from '../../../../../_icons_svg/icons_menu/IconsMenu';
//
import { handleInfoActions } from '../case/_main/InfoActionsCase';
//
import './ProfileInfoActions.scss';

//
ProfileInfoActions.propTypes = {};

//
function ProfileInfoActions({
    id,
    is_user,
    user_related,
    permission_add_friend,
    is_block_message,

    handleAddStory,
    handleAcceptRequest,
    handleCancelRequest,
    handleAddFriend,
    handleFollowFriend,
}) {
    //
    const { openMessage } = useContext(context_api);

    //
    function onOpenMessage() {
        openMessage(id);
    }

    //
    return (
        <div className="ProfileInfoActions">
            <div className="brs-5px label-field">
                <div className="display-flex-center">
                    <div className="display-flex-center">
                        <div className="ProfileInfoActions_add-friend display-flex-center brs-5px">
                            {handleInfoActions(
                                user_related,
                                permission_add_friend,
                                handleAddStory,
                                handleAcceptRequest,
                                handleCancelRequest,
                                handleAddFriend,
                                handleFollowFriend
                            )}
                        </div>
                    </div>

                    {!is_block_message && !is_user && (
                        <div
                            className="ProfileInfoActions_message"
                            title="message"
                            onClick={onOpenMessage}
                        >
                            <IconsMenu x={200} y={200} size_icon="2rem" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProfileInfoActions;
