import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
//
import FsRowSort from '../../../../components/row_sort/_main/FsRowSort';

//
FsSearchSort.propTypes = {
    ...FsRowSort.propTypes,
};

//
function FsSearchSort({
    sort_arr,
    sort_price_arr,
    sort_ix,
    sort_price_ix,

    page,
    pages,
    is_fetching,

    handleSort,
    handleSortPrice,
    handleNext,
    handlePrev,
}) {
    //
    return IS_MOBILE ? null : (
        <FsRowSort
            sort_arr={sort_arr}
            sort_price_arr={sort_price_arr}
            sort_ix={sort_ix}
            sort_price_ix={sort_price_ix}
            //
            page={page}
            pages={pages}
            is_fetching={is_fetching}
            //
            handleSort={handleSort}
            handleSortPrice={handleSortPrice}
            handleNext={handleNext}
            handlePrev={handlePrev}
        />
    );
}

export default FsSearchSort;
