import React from 'react';
import PropTypes from 'prop-types';
//
import FriendsLayOut from '../../_components/layout/FriendsLayOut';
import FriendsLeftHeadHome from '../../_components/left_head_home/FriendsLeftHeadHome';
import FriendsHomeLeft from '../../home/left/_main/FriendsHomeLeft';
import FriendsBirthRight from '../right/_main/FriendsBirthRight';

//
FriendsBirth.propTypes = {};

//
function FriendsBirth(props) {
    //
    return (
        <FriendsLayOut
            ComponentLeftHead={<FriendsLeftHeadHome />}
            ComponentLeftContain={<FriendsHomeLeft />}
            ComponentRight={<FriendsBirthRight />}
        />
    );
}

export default FriendsBirth;
