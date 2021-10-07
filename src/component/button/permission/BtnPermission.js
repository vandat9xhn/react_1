import React from 'react';
import PropTypes from 'prop-types';
//
import IconCaret from '../../../_icons_svg/_icon_caret/IconCaret';
//
import PermissionDiv from '../../some_div/permission_div/PermissionDiv';
// 
import './BtnPermission.scss';

//
BtnPermission.propTypes = {};

//
function BtnPermission({ permission, show_title, openPermission }) {
    //
    return (
        <button
            className="BtnPermission btn btn-hv padding-x-8px padding-y-3px brs-4px bg-blur line-16px font-13px font-600 cursor-pointer"
            type="button"
            onClick={openPermission}
        >
            <div className="display-flex-center">
                <PermissionDiv
                    permission={permission}
                    show_title={show_title}
                />

                <div className="margin-left-5px">
                    <IconCaret size_icon="11px" fill="var(--color-333)" />
                </div>
            </div>
        </button>
    );
}

export default BtnPermission;
