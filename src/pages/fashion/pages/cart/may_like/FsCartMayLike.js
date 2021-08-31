import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
// 
import { API_FashionProduct_L } from '../../../../../api/api_django_no_token/fashion/APIFashionNoToken';
// 
import RowProducts from '../../../components/row_products/_main/RowProducts';

//
FsCartMayLike.propTypes = {};

//
function FsCartMayLike(props) {
    //
    async function getData_API_Product(c_count) {
        const res = await API_FashionProduct_L({
            page: 1,
            size: 20,
            type: 'cart_may_like',
            c_count: c_count,
        });

        return res.data;
    }

    //
    return (
        <div className="FsCartMayLike">
            <RowProducts
                title={
                    <h2
                        className={`text-secondary label-field text-upper ${
                            IS_MOBILE ? 'font-14px' : 'font-16px padding-y-8px'
                        }`}
                    >
                        Có thể bạn cũng thích
                    </h2>
                }
                handle_API_L={getData_API_Product}
                use_limit_count={true}
                limit_count={20}
                //
                use_more={false}
                // link_to_more={`/fashion/same-product?id=${id}`}
                // title_more="Xem tất cả"
            />
        </div>
    );
}

export default FsCartMayLike;
