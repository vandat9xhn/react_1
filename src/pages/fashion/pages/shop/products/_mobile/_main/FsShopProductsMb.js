import React from 'react';
import PropTypes from 'prop-types';
//
import FsSProductsListMb from '../list/FsSProductsListMb';
import FsRowSortMb from '../../../../../components/row_sort_mb/_main/FsRowSortMb';

//
FsShopProductsMb.propTypes = {};

//
function FsShopProductsMb({
    product_arr,
    sort_arr,
    sort_ix,
    sort_price_ix,
    
    handleSort,
    handleSortPrice,
}) {
    // 
    return (
        <div className="FsShopProductsMb">
            <div className="margin-bottom-5px">
                <FsRowSortMb
                    sort_arr={sort_arr}
                    sort_ix={sort_ix}
                    sort_price_ix={sort_price_ix}
                    handleSort={handleSort}
                    handleSortPrice={handleSortPrice}
                />
            </div>

            <div>
                <FsSProductsListMb product_arr={product_arr} />
            </div>
        </div>
    );
}

export default FsShopProductsMb;
