import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { API_FashionProduct_L } from '../../../../../api/api_django_no_token/fashion/APIFashionNoToken';
//
import observeToDo from '../../../../../_some_function/observerToDo';
//
import RowProducts from '../../../components/row_products/_main/RowProducts';
//
import './FashionRlt.scss';

//
FashionRlt.propTypes = {
    id: PropTypes.number,
};

FashionRlt.defaultProps = {};

//
function FashionRlt({ id }) {
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
        <div ref={ref_product_rlt} className="FashionRlt">
            <RowProducts
                list_products={[products]}
                link_to_more={`/fashion/same-product?id=${id}`}
                title_more="Xem tất cả"
            >
                <h2 className="padding-y-8px font-16px text-secondary label-field">
                    SẢN PHẨM TƯƠNG TỰ
                </h2>
            </RowProducts>
        </div>
    );
}

export default FashionRlt;
