import React from 'react';
import PropTypes from 'prop-types';
//
import IconsAction from '../../../../_icons_svg/icons_action/IconsAction';
import IconDiv from '../../../some_div/icon_div/IconDiv';

//
ActionHistory.propTypes = {
    title: PropTypes.string,
    handleOpenHistory: PropTypes.func,
};

ActionHistory.defaultProps = {
    title: 'History',
};

//
function ActionHistory(props) {
    const { handleOpenHistory, title } = props;
    //
    return (
        <div className="action-item" onClick={handleOpenHistory} title="History">
            <IconDiv Icon={IconsAction} y={400}>
                {title}
            </IconDiv>
        </div>
    );
}

export default ActionHistory;
