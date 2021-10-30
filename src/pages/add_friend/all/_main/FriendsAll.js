import React from 'react';
import PropTypes from 'prop-types';
//
import FriendsLayOut from '../../_components/layout/FriendsLayOut';
import FriendsLeftHead from '../../_components/left_head/FriendsLeftHead';
import FriendsAllLeft from '../left/_main/FriendsAllLeft';

//
FriendsAll.propTypes = {};

//
function FriendsAll(props) {
    //
    function showProfile(profile_ix) {
        console.log(profile_ix);
    }

    //
    return (
        <FriendsLayOut
            ComponentLeftHead={<FriendsLeftHead title="All Friends" />}
            ComponentLeftContain={<FriendsAllLeft showProfile={showProfile} />}
            ComponentRight={<div></div>}
        />
    );
}

export default FriendsAll;
