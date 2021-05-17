import React from 'react';
import PropTypes from 'prop-types';
//
import IconsAction from '../../../../_icons_svg/icons_action/IconsAction';
import IconDiv from '../../../some_div/icon_div/IconDiv';

//
ActionReport.propTypes = {
    title: PropTypes.string,
    handleOpenReport: PropTypes.func,
};

ActionReport.defaultProps = {
    title: 'Report',
};

//
function ActionReport(props) {
    const { handleOpenReport, title } = props;
    //
    return (
        <div className="action-item" onClick={handleOpenReport} title="Report">
            <IconDiv Icon={IconsAction} x={400} y={400}>
                {title}
            </IconDiv>
        </div>
    );
}

export default ActionReport;
