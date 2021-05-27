import React from 'react';
import PropTypes from 'prop-types';
//
import PermissionEditDiv from '../../../../../../../../component/some_div/permission_edit_div/PermissionEditDiv';
import FlexDiv from '../../../../../../../../component/some_div/flex_div/FlexDiv';

//
AboutRowItem.propTypes = {
    Icon: PropTypes.element,
    title: PropTypes.string,
    permission: PropTypes.number,
    is_editing: PropTypes.bool,

    handleChoosePermission: PropTypes.func,
    toggleEdit: PropTypes.func,
};

//
function AboutRowItem(props) {
    const {
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
                className={`display-flex align-items-center flex-wrap ${
                    is_editing ? 'justify-content-end' : 'space-between'
                }`}
            >
                <div className={is_editing ? 'display-none' : ''}>
                    <FlexDiv ComponentLeft={Icon} ComponentRight={title} />
                </div>

                <div>
                    <PermissionEditDiv
                        permission={permission}
                        is_editing={is_editing}
                        handleChoosePermission={handleChoosePermission}
                        toggleEdit={toggleEdit}
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutRowItem;
