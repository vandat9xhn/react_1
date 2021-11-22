import React from 'react';
import PropTypes from 'prop-types';
//
import NextPrevDiv from '../../../some_div/next_prev_div/NextPrevDiv';
//
import './CardsRowFitContain.scss';

//
CardsRowFitContain.propTypes = {};

//
function CardsRowFitContain({
    ItemComponent,
    item_props,

    ref_scroll_elm,
    data_arr,

    is_has_next,
    is_has_prev,

    handleNext,
    handlePrev,
}) {
    //
    return (
        <div className="CardsRowFitContain pos-rel">
            <div
                ref={ref_scroll_elm}
                className="CardsRowFitContain_contain wh-100 overflow-x-auto scroll-height-0"
            >
                <ul className="display-flex list-none">
                    {data_arr.map((item, ix) => (
                        <li
                            key={item.id}
                            className="CardsRowFitContain_item w-100per flex-shrink-0"
                        >
                            <ItemComponent
                                item={item}
                                ix={ix}
                                {...item_props}
                            />
                        </li>
                    ))}
                </ul>
            </div>

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
        </div>
    );
}

export default CardsRowFitContain;
