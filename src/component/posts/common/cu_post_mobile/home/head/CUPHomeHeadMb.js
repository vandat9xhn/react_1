import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './CUPHomeHeadMb.scss';

//
CUPHomeHeadMb.propTypes = {};

//
function CUPHomeHeadMb({ title, title_action, handleCUPost, handleClose }) {
    //
    return (
        <div className="CUPHomeHeadMb padding-x-15px padding-y-10px border-bottom-blur font-16px font-700">
            <div className="CUPHomeHeadMb_row flex-between-center">
                <div className="display-flex align-items-center">
                    <div
                        className="CUPHomeHeadMb_back display-flex-center padding-right-10px"
                        onClick={handleClose}
                    >
                        <IconsArrow x={200} y={200} />
                    </div>

                    <div>{title}</div>
                </div>

                <div className="text-blue" onClick={handleCUPost}>
                    {title_action}
                </div>
            </div>
        </div>
    );
}

export default CUPHomeHeadMb;
