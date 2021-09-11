import React from 'react';
import PropTypes from 'prop-types';
//
import FsSProductsSortMb from '../sort/_main/FsSProductsSortMb';
import FsSProductsListMb from '../list/FsSProductsListMb';

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
                <FsSProductsSortMb
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
