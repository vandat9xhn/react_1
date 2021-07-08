import React from 'react';
import PropTypes from 'prop-types';
//
import IconDiv from '../../../some_div/icon_div/IconDiv';
import IconUpdate from '../../../../_icons_svg/icon_update/IconUpdate';

//
ActionUpdate.propTypes = {
    title: PropTypes.string,
    handleUpdate: PropTypes.func,
};

ActionUpdate.defaultProps = {
    title: 'Update',
};

//
function ActionUpdate({ handleUpdate, title }) {
    //
    return (
        <div className="action-item" onClick={handleUpdate} title="Update">
            <IconDiv Icon={IconUpdate} size_icon="0.85rem">
                {title}
            </IconDiv>
        </div>
    );
}

export default ActionUpdate;
