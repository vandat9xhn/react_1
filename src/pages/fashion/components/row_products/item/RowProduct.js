import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import { useMouseDragScrollToX } from '../../../../../_custom_hooks/useMouseDragScrollToX';
//
import NextPrevDiv from '../../../../../component/some_div/next_prev_div/NextPrevDiv';
import ProductItem from '../../../../../component/products/product_item/ProductItem';
//
import './RowProduct.scss';

//
RowProduct.propTypes = {};

//
function RowProduct({ products }) {
    //
    const ref_row_product = useRef(null);

    //
    const {
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
        is_mouse_down,

        is_has_next,
        is_has_prev,
        handleNext,
        handlePrev,
    } = useMouseDragScrollToX(ref_row_product.current);

    //
    return (
        <div className="position-rel">
            <div
                ref={ref_row_product}
                className="RowProduct scroll-x-none"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                // 
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchEnd={handleMouseUp}
            >
                <div className="RowProduct_row display-flex">
                    {products.map((product, ix) => (
                        <div
                            key={`RowProduct_item_${product.id || ix}`}
                            className={
                                is_mouse_down ? 'pointer-events-none' : ''
                            }
                        >
                            <ProductItem
                                link={`/fashion:${product.id}`}
                                img_or_dataset={ix < 5}
                                img={product.vid_pics[0].vid_pic}
                                name={product.name}
                                new_price={product.new_price}
                                old_price={product.old_price}
                                discount={product.discount}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <NextPrevDiv
                is_btn_circle={true}
                is_has_next={is_has_next}
                is_has_prev={is_has_prev}
                handleNext={handleNext}
                handlePrev={handlePrev}
            />
        </div>
    );
}

export default RowProduct;
