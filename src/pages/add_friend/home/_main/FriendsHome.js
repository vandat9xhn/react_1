import React from 'react';
import PropTypes from 'prop-types';
//
import './FriendsHomeCommon.scss';
// 
import FriendsLayOut from '../../_components/layout/FriendsLayOut';
import FriendHomeRight from '../right/_main/FriendHomeRight';
import FriendsHomeLeft from '../left/_main/FriendsHomeLeft';

//
FriendsHome.propTypes = {};

//
function FriendsHome(props) {
    //
    return (
        <div className="FriendsHome">
            <FriendsLayOut
                ComponentLeft={<FriendsHomeLeft />}
                ComponentRight={<FriendHomeRight />}
            />
        </div>
    );
}

export default FriendsHome;
