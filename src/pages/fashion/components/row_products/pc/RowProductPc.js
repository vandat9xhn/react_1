import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { useMouseDragScrollToX } from '../../../../../_hooks/useMouseDragScrollToX';
//
import NextPrevDiv from '../../../../../component/some_div/next_prev_div/NextPrevDiv';
import FashionFaceItem from '../../face_item/_main/FashionFaceItem';
import FashionSeeMoreLastRow from '../../see_more/last_row/FashionSeeMoreLastRow';
//
import './RowProductPc.scss';

//
RowProductPc.propTypes = {};

//
function RowProductPc({
    products,
    has_fetched,
    ref_scroll_elm,
    ref_fake_elm_end,

    use_more,
    link_to_more,
    title_more,
    class_color_more,
}) {
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
    } = useMouseDragScrollToX(ref_scroll_elm);

    //
    useEffect(() => {
        hasNextPrev();
    }, [products.length]);

    //
    return (
        <div className="pos-rel">
            <div
                ref={ref_scroll_elm}
                className="RowProductPc scroll-height-0 scroll-width-0 overflow-x-auto max-w-100per"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                //
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onScroll={handleScroll}
            >
                <ul className="RowProductPc_row list-none display-flex">
                    {products.map((item, ix) => (
                        <li
                            key={`RowProductPc_item_${
                                item.id || `RowProductPc_${ix}`
                            }`}
                            className={`row-product-item ${
                                is_mouse_down ? 'pointer-events-none' : ''
                            }`}
                        >
                            <FashionFaceItem
                                id={item.id}
                                img={item.img}
                                is_like={item.is_like}
                                is_plus={item.is_plus}
                                is_mall={item.is_mall}
                                flash_img={item.flash_img}
                                discount={item.discount}
                                name={item.name}
                                rate_avg={item.rate_avg}
                                sold={item.sold}
                                //
                                shop_deals={item.shop_deals}
                                shop_discount={item.shop_discount}
                                address={item.address}
                                //
                                old_price={item.old_price}
                                new_price={item.new_price}
                                old_price_max={item.old_price_max}
                                new_price_max={item.new_price_max}
                                //
                                use_same={false}
                            />
                        </li>
                    ))}

                    <li ref={ref_fake_elm_end} className="padding-1px"></li>

                    {use_more ? (
                        <li className="row-product-item snap-align-end">
                            <FashionSeeMoreLastRow
                                link_to={link_to_more}
                                title={title_more}
                                class_color={class_color_more}
                            />
                        </li>
                    ) : null}
                </ul>
            </div>

            {has_fetched ? (
                <NextPrevDiv
                    is_btn_circle={true}
                    is_has_next={is_has_next}
                    is_has_prev={is_has_prev}
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                />
            ) : null}
        </div>
    );
}

export default RowProductPc;
