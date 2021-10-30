import React from 'react';
import PropTypes from 'prop-types';
//
import FriendsLayOut from '../../_components/layout/FriendsLayOut';
import FriendsLeftHead from '../../_components/left_head/FriendsLeftHead';
import FriendsSuggestLeft from '../left/_main/FriendsSuggestLeft';

//
FriendsSuggest.propTypes = {};

//
function FriendsSuggest(props) {
    //
    function showProfile(profile_id) {
        console.log(profile_id);
    }

    //
    return (
        <FriendsLayOut
            ComponentLeftHead={<FriendsLeftHead title="Suggestions" />}
            ComponentLeftContain={
                <FriendsSuggestLeft showProfile={showProfile} />
            }
            ComponentRight={<div></div>}
        />
    );
}

export default FriendsSuggest;
