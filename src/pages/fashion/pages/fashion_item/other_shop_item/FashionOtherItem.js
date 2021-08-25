import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import { API_FashionProduct_L } from '../../../../../api/api_django_no_token/fashion/APIFashionNoToken';
//
import observeToDo from '../../../../../_some_function/observerToDo';
//
import RowProducts from '../../../components/row_products/_main/RowProducts';
//
// import './FashionOtherItem.scss';

//
FashionOtherItem.propTypes = {
    id: PropTypes.number,
};

FashionOtherItem.defaultProps = {};

//
function FashionOtherItem({ id }) {
    //
    const [products, setProducts] = useState([]);

    //
    const ref_product_rlt = useRef(null);

    //
    useEffect(() => {
        setTimeout(() => {
            observeToDo({
                elm: ref_product_rlt.current,
                callback: () => getData_API_Product(id),
            });
        }, 0);
    }, [id]);

    //
    async function getData_API_Product() {
        const res = await API_FashionProduct_L({
            page: 1,
            size: 20,
            relative_id: id,
        });

        setProducts(res.data.data);
    }

    //
    return (
        <div
            ref={ref_product_rlt}
            className={`FashionOtherItem ${IS_MOBILE ? 'bg-primary' : ''}`}
        >
            <RowProducts
                list_products={[products]}
                link_to_more={`/fashion/shop/${id}`}
                title_more="Xem tất cả"
            >
                <h2
                    className={`text-secondary label-field ${
                        IS_MOBILE ? 'font-14px' : 'font-16px padding-y-8px'
                    }`}
                >
                    CÁC SẢN PHẨM KHÁC CỦA SHOP
                </h2>
            </RowProducts>
        </div>
    );
}

export default FashionOtherItem;
