import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import './PLCompareActions.scss';

//
PLCompareActions.propTypes = {};

//
function PLCompareActions({ device_count, removeCompare }) {
    //
    return (
        <div className="PLCompareActions text-align-center">
            <Link
                className={`display-block margin-auto w-50per padding-y-12px text-white ${
                    device_count >= 2 ? 'bg-blue' : 'bg-ccc pointer-events-none'
                }`}
                to="/phone-laptop/compare"
            >
                So sánh ngay
            </Link>

            <div className="margin-top-10px">
                <button
                    className="w-100per margin-auto border-none bg-transparent line-16px text-blue cursor-pointer"
                    type="button"
                    onClick={removeCompare}
                >
                    Xóa tất cả sản phẩm
                </button>
            </div>
        </div>
    );
}

export default PLCompareActions;
