import React from 'react';
import PropTypes from 'prop-types';
//
import RowProduct from '../item/RowProduct';
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
        <div className="RowProducts padding-8px">
            <div className="RowProducts_title label-field">{children}</div>

            <div>
                {list_products.map((products, list_ix) => (
                    <div
                        key={`RowProducts_list_${list_ix}`}
                        className="RowProducts_products"
                    >
                        <RowProduct products={products} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RowProducts;
