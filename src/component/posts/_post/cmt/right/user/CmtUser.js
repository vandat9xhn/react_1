import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//
CmtUser.propTypes = {};

//
function CmtUser({ user_name, user_id }) {
    // 
    function handleClick(e) {
        e.stopPropagation()
    }

    //
    return (
        <div className="CmtUser line-16px">
            <Link
                to={`/profile/${user_id}`}
                className="font-600 font-12px color-inherit"
                onClick={handleClick}
            >
                {user_name}
            </Link>
        </div>
    );
}

export default CmtUser;
