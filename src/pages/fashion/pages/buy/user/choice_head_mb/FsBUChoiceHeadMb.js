import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './FsBUChoiceHeadMb.scss';

//
FsBUChoiceHeadMb.propTypes = {};

//
function FsBUChoiceHeadMb({ is_fixing, handleChoiceBack, toggleFixing }) {
    //
    return (
        <div className="FsBUChoiceHeadMb padding-10px">
            <div className="flex-between-center">
                <div className="display-flex align-items-center">
                    <div onClick={handleChoiceBack}>
                        <IconsArrow x={200} y={200} size_icon="2rem" />
                    </div>

                    <div className="margin-left-10px font-18px">
                        {is_fixing ? 'Chọn địa chỉ để sửa' : 'Địa chỉ của tôi'}
                    </div>
                </div>

                <div className="color-fashion" onClick={toggleFixing}>
                    {is_fixing ? 'Xong' : 'Sửa'}
                </div>
            </div>
        </div>
    );
}

export default FsBUChoiceHeadMb;
