import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// 
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import { useScrollToX } from '../../../../../_hooks/useScrollToX';
//
import NextPrevDiv from '../../../../../component/some_div/next_prev_div/NextPrevDiv';
import PLProduct from '../../../../../component/pl_product/_main/PLProduct';
//
import './PLRowProducts.scss';

//
PLRowProducts.propTypes = {};

//
function PLRowProducts({ product_arr }) {
    //
    const ref_scroll_elm = useRef(null);

    //
    const { is_has_next, is_has_prev, handleNext, handlePrev, hasNextPrev } =
        useScrollToX(ref_scroll_elm);

    //
    useEffect(() => {
        hasNextPrev();
    }, [product_arr.length]);

    //
    return (
        <div className="PLRowProducts pos-rel">
            <div
                ref={ref_scroll_elm}
                className="PLRowProducts_contain overflow-x-auto scroll-height-0"
            >
                <div className="PLRowProducts_row display-flex">
                    {product_arr.map((product_obj, index) => (
                        <div
                            key={product_obj.id}
                            className="PLRowProducts_item flex-shrink-0 border-blur"
                        >
                            <PLProduct product_obj={product_obj} />
                        </div>
                    ))}
                </div>
            </div>

            {IS_MOBILE ? null : (
                <div className="text-white">
                    <NextPrevDiv
                        is_btn_circle={false}
                        is_has_next={is_has_next}
                        is_has_prev={is_has_prev}
                        // size_icon={size_icon}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                    />
                </div>
            )}
        </div>
    );
}

export default PLRowProducts;
