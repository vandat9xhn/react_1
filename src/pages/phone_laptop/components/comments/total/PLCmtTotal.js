import React from 'react';
import PropTypes from 'prop-types';
//
import CheckBoxCustom from '../../../../../component/input/checkbox_custom/CheckBoxCustom';
import { Link } from 'react-router-dom';
import { IS_MOBILE } from '../../../../../_constant/Constant';

//
PLCmtTotal.propTypes = {};

//
function PLCmtTotal({ count, tech_checked, handleCheckedTech }) {
    //
    return (
        <div className="PLCmtTotal text-cap">
            <div className="PLCmtTotal_row display-flex">
                <div className="PLCmtTotal_count margin-right-20px font-700 font-16px">
                    <div>{count} bình luận</div>

                    {IS_MOBILE ? (
                        <div className="line-12px">
                            <Link
                                className="font-12px"
                                to="/phone-laptop/comment-guide"
                            >
                                Quy định đăng bình luận
                            </Link>
                        </div>
                    ) : null}
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
