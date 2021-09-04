import React from 'react';
import PropTypes from 'prop-types';

//
FsAddAddressType.propTypes = {
    chooseType: PropTypes.func,
};

//
function FsAddAddressType({ type, chooseType }) {
    //
    function chooseHome() {
        chooseType('home');
    }

    //
    function chooseOffice() {
        chooseType('office');
    }

    //
    return (
        <div className="FsAddAddressType">
            <div className="margin-bottom-5px text-secondary">Loại địa chỉ:</div>

            <div className="display-flex">
                <div
                    className={`margin-right-15px padding-x-12px padding-y-8px brs-2px text-cap text-nowrap ${
                        type == 'home'
                            ? 'bg-fashion-red text-white'
                            : 'border-blur cursor-pointer'
                    }`}
                    onClick={chooseHome}
                >
                    Nhà riêng
                </div>

                <div
                    className={`margin-right-15px padding-x-12px padding-y-8px brs-2px text-cap text-nowrap ${
                        type == 'office'
                            ? 'bg-fashion-red text-white'
                            : 'border-blur cursor-pointer'
                    }`}
                    onClick={chooseOffice}
                >
                    Văn phòng
                </div>
            </div>
        </div>
    );
}

export default FsAddAddressType;
