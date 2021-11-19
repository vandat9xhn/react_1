import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
//
import { getFsShopDiscountTitle } from '../../../../../../_some_function/fashion/getFsShopDiscountTitle';
import { formatLocalDateString } from '../../../../../../_some_function/FormatDate';
//
import { useScrollToX } from '../../../../../../_hooks/useScrollToX';
//
import NextPrevDiv from '../../../../../../component/some_div/next_prev_div/NextPrevDiv';
//
import FsSDiscountItem from '../item/FsSDiscountItem';
//
import './FsShopDiscount.scss';

//
FsShopDiscount.propTypes = {};

//
function FsShopDiscount({ discount_arr, handleSave }) {
    //
    const ref_scroll_elm = useRef(null);

    //
    const { is_has_next, is_has_prev, handleNext, handlePrev, hasNextPrev } =
        useScrollToX({
            ref_scroll_elm: ref_scroll_elm,
            getItemElm: () =>
                ref_scroll_elm.current.getElementsByClassName(
                    'FsShopDiscount_item'
                )[0],
        });

    //
    useEffect(() => {
        !IS_MOBILE && hasNextPrev();
    }, []);

    //
    return (
        <div className="FsShopDiscount bg-primary">
            <h3 className="FsShopDiscount_title margin-bottom-16px text-upper font-16px font-400">
                Mã giảm giá của Shop
            </h3>

            <div className="FsShopDiscount_contain pos-rel">
                <ul
                    ref={ref_scroll_elm}
                    className="FsShopDiscount_row display-flex list-none overflow-x-auto scroll-height-0"
                >
                    {discount_arr.map((discount_obj, ix) => (
                        <li
                            key={ix}
                            className={`FsShopDiscount_item flex-shrink-0 ${
                                ix == 0 ? '' : 'margin-left-15px'
                            }`}
                        >
                            <FsSDiscountItem
                                ix={ix}
                                title={getFsShopDiscountTitle({
                                    discount_value: discount_obj.discount_str,
                                    min_spend: discount_obj.min_spend,
                                })}
                                expiry={formatLocalDateString(
                                    discount_obj.end_time
                                )}
                                status_card={discount_obj.status_card}
                                handleSave={handleSave}
                            />
                        </li>
                    ))}
                </ul>

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

export default FsShopDiscount;
