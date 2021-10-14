import React from 'react';
import PropTypes from 'prop-types';
//
import CircleLoading from '../../../../../component/waiting/circle_loading/CircleLoading';
//
import './PLFilterConfirm.scss';

//
PLFilterConfirm.propTypes = {
    count: PropTypes.number,
    is_fetching: PropTypes.bool,
    handleFilter: PropTypes.func,
    clearFilter: PropTypes.func,
};

//
function PLFilterConfirm({
    filter_result_count,
    is_fetching,
    handleFilter,
    clearFilter,
}) {
    //
    return (
        <div className="PLFilterConfirm">
            <div className="PLFilterConfirm_row display-flex-center">
                <button
                    className="PLFilterConfirm_btn margin-right-10px padding-y-7px brs-3px border-current btn-active text-red cursor-pointer"
                    type="button"
                    onClick={clearFilter}
                >
                    Bỏ chọn
                </button>

                <button
                    className="PLFilterConfirm_btn btn btn-hv btn-active padding-y-7px brs-3px bg-blue text-white cursor-pointer"
                    type="button"
                    disabled={is_fetching}
                    onClick={handleFilter}
                >
                    {is_fetching ? (
                        <div className="width-fit-content margin-auto">
                            <CircleLoading
                                is_fetching={is_fetching}
                                size_icon="18px"
                            />
                        </div>
                    ) : (
                        <div>Xem {filter_result_count} kết quả</div>
                    )}
                </button>
            </div>
        </div>
    );
}

export default PLFilterConfirm;
