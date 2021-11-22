import React from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_ProfileInfo_L } from '../../../../../../_handle_api/profile/info';
//
import CardsRowFit from '../../../../../../component/cards_row/fit/_main/CardsRowFit';
import AddFriendSuggest from '../../../../../../component/add_friend_add/suggest/AddFriendSuggest';
//
import './NewFeedSuggestedFriends.scss';

//
function FriendItem({ item, ix, addFriend, removeFriend }) {
    return (
        <AddFriendSuggest
            profile={item}
            sent={item.sent_request}
            link_to={`/profile/${item.id}`}
            //
            addFriend={() => addFriend(ix)}
            removeFriend={() => removeFriend(ix)}
        />
    );
}

//
NewFeedSuggestedFriends.propTypes = {};

//
function NewFeedSuggestedFriends({ params_api, handleFetched }) {
    //
    function handle_API_L(c_count) {
        return handle_API_ProfileInfo_L({
            c_count: c_count,
            type: 'suggest',
            params: {
                size: 5,
                ...params_api,
            },
        });
    }

    // ------

    //
    function addFriend(params) {
        console.log(params);
    }

    //
    function removeFriend(params) {
        console.log(params);
    }

    //
    return (
        <div className="NewFeedSuggestedFriends w-500px margin-auto">
            <CardsRowFit
                ItemComponent={FriendItem}
                item_props={{
                    addFriend: addFriend,
                    removeFriend: removeFriend,
                }}
                //
                handle_API_L={handle_API_L}
                handleFetched={handleFetched}
            />
        </div>
    );
}

export default NewFeedSuggestedFriends;
