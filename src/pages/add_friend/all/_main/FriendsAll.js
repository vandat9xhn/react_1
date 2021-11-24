import React from 'react';
import PropTypes from 'prop-types';
//
import { useFriendsShowProfile } from '../../../../_hooks/friends/useFriendsShowProfile';
//
import FriendsLayOut from '../../_components/layout/_main/FriendsLayOut';
import FriendsLeftHead from '../../_components/left_head/FriendsLeftHead';
import FriendsAllLeft from '../left/_main/FriendsAllLeft';
import FriendsShowProfile from '../../_components/profile/_main/FriendsShowProfile';

//
FriendsAll.propTypes = {};

//
function FriendsAll(props) {
    //
    const { showProfile } = useFriendsShowProfile({
        friends_pathname: '/friends/all',
    });

    //
    return (
        <FriendsLayOut
            ComponentLeftHead={<FriendsLeftHead title="All Friends" />}
            ComponentLeftContain={<FriendsAllLeft showProfile={showProfile} />}
            ComponentRight={<FriendsShowProfile />}
        />
    );
}

export default FriendsAll;
