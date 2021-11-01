import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../_constant/Constant';
//
import { usePageNotHeader } from '../../../../_hooks/usePageNotHeader';
//
import FriendsLayOut from '../../_components/layout/_main/FriendsLayOut';
import FriendsLeftHeadHome from '../../_components/left_head_home/FriendsLeftHeadHome';
import FriendsHomeLeft from '../../home/left/_main/FriendsHomeLeft';
import FriendsBirthRight from '../right/_main/FriendsBirthRight';

//
FriendsBirth.propTypes = {};

//
function FriendsBirth(props) {
    //
    IS_MOBILE && usePageNotHeader();

    //
    return IS_MOBILE ? (
        <FriendsBirthRight />
    ) : (
        <FriendsLayOut
            ComponentLeftHead={<FriendsLeftHeadHome />}
            ComponentLeftContain={<FriendsHomeLeft />}
            ComponentRight={<FriendsBirthRight />}
        />
    );
}

export default FriendsBirth;
