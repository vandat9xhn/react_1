import React from 'react';
import PropTypes from 'prop-types';
//
import FriendsHomeSuggest from '../list_suggest/FriendsHomeSuggest';
import FriendsHomeRequest from '../list_request/FriendsHomeRequest';
//
import './FriendHomeRight.scss';

//
FriendHomeRight.propTypes = {};

//
function FriendHomeRight(props) {
    //
    return (
        <div className="FriendHomeRight">
            <div>
                <FriendsHomeRequest />
            </div>

            <div>
                <FriendsHomeSuggest />
            </div>
        </div>
    );
}

export default FriendHomeRight;
