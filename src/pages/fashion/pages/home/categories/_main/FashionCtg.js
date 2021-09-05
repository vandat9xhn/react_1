import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
//
import { data_fashion_category_item_arr } from '../../../../../../_data/fashion/categories';
//
import { useScrollToX } from '../../../../../../_hooks/useScrollToX';
//
import NextPrevDiv from '../../../../../../component/some_div/next_prev_div/NextPrevDiv';
//
import FashionCtgItem from '../item/FashionCtgItem';
//
import './FashionCtg.scss';

//
FashionCtg.propTypes = {};

//
function FashionCtg(props) {
    //
    const ref_scroll_elm = useRef(null);

    //
    const { is_has_next, is_has_prev, handleNext, handlePrev, hasNextPrev } =
        useScrollToX(ref_scroll_elm);

    //
    useEffect(() => {
        !IS_MOBILE && hasNextPrev();
    }, []);

    //
    return (
        <div className="FashionCtg pos-rel bg-primary">
            <h2 className="fashion-head-padding font-500 text-secondary font-16px">
                DANH MỤC
            </h2>

            <div className="pos-rel">
                <div
                    ref={ref_scroll_elm}
                    className="FashionCtg_contain overflow-x-auto scroll-height-0"
                >
                    <ul className="FashionCtg_row display-flex flex-col flex-wrap h-100per list-none">
                        {data_fashion_category_item_arr.map((item_obj, ix) => (
                            <li key={`${ix}`} className="FashionCtg_item">
                                <FashionCtgItem item_obj={item_obj} />
                            </li>
                        ))}
                    </ul>
                </div>

                {IS_MOBILE ? null : (
                    <NextPrevDiv
                        is_btn_circle={true}
                        is_has_next={is_has_next}
                        is_has_prev={is_has_prev}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                    />
                )}
            </div>
        </div>
    );
}

export default FashionCtg;
