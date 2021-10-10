import React from 'react';
import PropTypes from 'prop-types';
//
import IconsInput from '../../../../../../_icons_svg/Icons_input/IconsInput';
//
import './CUPTagSearchMb.scss';

//
CUPTagSearchMb.propTypes = {};

//
function CUPTagSearchMb({ value, handleChange }) {
    //
    return (
        <div className="CUPTagSearchMb padding-10px">
            <div className="display-flex align-items-center">
                <input
                    className="CUPTagSearchMb_input flex-grow-1 margin-right-10px padding-y-5px padding-x-10px border-blur outline-none"
                    type="text"
                    value={value}
                    placeholder="Search friends..."
                    onChange={handleChange}
                />

                <IconsInput y={200} size_icon="18px" />
            </div>
        </div>
    );
}

export default CUPTagSearchMb;
