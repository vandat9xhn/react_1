import React from 'react';
import PropTypes from 'prop-types';

//
PLFilterConfirm.propTypes = {
    count_product: PropTypes.number,
    handleFilter: PropTypes.func,
    clearFilter: PropTypes.func,
};

//
function PLFilterConfirm({ count_product, handleFilter, clearFilter }) {
    //
    return (
        <div className="PLFilterConfirm">
            <div className="PLFilterConfirm_row flex-end align-items-center">
                <button
                    className="border-blur padding-x-8px padding-y-4px brs-3px btn-active hv-bg-hv cursor-pointer"
                    type="button"
                    onClick={clearFilter}
                >
                    Bỏ chọn
                </button>

                <button
                    className="btn btn-hv btn-active padding-x-8px padding-y-4px brs-3px bg-blue text-white cursor-pointer"
                    type="button"
                    onClick={handleFilter}
                >
                    Xem kết quả
                </button>

                <div>{count_product} sản phẩm</div>
            </div>
        </div>
    );
}

export default PLFilterConfirm;
