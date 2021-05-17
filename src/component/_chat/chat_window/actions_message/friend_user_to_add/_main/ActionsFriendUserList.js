import React from 'react';
import PropTypes from 'prop-types';
// 
import ScreenBlurShowMore from '../../../../../_screen_blur/_component/foot/ScreenBlurShowMore';
// 
import ActionsFriendUser from '../item/ActionsFriendUser';

//
ActionsFriendUserList.propTypes = {};

//
function ActionsFriendUserList(props) {
    const {
        add_user,
        sendAddFriendToGroupWs,
        getMoreFriendsAddToGroup,
    } = props;

    const { data_arr, count, is_fetching } = add_user;

    //
    return (
        <div>
            {data_arr.map((user, user_ix) => (
                <ActionsFriendUser
                    key={`ActionsChat_user_${user_ix}`}
                    ix={user_ix}
                    user={user}
                    sendAddFriendToGroupWs={sendAddFriendToGroupWs}
                />
            ))}

            <ScreenBlurShowMore
                title="Show more..."
                is_show_more={count > data_arr.length}
                handleShowMore={getMoreFriendsAddToGroup}
                is_fetching={is_fetching}
            />

            <div
                className={
                    data_arr.length != 0 || is_fetching ? 'display-none' : ''
                }
            >
                No friend
            </div>
        </div>
    );
}

export default ActionsFriendUserList;
