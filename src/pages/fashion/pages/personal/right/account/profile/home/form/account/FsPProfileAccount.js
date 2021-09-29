import React from 'react';
import PropTypes from 'prop-types';

//
FsPProfileAccount.propTypes = {};

//
function FsPProfileAccount({ account }) {
    //
    return (
        <div className="FsPProfileAccount">
            <div className="fs-personal-profile-row display-flex">
                <div className="fs-personal-profile-label">Tên đăng nhập</div>

                <div className="text-555">{account}</div>
            </div>
        </div>
    );
}

export default FsPProfileAccount;
