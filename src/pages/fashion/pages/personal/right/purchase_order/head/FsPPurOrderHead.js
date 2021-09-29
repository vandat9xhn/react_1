import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './FsPPurOrderHead.scss';

//
FsPPurOrderHead.propTypes = {};

//
function FsPPurOrderHead({ order_id, order_status }) {
    //
    function handleBack() {
        history.back();
    }

    //
    return (
        <div className="FsPPurOrderHead border-bottom-blur">
            <div className="FsPPurOrderHead_row flex-between-center">
                <div
                    className="FsPPurOrderHead_back display-flex align-items-center cursor-pointer"
                    onClick={handleBack}
                >
                    <IconsArrow x={400} size_icon="16px" />

                    <span className="margin-left-5px text-upper text-third">
                        Trở lại
                    </span>
                </div>

                <div className="FsPPurOrderHead_order display-flex-center">
                    <div>ID ĐƠN HÀNG. {order_id}</div>

                    <div className="padding-x-15px">|</div>

                    <div className="color-fashion text-upper">
                        Đơn hàng {order_status}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FsPPurOrderHead;
