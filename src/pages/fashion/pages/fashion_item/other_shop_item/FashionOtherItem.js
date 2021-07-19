import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
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
        setProducts(Array(10).fill({ vid_pics: [{ vid_pic: '' }] }));

        setTimeout(() => {
            observeToDo(
                ref_product_rlt.current,
                () => getData_API_Product(id),
                0
            );
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
        <div ref={ref_product_rlt} className="FashionOtherItem">
            <RowProducts list_products={[products, products]}>
                <h2 className="margin-0 font-20px">Other products</h2>
            </RowProducts>
        </div>
    );
}

export default FashionOtherItem;
