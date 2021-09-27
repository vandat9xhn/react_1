import React from 'react';
import PropTypes from 'prop-types';
//
import CheckBoxCustom from '../../../../../component/input/checkbox_custom/CheckBoxCustom';

//
PLCmtTotal.propTypes = {};

//
function PLCmtTotal({ count, tech_checked, handleCheckedTech }) {
    //
    return (
        <div className="PLCmtTotal text-cap">
            <div className="PLCmtTotal_row display-flex">
                <div className="PLCmtTotal_count margin-right-20px font-700 font-16px">
                    {count} bình luận
                </div>

                <div className="PLCmtTotal_tech">
                    <CheckBoxCustom
                        title="Xem Bình Luận Kỹ Thuật"
                        checked={tech_checked}
                        handleChangeChecked={handleCheckedTech}
                    />
                </div>
            </div>
        </div>
    );
}

export default PLCmtTotal;
