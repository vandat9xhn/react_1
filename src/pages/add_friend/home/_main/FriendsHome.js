import React from 'react';
import PropTypes from 'prop-types';
//
import FriendsLayOut from '../../_components/layout/_main/FriendsLayOut';
import FriendsLeftHeadHome from '../../_components/left_head_home/FriendsLeftHeadHome';
import FriendHomeRight from '../right/_main/FriendHomeRight';
import FriendsHomeLeft from '../left/_main/FriendsHomeLeft';
//
import './FriendsHomeCommon.scss';

//
FriendsHome.propTypes = {};

//
function FriendsHome(props) {
    //
    return (
        <div className="FriendsHome">
            <FriendsLayOut
                ComponentLeftHead={<FriendsLeftHeadHome />}
                ComponentLeftContain={<FriendsHomeLeft />}
                ComponentRight={<FriendHomeRight />}
            />
        </div>
    );
}

export default FriendsHome;
