import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import './AddFriendAdd.scss';

//
AddFriendAdd.propTypes = {
    id: PropTypes.number,
    pic: PropTypes.string,
    name: PropTypes.string,
};

//
function AddFriendAdd({ id, pic, name, children }) {
    //
    return (
        <div className="AddFriendAdd pos-rel">
            <Link to={`/profile/${id}`} className="normal-text">
                <div className="AddFriendAdd_pic">
                    <img className="object-fit-cover" src={pic} alt="" />
                </div>

                <div className="AddFriendAdd_name font-500">{name}</div>
            </Link>

            <div className="AddFriendAdd_reply">{children}</div>
        </div>
    );
}

export default AddFriendAdd;
