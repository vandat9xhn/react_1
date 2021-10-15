import React from 'react';
import PropTypes from 'prop-types';
//
import PLFilterCheck from '../../../components/filter_check/_main/PLFilterCheck';
import PLSortSelect from '../../../components/sort_select/_main/PLSortSelect';
// 
import './PLPhonesSort.scss';

//
PLPhonesSort.propTypes = {};

//
function PLPhonesSort({
    count,
    filter_check_arr,
    sort_arr,
    sort_ix,

    checkFilter,
    selectSort,
}) {
    //
    return (
        <div className="PLPhonesSort">
            <div className="flex-between-center">
                <div className="display-flex align-items-center">
                    <div className="PLPhonesSort_count font-700">
                        {count} Điện thoại
                    </div>

                    <div className="margin-left-20px font-12px">
                        <PLFilterCheck
                            filter_check_arr={filter_check_arr}
                            checkFilter={checkFilter}
                        />
                    </div>
                </div>

                <div>
                    <PLSortSelect
                        sort_arr={sort_arr}
                        sort_ix={sort_ix}
                        selectSort={selectSort}
                    />
                </div>
            </div>
        </div>
    );
}

export default PLPhonesSort;
