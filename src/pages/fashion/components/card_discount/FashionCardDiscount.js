import React from 'react';
import PropTypes from 'prop-types';
// 
import './FashionCardDiscount.scss';

//
FashionCardDiscount.propTypes = {
    title: PropTypes.string,
    expiry: PropTypes.string,
    handleSave: PropTypes.func,
};

//
function FashionCardDiscount({ title, expiry, handleSave }) {
    //
    return (
        <div className="FashionCardDiscount">
            <div className="display-flex align-items-center">
                <div>
                    <div>
                        <span className="font-14px">{title}</span>
                    </div>

                    <div>
                        <span className="font-12px text-third">
                            HSD: {expiry}
                        </span>
                    </div>
                </div>

                <div className="padding-x-8px display-flex-center">
                    <button
                        type="button"
                        className="FashionCardDiscount_btn btn btn-hv padding-x-4px cursor-pointer bg-fashion-red"
                        onClick={handleSave}
                    >
                        <div>
                            <span className="text-white label-field">Lưu</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FashionCardDiscount;
