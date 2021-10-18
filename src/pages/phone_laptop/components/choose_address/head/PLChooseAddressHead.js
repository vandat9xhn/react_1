import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
// 
import './PLChooseAddressHead.scss';

//
PLChooseAddressHead.propTypes = {
    handleClose: PropTypes.func,
};

//
function PLChooseAddressHead({ handleClose }) {
    //
    return (
        <div className="PLChooseAddressHead display-flex-center pos-rel">
            <div className="font-600">
                Chọn địa chỉ nhận hàng
            </div>

            <div className="pos-abs right-0 y-center padding-right-10px">
                <button
                    className="display-flex-center border-blur btn-hv btn-active padding-4px brs-4px cursor-pointer"
                    type="button"
                    onClick={handleClose}
                >
                    <IconsArrow y={400} size_icon="15px" />

                    <span className="margin-left-5px">Đóng</span>
                </button>
            </div>
        </div>
    );
}

export default PLChooseAddressHead;
