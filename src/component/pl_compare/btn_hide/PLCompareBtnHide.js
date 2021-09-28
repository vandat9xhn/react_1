import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../_icons_svg/icons_arrow/IconsArrow';

//
PLCompareBtnHide.propTypes = {};

//
function PLCompareBtnHide({ hideCompare }) {
    //
    return (
        <div className="PLCompareBtnHide pos-abs right-0 bottom-100per">
            <div
                className="display-flex align-items-center padding-5px brs-4px bg-primary box-shadow-1 cursor-pointer"
                onClick={hideCompare}
            >
                <div className="margin-right-5px">Thu gọn</div>

                <div className="rotate-90">
                    <IconsArrow x={200} size_icon="14px" />
                </div>
            </div>
        </div>
    );
}

export default PLCompareBtnHide;
