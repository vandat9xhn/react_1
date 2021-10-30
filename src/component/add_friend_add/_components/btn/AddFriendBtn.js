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
            className={`AddFriendBtn display-flex-center w-100per brs-6px btn text-nowrap font-500 cursor-pointer ${className} ${
                disabled ? 'cursor-not-allowed' : 'btn-hv btn-active'
            }`}
            onClick={handleClick}
            // disabled={disabled}
        >
            {title}
        </button>
    );
}

export default AddFriendBtn;
