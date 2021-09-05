import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import { API_FashionProduct_L } from '../../../../../api/api_django_no_token/fashion/APIFashionNoToken';
//
import RowProducts from '../../../components/row_products/_main/RowProducts';

//
FashionOtherItem.propTypes = {
    id: PropTypes.number,
};

FashionOtherItem.defaultProps = {};

//
function FashionOtherItem({ id }) {
    //
    async function getData_API_Product(c_count) {
        const res = await API_FashionProduct_L({
            page: 1,
            size: 20,
            type: 'other_shop_product',
            product_model: id,
            c_count: c_count,
        });

        return res.data;
    }

    //
    return (
        <div className={`FashionOtherItem ${IS_MOBILE ? 'bg-primary' : ''}`}>
            <RowProducts
                title={
                    <h2
                        className={`text-secondary font-500 ${
                            IS_MOBILE ? 'font-14px' : 'font-16px padding-y-8px'
                        }`}
                    >
                        CÁC SẢN PHẨM KHÁC CỦA SHOP
                    </h2>
                }
                handle_API_L={getData_API_Product}
                use_limit_count={true}
                limit_count={20}
                //
                use_more={IS_MOBILE}
                link_to_more={`/fashion/shop/${id}`}
                title_more="Xem tất cả"
            />
        </div>
    );
}

export default FashionOtherItem;
