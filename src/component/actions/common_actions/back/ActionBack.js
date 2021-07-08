import React from 'react';
import PropTypes from 'prop-types';
//
import IconDiv from '../../../some_div/icon_div/IconDiv';
import IconsArrow from '../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './ActionBack.scss';

//
ActionBack.propTypes = {
    title: PropTypes.string,
};

ActionBack.defaultProps = {
    title: 'Back',
};

//
function ActionBack({ title }) {
    //
    return (
        <div className="ActionBack action-item" title="Back">
            <IconDiv Icon={IconsArrow} x={200} y={200}>
                {title}
            </IconDiv>
        </div>
    );
}

export default ActionBack;
