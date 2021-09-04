import React from 'react';
import PropTypes from 'prop-types';
// 
import './FsAddAddressConfirm.scss';

//
FsAddAddressConfirm.propTypes = {};

//
function FsAddAddressConfirm({ has_change, handleBack, handleComplete }) {
    //
    return (
        <div className="FsAddAddressConfirm font-14px">
            <div className="display-flex justify-content-end">
                <button
                    type="button"
                    className="FsAddAddressConfirm_btn margin-right-10px padding-y-5px padding-x-10px brs-2px border-blur text-upper cursor-pointer hv-bg-blur"
                    onClick={handleBack}
                >
                    Trở lại
                </button>

                <button
                    type="button"
                    disabled={!has_change}
                    className={`FsAddAddressConfirm_btn padding-y-5px padding-x-10px brs-2px btn btn-hv bg-fashion-red text-upper text-white cursor-pointer ${
                        has_change ? '' : 'pointer-events-none opacity-05'
                    }`}
                    onClick={handleComplete}
                >
                    Hoàn thành
                </button>
            </div>
        </div>
    );
}

export default FsAddAddressConfirm;
