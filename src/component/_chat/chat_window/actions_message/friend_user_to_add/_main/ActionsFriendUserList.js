import React from 'react';
import PropTypes from 'prop-types';
//
import ScreenBlurShowMore from '../../../../../_screen_blur/_component/foot/ScreenBlurShowMore';
//
import ActionsFriendUser from '../item/ActionsFriendUser';
import NoItem from '../../../../../some_div/no_item/NoItem';

//
ActionsFriendUserList.propTypes = {};

//
function ActionsFriendUserList({
    add_user,
    sendAddFriendToGroupWs,
    getMoreFriendsAddToGroup,
}) {
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
                is_fetching={is_fetching}
                handleShowMore={getMoreFriendsAddToGroup}
            />

            <div>
                <NoItem
                    no_item={data_arr.length == 0 && !is_fetching}
                    title="No Friend"
                />
            </div>
        </div>
    );
}

export default ActionsFriendUserList;
