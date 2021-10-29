import React from 'react';
import PropTypes from 'prop-types';
//
import './AddFriendBtn.scss';

//
AddFriendBtn.propTypes = {};

//
function AddFriendBtn({ title, className, disabled, handleClick }) {
    //
    return (
        <button
            className={`AddFriendBtn display-flex-center w-100per brs-6px btn btn-hv btn-active font-500 cursor-pointer ${className}`}
            onClick={handleClick}
            disabled={disabled}
        >
            {title}
        </button>
    );
}

export default AddFriendBtn;
