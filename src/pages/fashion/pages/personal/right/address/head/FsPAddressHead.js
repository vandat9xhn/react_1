import React from 'react';
import PropTypes from 'prop-types';
//
import IconPlusSubtract from '../../../../../../../_icons_svg/_icon_plus_subtract/IconPlusSubtract';
//
import './FsPAddressHead.scss';

//
FsPAddressHead.propTypes = {};

//
function FsPAddressHead({ openAddNewAddress }) {
    //
    return (
        <div className="FsPAddressHead padding-y-20px">
            <div className="FsPAddressHead_row flex-between-center">
                <div className="font-18px font-500">Địa chỉ của tôi</div>

                <div>
                    <button
                        className="inline-flex align-items-center btn btn-active btn-hv padding-x-15px padding-y-12px brs-3px bg-fashion-red line-16px text-white text-cap font-14px font-400 cursor-pointer"
                        type="button"
                        onClick={openAddNewAddress}
                    >
                        <IconPlusSubtract
                            size_icon="16px"
                            stroke="currentColor"
                        />

                        <span className="margin-left-8px">
                            Thêm địa chỉ mới
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FsPAddressHead;
