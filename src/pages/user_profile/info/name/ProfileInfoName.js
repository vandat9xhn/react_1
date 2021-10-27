import React from 'react';
import PropTypes from 'prop-types';
//
import './ProfileInfoName.scss';

//
ProfileInfoName.propTypes = {};

//
function ProfileInfoName({ name, nick_name }) {
    //
    return (
        <div className="ProfileInfoName">
            <h1 className="ProfileInfoName_name">
                {name}
                {nick_name ? (
                    <span className="ProfileInfoName_nick margin-left-8px font-400">
                        ({nick_name})
                    </span>
                ) : null}
            </h1>
        </div>
    );
}

export default ProfileInfoName;
