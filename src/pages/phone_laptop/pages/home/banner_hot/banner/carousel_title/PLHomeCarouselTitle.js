import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import './PLHomeCarouselTitle.scss';

//
PLHomeCarouselTitle.propTypes = {};

//
function PLHomeCarouselTitle({ title_arr, active_id }) {
    //
    const ref_scroll_elm = useRef(null);

    //
    useEffect(() => {
        const active_ix = title_arr.findIndex((item) => item.id == active_id);

        ref_scroll_elm.current.scrollTo(
            active_ix <= 4
                ? 0
                : (active_ix - 4) *
                      ref_scroll_elm.current.getBoundingClientRect().width *
                      0.2,
            0
        );
    }, [active_id]);

    //
    return (
        <div className="PLHomeCarouselTitle pos-rel">
            <ul
                ref={ref_scroll_elm}
                className="PLHomeCarouselTitle_row display-flex list-none overflow-x-auto scroll-height-0"
            >
                {title_arr.map((item) => (
                    <li
                        key={item.id}
                        className={`PLHomeCarouselTitle_item flex-shrink-0 padding-x-5px padding-y-10px ${
                            active_id == item.id
                                ? 'PLHomeCarouselTitle_item-active font-700'
                                : 'font-500'
                        }`}
                    >
                        <Link className="color-inherit" to={item.link_to}>
                            <div className="PLHomeCarouselTitle_item_contain">
                                <div>{item.title_1}</div>

                                <div>{item.title_2}</div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PLHomeCarouselTitle;
