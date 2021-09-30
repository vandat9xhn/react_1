import React from 'react';
import { Link } from 'react-router-dom';
import { IS_MOBILE } from '../../../_constant/Constant';
import PropTypes from 'prop-types';
//
import './PLCompareActions.scss';

//
PLCompareActions.propTypes = {};

//
function PLCompareActions({ device_count, removeCompare, hideCompare }) {
    //
    return (
        <div className="PLCompareActions text-align-center">
            <Link
                className={`PLCompareActions_col display-block margin-auto w-50per padding-y-12px text-white ${
                    device_count >= 2 ? 'bg-blue' : 'bg-ccc pointer-events-none'
                }`}
                to="/phone-laptop/compare"
            >
                So sánh ngay
            </Link>

            <button
                className="PLCompareActions_col display-block margin-top-10px w-100per margin-auto border-none bg-transparent line-16px text-blue cursor-pointer"
                type="button"
                onClick={IS_MOBILE ? hideCompare : removeCompare}
            >
                {IS_MOBILE ? 'Thu gọn' : 'Xóa tất cả sản phẩm'}
            </button>
        </div>
    );
}

export default PLCompareActions;
