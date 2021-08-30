import React from 'react';
import PropTypes from 'prop-types';
//
import './FashionCardDiscount.scss';

//
FashionCardDiscount.propTypes = {
    title: PropTypes.string,
    expiry: PropTypes.string,
    status_card: PropTypes.string,

    disabled: PropTypes.bool,
    is_applied: PropTypes.bool,

    handleSave: PropTypes.func,
};

FashionCardDiscount.defaultProps = {
    status_card: 'available',
    disabled: false,
    is_applied: false,
};

//
function FashionCardDiscount({
    title,
    expiry,
    status_card,

    is_applied,
    disabled,

    handleSave,
}) {
    //
    return (
        <div className="FashionCardDiscount pos-rel h-100per">
            <div className="FashionCardDiscount_row display-flex align-items-center h-100per">
                <div className="FashionCardDiscount_left">
                    <div className="FashionCardDiscount_title font-14px">
                        <span>{title}</span>
                    </div>

                    <div className="FashionCardDiscount_expiry font-12px text-third">
                        <span>HSD: {expiry}</span>
                    </div>
                </div>

                <div className="FashionCardDiscount_right padding-x-8px display-flex-center">
                    {is_applied ? null : (
                        <button
                            type="button"
                            className={`FashionCardDiscount_btn display-flex-center padding-x-4px cursor-pointer ${
                                disabled
                                    ? 'pointer-events-none opacity-05 border-1px border-solid border-cl-blur text-secondary'
                                    : 'bg-fashion-red text-white btn btn-hv'
                            }`}
                            onClick={handleSave}
                            disabled={disabled}
                        >
                            <div className="label-field">
                                <span>
                                    {status_card == 'available'
                                        ? 'Lưu'
                                        : 'Áp dụng'}
                                </span>
                            </div>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FashionCardDiscount;
