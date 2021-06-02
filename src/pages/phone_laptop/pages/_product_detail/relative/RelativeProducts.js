import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { API_PhoneLaptop_L } from '../../../../../api/api_django_no_token/phone_laptop/PhoneLaptopAPI';
// 
import observeToDo from '../../../../../_some_function/observerToDo';
// 
import ProductItem from '../../../../../component/products/product_item/ProductItem';
//
import './RelativeProducts.scss';

//
RelativeProducts.propTypes = {
    product_id: PropTypes.number,
};

//
function RelativeProducts({ product_id }) {
    //
    const [relative_state, setRelativeState] = useState({
        products: [],
        has_fetched: false,
    });

    const { products, has_fetched } = relative_state;

    //
    const ref_relative = useRef(null);

    //
    useEffect(() => {
        observeToDo(ref_relative.current, getData_API_Relative, 0);
    }, [product_id]);

    //
    async function getData_API_Relative() {
        setRelativeState({
            products: [],
            has_fetched: false,
        });

        const res = await API_PhoneLaptop_L({
            pk: product_id,
            page: 1,
            size: 10,
        });

        setRelativeState({
            products: res.data.data,
            has_fetched: true,
        });
    }

    //
    return (
        <div
            ref={ref_relative}
            className="RelativeProducts brs-5px padding-8px"
        >
            <h2>Relative</h2>

            <div className="RelativeProducts_row display-flex justify-content-center flex-wrap">
                {(has_fetched ? products : Array(5).fill(1)).map(
                    (item, index) => (
                        <div
                            key={`RelativeProducts_item_${index}`}
                            className="RelativeProducts_col"
                        >
                            <ProductItem
                                link={'/phone-laptop:' + item.id}
                                img={item.url}
                                name={item.name}
                                in_stock={item.in_stock}
                                new_price={item.new_price}
                                old_price={item.old_price}
                                discount={item.discount}
                                installment={item.installment}
                            />
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default RelativeProducts;
