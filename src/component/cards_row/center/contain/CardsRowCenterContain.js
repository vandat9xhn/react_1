import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../_constant/Constant';
//
import VirtualScroll from '../../../virtual_scroll/VirtualScroll';
import NextPrevDiv from '../../../some_div/next_prev_div/NextPrevDiv';
//
import './CardsRowCenterContain.scss';

//
CardsRowCenterContain.propTypes = {};

//
function CardsRowCenterContain({
    ItemComponent,
    item_props,

    ref_scroll_elm,
    data_arr,

    has_blur_side = !IS_MOBILE,
    is_has_next,
    is_has_prev,

    handleNext,
    handlePrev,
}) {
    return (
        <div className="CardsRowCenterContain pos-rel">
            <div
                ref={ref_scroll_elm}
                className="CardsRowCenterContain_contain wh-100 overflow-x-auto scroll-height-0"
            >
                <ul className="display-flex list-none">
                    {data_arr.map((item, ix) => (
                        <li
                            key={item.id}
                            className="CardsRowCenterContain_item flex-shrink-0"
                        >
                            <VirtualScroll ref_root={ref_scroll_elm}>
                                <ItemComponent
                                    item={item}
                                    ix={ix}
                                    {...item_props}
                                />
                            </VirtualScroll>
                        </li>
                    ))}
                </ul>
            </div>

            {has_blur_side ? (
                <React.Fragment>
                    <div
                        className={`CardsRowCenterContain_side left-0 ${
                            !is_has_next
                                ? 'CardsRowCenterContain_side-left-only'
                                : ''
                        } ${
                            !is_has_prev
                                ? 'CardsRowCenterContain_side-left-none'
                                : ''
                        }`}
                        onClick={handlePrev}
                    ></div>

                    <div
                        className={`CardsRowCenterContain_side right-0 ${
                            !is_has_prev
                                ? 'CardsRowCenterContain_side-right-only'
                                : ''
                        } ${
                            !is_has_next
                                ? 'CardsRowCenterContain_side-right-none'
                                : ''
                        }`}
                        onClick={handleNext}
                    ></div>
                </React.Fragment>
            ) : null}

            {IS_MOBILE ? null : (
                <div className="text-secondary">
                    <NextPrevDiv
                        is_btn_circle={true}
                        is_has_next={is_has_next}
                        is_has_prev={is_has_prev}
                        // size_icon
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                    />
                </div>
            )}
        </div>
    );
}

export default CardsRowCenterContain;
