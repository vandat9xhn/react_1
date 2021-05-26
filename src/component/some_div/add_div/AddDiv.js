import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../_icons_svg/icons_arrow/IconsArrow';
//
import IconDiv from '../icon_div/IconDiv';
//
import './AddDiv.scss';

//
AddDiv.propTypes = {
    children: PropTypes.any,
    onClick: PropTypes.func,
};

//
function AddDiv({ children, onClick }) {
    return (
        <div className="AddDiv cursor-pointer label-field" onClick={onClick}>
            <IconDiv Icon={IconsArrow} y={400} size_icon="1rem">
                {children}
            </IconDiv>
        </div>
    );
}

export default AddDiv;
