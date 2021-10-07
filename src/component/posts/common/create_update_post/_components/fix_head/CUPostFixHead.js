import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
// 
import './CUPostFixHead.scss';

//
CUPostFixHead.propTypes = {};

//
function CUPostFixHead({ title, handleBack }) {
    //
    return (
        <div className="CUPostFixHead pos-rel">
            <h2 className="cu-post-title">{title}</h2>

            <div
                className="CUPostFixHead_close cu-post-back cu-post-back-left"
                onClick={handleBack}
            >
                <IconsArrow x={200} y={200} size_icon="30px" />
            </div>
        </div>
    );
}

export default CUPostFixHead;
