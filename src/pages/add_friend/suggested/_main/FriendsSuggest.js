import React from 'react';
import PropTypes from 'prop-types';
//
import { useFriendsShowProfile } from '../../../../_hooks/friends/useFriendsShowProfile';
//
import FriendsLayOut from '../../_components/layout/_main/FriendsLayOut';
import FriendsLeftHead from '../../_components/left_head/FriendsLeftHead';
import FriendsSuggestLeft from '../left/_main/FriendsSuggestLeft';
import FriendsShowProfile from '../../_components/profile/_main/FriendsShowProfile';

//
FriendsSuggest.propTypes = {};

//
function FriendsSuggest(props) {
    //
    const { showProfile } = useFriendsShowProfile({
        friends_pathname: '/friends/suggestions',
    });

    //
    return (
        <FriendsLayOut
            ComponentLeftHead={<FriendsLeftHead title="Suggestions" />}
            ComponentLeftContain={
                <FriendsSuggestLeft showProfile={showProfile} />
            }
            ComponentRight={<FriendsShowProfile />}
        />
    );
}

export default FriendsSuggest;
