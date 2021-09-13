import React from 'react';
import PropTypes from 'prop-types';
//
import Pagination from '../../../../../../../component/pagination/_main/Pagination';
//
import FsRowSort from '../../../../../components/row_sort/_main/FsRowSort';
import FsShopCategory from '../category/_main/FsShopCategory';
import FsSProductsList from '../list/FsSProductsList';

//
FsShopProductsPc.propTypes = {};

//
function FsShopProductsPc({
    category_arr,
    category_id,

    sort_arr,
    sort_ix,
    sort_price_arr,
    sort_price_ix,

    product_arr,
    is_fetching,

    page,
    pages,

    handleChangeCategory,
    handleSort,
    handleSortPrice,

    handleNext,
    handlePrev,
    handleChangePage,
}) {
    return (
        <div className="FsShopProductsPc">
            <div className="display-flex">
                <div className="margin-right-20px">
                    <FsShopCategory
                        category_arr={category_arr}
                        category_id={category_id}
                        handleChange={handleChangeCategory}
                    />
                </div>

                <div>
                    <div className="margin-bottom-15px">
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
                    </div>

                    <div className="margin-bottom-15px">
                        <FsSProductsList product_arr={product_arr} />
                    </div>

                    <div>
                        <Pagination
                            current={page}
                            count={pages}
                            num_side_center={2}
                            is_fetching={is_fetching}
                            handleChangePage={handleChangePage}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FsShopProductsPc;
