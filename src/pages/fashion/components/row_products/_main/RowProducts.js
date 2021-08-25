import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import RowProductPc from '../pc/RowProductPc';
import RowProductMobile from '../mobile/RowProductMobile';
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
function RowProducts({
    list_products,

    link_to_more,
    title_more,
    class_color_more,

    children,
}) {
    //
    return (
        <div className="RowProducts padding-8px">
            <div className="RowProducts_title label-field">{children}</div>

            <div>
                {list_products.map((products, list_ix) => (
                    <div key={`${list_ix}`} className="RowProducts_products">
                        {products.length ? (
                            IS_MOBILE ? (
                                <RowProductMobile
                                    products={products}
                                    link_to_more={link_to_more}
                                    title_more={title_more}
                                    class_color_more={class_color_more}
                                />
                            ) : (
                                <RowProductPc products={products} />
                            )
                        ) : (
                            <div className="RowProducts_not_fetched"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RowProducts;
