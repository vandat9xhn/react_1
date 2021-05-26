import React from 'react';
import PropTypes from 'prop-types';
//
import { IconsPermission } from '../../../../_groups_icon/permission/GroupIconPermission';
// 
import FlexDiv from '../../../some_div/flex_div/FlexDiv';

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

    //
    return (
        <div
            className="action-item"
            onClick={handleOpenPermission}
            title="Permission"
        >
            <FlexDiv
                ComponentLeft={IconsPermission[current_permission].Icon}
                ComponentRight={<div>{title}</div>}
            />
        </div>
    );
}

export default ActionPermission;
