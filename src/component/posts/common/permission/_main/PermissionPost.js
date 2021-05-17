import React from 'react';
import PropTypes from 'prop-types';
//
import UnitTime from '../../../../../_some_function/UnitTime';
import { IconsPermission } from '../../../../../_groups_icon/permission/GroupIconPermission';
//
import './PermissionPost.scss';

//
PermissionPost.propTypes = {
    permission_post: PropTypes.number,
    updated_time: PropTypes.string,
};

PermissionPost.defaultProps = {
    permission_post: 0,
}

//
function PermissionPost(props) {
    const { permission_post, updated_time } = props;

    const {Icon, data_icon} = IconsPermission[permission_post || 0]
    //
    return (
        <div className="PermissionPost font-italic">
            <span
                className="PermissionPost_time"
                title={new Date(updated_time).toLocaleString()}
            >
                {UnitTime(
                    new Date().getTime() - new Date(updated_time).getTime()
                )}
            </span>

            <span className="PermissionPost_delimiter">*</span>

            <span className="PermissionPost_permission">
                <Icon {...data_icon}/>
            </span>
        </div>
    );
}

export default PermissionPost;
