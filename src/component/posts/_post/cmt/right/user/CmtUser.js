import React from 'react';
import PropTypes from 'prop-types';

//
CmtUser.propTypes = {};

//
function CmtUser({ user_name }) {
    //
    return (
        <div className="CmtUser line-16px">
            <span className="font-700 font-12px">{user_name}</span>
        </div>
    );
}

export default CmtUser;
