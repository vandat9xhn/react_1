import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import { testRegexProfile } from '../../../../../_some_function/testRegexProfile';
//
import Profile from '../../../../user_profile/_main/Profile';

//
FriendsShowProfile.propTypes = {};

//
function FriendsShowProfile({}) {
    //
    useParams();

    //
    const { profile_friends_pathname } = useContext(context_api);

    //
    if (!testRegexProfile() || !profile_friends_pathname.current) {
        return null;
    }

    //
    return (
        <div key={location.pathname}>
            <Profile />
        </div>
    );
}

export default FriendsShowProfile;
