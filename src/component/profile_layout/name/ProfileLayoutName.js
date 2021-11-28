import React from 'react';
import PropTypes from 'prop-types';
//
import './ProfileLayoutName.scss';

//
ProfileLayoutName.propTypes = {};

//
function ProfileLayoutName({ name, nick_name }) {
    //
    return (
        <div className="ProfileLayoutName">
            <h1 className="ProfileLayoutName_name">
                {name}
                {nick_name ? (
                    <span className="ProfileLayoutName_nick margin-left-8px font-400">
                        ({nick_name})
                    </span>
                ) : null}
            </h1>
        </div>
    );
}

export default ProfileLayoutName;
