import React from 'react';
import PropTypes from 'prop-types';
//
import IconsAction from '../../../../_icons_svg/icons_action/IconsAction';
import IconDiv from '../../../some_div/icon_div/IconDiv';

//
ActionDelete.propTypes = {
    title: PropTypes.string,
    handleDelete: PropTypes.func,
};

ActionDelete.defaultProps = {
    title: 'Delete',
};

//
function ActionDelete({ handleDelete, title }) {
    //
    return (
        <div className="action-item" onClick={handleDelete} title="Delete">
            <IconDiv Icon={IconsAction}>{title}</IconDiv>
        </div>
    );
}

export default ActionDelete;
