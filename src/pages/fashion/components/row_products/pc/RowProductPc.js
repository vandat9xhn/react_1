import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { useMouseDragScrollToX } from '../../../../../_hooks/useMouseDragScrollToX';
//
import NextPrevDiv from '../../../../../component/some_div/next_prev_div/NextPrevDiv';
import ProductItem from '../../../../../component/products/product_item/ProductItem';
//
import './RowProductPc.scss';

//
RowProductPc.propTypes = {};

//
function RowProductPc({ products }) {
    //
    const ref_row_product = useRef(null);

    //
    const {
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
        is_mouse_down,

        handleScroll,

        is_has_next,
        is_has_prev,
        handleNext,
        handlePrev,
        hasNextPrev,
    } = useMouseDragScrollToX(ref_row_product);

    // 
    useEffect(() => {
        hasNextPrev()
    }, [products.length])

    //
    return (
        <div className="pos-rel">
            <div
                ref={ref_row_product}
                className="RowProductPc scroll-height-0 overflow-x-auto max-w-100per"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                // 
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onScroll={handleScroll}
            >
                <div className="RowProductPc_row display-flex">
                    {products.map((product, ix) => (
                        <div
                            key={`RowProductPc_item_${product.id || ix}`}
                            className={
                                is_mouse_down ? 'pointer-events-none' : ''
                            }
                        >
                            <ProductItem
                                link={`/fashion:${product.id}`}
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

export default RowProductPc;
