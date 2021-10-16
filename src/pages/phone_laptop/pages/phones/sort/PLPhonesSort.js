import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
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
            <div className="PLPhonesSort_row display-flex align-items-center">
                {IS_MOBILE ? null : (
                    <div className="PLPhonesSort_count font-700">
                        {count} Điện thoại
                    </div>
                )}

                <div className="PLPhonesSort_check font-12px">
                    <PLFilterCheck
                        filter_check_arr={filter_check_arr}
                        checkFilter={checkFilter}
                    />
                </div>

                <div className="PLPhonesSort_select flex-between-center margin-left-auto">
                    {IS_MOBILE ? (
                        <div className="font-700">
                            {count} Điện thoại
                        </div>
                    ) : null}

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
