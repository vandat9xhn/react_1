import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_fashion_item } from '../../../../../../../../_context/fashion/item/context_fashion_item';
//
import FsIRateFilterItem from '../item/FsIRateFilterItem';
//
import './FsIRateFilters.scss';

//
FsIRateFilters.propTypes = {
    filter_ix: PropTypes.number,
    handleFilterRate: PropTypes.func,
};

//
function FsIRateFilters({ filter_ix, handleFilterRate }) {
    //
    const { item_info } = useContext(context_fashion_item);

    const { rate_arr } = item_info;

    //
    function onFilterRateAll() {
        handleFilterRate(0);
    }

    //
    function onFilterRateHasCmt() {
        handleFilterRate(6);
    }

    //
    function onFilterRateHasPic() {
        handleFilterRate(7);
    }

    //
    return (
        <div className="FsIRateFilters">
            <div className="display-flex flex-wrap">
                <div
                    className={`FsIRateFilters_item cursor-pointer ${
                        filter_ix == 0
                            ? 'FsIRateFilters_item-active'
                            : 'FsIRateFilters_item-inactive'
                    }`}
                    onClick={onFilterRateAll}
                >
                    Tất cả
                </div>

                {rate_arr.slice(0, 5).map((rate_count, ix) => (
                    <div
                        key={ix}
                        className={`FsIRateFilters_item cursor-pointer ${
                            filter_ix == ix + 1
                                ? 'FsIRateFilters_item-active'
                                : 'FsIRateFilters_item-inactive'
                        }`}
                    >
                        <FsIRateFilterItem
                            ix={ix + 1}
                            count={rate_count}
                            handleClick={handleFilterRate}
                        />
                    </div>
                ))}
            </div>

            <div className="display-flex flex-wrap">
                <div
                    onClick={onFilterRateHasCmt}
                    className={`FsIRateFilters_item cursor-pointer ${
                        filter_ix == 6
                            ? 'FsIRateFilters_item-active'
                            : 'FsIRateFilters_item-inactive'
                    }`}
                >
                    Có Bình luận ({rate_arr[5]})
                </div>

                <div
                    onClick={onFilterRateHasPic}
                    className={`FsIRateFilters_item cursor-pointer ${
                        filter_ix == 7
                            ? 'FsIRateFilters_item-active'
                            : 'FsIRateFilters_item-inactive'
                    }`}
                >
                    Có hình ảnh / video ({rate_arr[6]})
                </div>
            </div>
        </div>
    );
}

export default FsIRateFilters;
