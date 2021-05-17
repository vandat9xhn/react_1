import React from 'react';
import PropTypes from 'prop-types';
//
import { IconsPermission } from '../../../../_groups_icon/permission/GroupIconPermission';
import IconDiv from '../../../some_div/icon_div/IconDiv';

//
ActionPermission.propTypes = {
    current_permission: PropTypes.number,
    title: PropTypes.string,
    handleOpenPermission: PropTypes.func,
};

ActionPermission.defaultProps = {
    current_permission: 0,
    title: 'Permission',
};

//
function ActionPermission(props) {
    const { current_permission, handleOpenPermission, title } = props;

    const {Icon, data_icon} = IconsPermission[current_permission]
    //
    return (
        <div
            className="action-item"
            onClick={handleOpenPermission}
            title="Permission"
        >
            <IconDiv Icon={Icon} {...data_icon}>
                {title}
            </IconDiv>
        </div>
    );
}

export default ActionPermission;
