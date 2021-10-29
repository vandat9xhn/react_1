import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//
FriendHomeFriendList.propTypes = {};

//
function FriendHomeFriendList({ title, link_to_all, children }) {
    //
    return (
        <div className="FriendHomeFriendList padding-top-20px">
            <div className="FriendHomeFriendList_head flex-between-center margin-bottom-15px">
                <h2 className="font-20px font-700">{title}</h2>

                <Link className="font-17px font-400" to={link_to_all}>
                    See all
                </Link>
            </div>

            <div>
                <div>{children}</div>
            </div>
        </div>
    );
}

export default FriendHomeFriendList;
