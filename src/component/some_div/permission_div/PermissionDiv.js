import React from 'react';
import PropTypes from 'prop-types';
//
import { IconsPermission } from '../../../_groups_icon/permission/GroupIconPermission';
//
import './PermissionDiv.scss';

//
PermissionDiv.propTypes = {
    permission: PropTypes.number,
    show_title: PropTypes.bool,
};

PermissionDiv.defaultProps = {
    permission: 0,
    show_title: false,
};

//
function PermissionDiv({ permission, show_title }) {
    //
    return (
        <div className={`PermissionDiv padding-8px cursor-pointer hv-bg-blur ${
            show_title ? 'brs-5px' : 'brs-50'
        }`}>
            <div className="display-flex align-items-center">
                <div className="PermissionDiv_left display-flex-center">
                    {IconsPermission[permission].Icon}
                </div>

                <div className={show_title ? 'PermissionDiv_right' : 'display-none'}>
                    {IconsPermission[permission].title}
                </div>
            </div>
        </div>
    );
}

export default PermissionDiv;
