import React from 'react';
import PropTypes from 'prop-types';
//
import ProductItem from '../../../../component/products/product_item/ProductItem';
//
import './RowProducts.scss';

//
RowProducts.propTypes = {
    list_products: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.shape({
                vid_pics: PropTypes.arrayOf(
                    PropTypes.shape({
                        vid_pic: PropTypes.string,
                    })
                ),
            })
        )
    ),
    children: PropTypes.element,
};

RowProducts.defaultProps = {
    list_products: [
        {
            products: [
                {
                    vid_pics: [
                        {
                            vid_pic: '',
                        },
                    ],
                },
            ],
        },
    ],
    children: <div></div>,
};

//
function RowProducts(props) {
    const { list_products, children } = props;

    //
    return (
        <div className="RowProducts">
            <div className="RowProducts_title label-field">{children}</div>

            <div>
                {list_products.map((products, list_ix) => (
                    <div
                        key={`RowProducts_list_${list_ix}`}
                        className="RowProducts_products"
                    >
                        <div className="RowProducts_row display-flex">
                            {products.map((product, ix) => (
                                <div key={`RowProducts_${ix}`}>
                                    <ProductItem
                                        link={`/fashion:${product.id}`}
                                        img_or_dataset={ix < 5}
                                        img={product.vid_pics[0].vid_pic}
                                        name={product.name}
                                        new_price={8000000}
                                        old_price={8500000}
                                        discount={6}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RowProducts;
