import React from 'react';
import PropTypes from 'prop-types';
//
import FsRowSortItem from '../item/FsRowSortItem';
import FsRowSortPrice from '../price/FsRowSortPrice';
import FsRowSortPage from '../page/FsRowSortPage';

//
FsRowSort.propTypes = {};

//
function FsRowSort({
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
    return (
        <div className="FsRowSort padding-y-10px padding-x-20px bg-blur">
            <div className="FsRowSort_row display-flex align-items-center">
                <div>Sắp xếp theo</div>

                <div className="flex-grow-1 display-flex">
                    {sort_arr.map((name, ix) => (
                        <div key={ix} className="margin-left-10px">
                            <FsRowSortItem
                                name={name}
                                ix={ix}
                                is_active={sort_ix == ix}
                                handleSort={handleSort}
                            />
                        </div>
                    ))}

                    <div className="margin-left-10px">
                        <FsRowSortPrice
                            sort_price_arr={sort_price_arr}
                            sort_price_ix={sort_price_ix}
                            handleSortPrice={handleSortPrice}
                        />
                    </div>
                </div>

                <div>
                    <FsRowSortPage
                        page={page}
                        pages={pages}
                        is_fetching={is_fetching}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                    />
                </div>
            </div>
        </div>
    );
}

export default FsRowSort;
