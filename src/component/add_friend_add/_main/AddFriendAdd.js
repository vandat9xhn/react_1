import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import './AddFriendAdd.scss';

//
AddFriendAdd.propTypes = {
    id: PropTypes.number,
    pic: PropTypes.string,
    name: PropTypes.string,
};

//
function AddFriendAdd(props) {
    const { id, pic, name, children } = props;

    //
    return (
        <div className="AddFriendAdd position-rel">
            <Link to={`/profile/${id}`} className="normal-text">
                <div className="AddFriendAdd_pic">
                    <img src={pic} alt="" />
                </div>

                <div className="AddFriendAdd_name">{name}</div>
            </Link>

            <div className="AddFriendAdd_reply">{children}</div>
        </div>
    );
}

export default AddFriendAdd;
