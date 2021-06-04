import React from 'react';
import PropTypes from 'prop-types';
// 
import PermissionEditDiv from '../../../../../../../../component/some_div/permission_edit_div/PermissionEditDiv';
import FlexDiv from '../../../../../../../../component/some_div/flex_div/FlexDiv';
//
import './AboutRowItem.scss';

//
AboutRowItem.propTypes = {
    is_user: PropTypes.bool,
    Icon: PropTypes.element,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    permission: PropTypes.number,
    is_editing: PropTypes.bool,

    handleChoosePermission: PropTypes.func,
    toggleEdit: PropTypes.func,
};

//
function AboutRowItem(props) {
    // 
    const {
        is_user,
        Icon,
        title,

        permission,
        is_editing,
        handleChoosePermission,
        toggleEdit,
    } = props;

    //
    return (
        <div>
            <div
                className={`AboutRowItem_left display-flex ${
                    is_editing ? 'justify-content-end' : 'space-between'
                }`}
            >
                <div className={is_editing ? 'display-none' : 'flex-grow-1'}>
                    <FlexDiv
                        align_center={false}
                        ComponentLeft={Icon}
                        ComponentRight={title}
                    />
                </div>

                {is_user && (
                    <div className="AboutRowItem_right">
                        <PermissionEditDiv
                            permission={permission}
                            is_editing={is_editing}
                            handleChoosePermission={handleChoosePermission}
                            toggleEdit={toggleEdit}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default AboutRowItem;
