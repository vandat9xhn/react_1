import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../_constant/Constant';
//
import IconCaret from '../../../../_icons_svg/_icon_caret/IconCaret';
import IconsArrow from '../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './SelectFullAddressCurrent.scss';

//
SelectFullAddressCurrent.propTypes = {};

function SelectFullAddressCurrent({
    province,
    district,
    commune,
    
    is_error,
    open_address,

    toggleOpenAddress,
    handleResetAddress,
}) {
    //
    function onResetAddress(e) {
        e.stopPropagation();

        handleResetAddress();
    }

    //
    return (
        <div
            className={`SelectFullAddressCurrent pos-rel padding-8px brs-5px cursor-pointer ${
                is_error && !open_address
                    ? 'SelectFullAddressCurrent-wrong'
                    : 'border-blur'
            } ${open_address ? 'SelectFullAddressCurrent-active' : ''}`}
            onClick={toggleOpenAddress}
        >
            {IS_MOBILE ? (
                <div>
                    <div>{province}</div>

                    <div>{district}</div>

                    <div>{commune}</div>
                </div>
            ) : (
                <div>
                    {province}, {district}, {commune}
                </div>
            )}

            <div
                className={`pos-abs y-center right-0 padding-right-5px ${
                    open_address ? '' : 'display-none'
                }`}
            >
                <div
                    className="SelectFullAddressCurrent_clear_icon brs-50 cursor-pointer"
                    onClick={onResetAddress}
                >
                    <IconsArrow y={400} size_icon="1rem" />
                </div>
            </div>

            <div
                className={`SelectFullAddressCurrent_placeholder pos-abs ${
                    province
                        ? 'SelectFullAddressCurrent_placeholder-on top-center line-12px font-12px text-secondary'
                        : 'SelectFullAddressCurrent_placeholder-in y-center font-14px'
                }`}
            >
                <div className="bg-primary padding-x-4px">
                    <span>
                        {IS_MOBILE
                            ? 'Địa chỉ'
                            : 'Tỉnh/Thành phố, Huyện/Quận, Xã/Phường'}
                    </span>

                    <div
                        className={`SelectFullAddressCurrent_icon inline-block margin-left-5px ${
                            open_address
                                ? 'SelectFullAddressCurrent_icon-show'
                                : ''
                        }`}
                    >
                        <IconCaret size_icon="0.5rem" fill="currentColor" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectFullAddressCurrent;
