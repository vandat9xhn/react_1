import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { IS_MOBILE } from "../../../../_constant/Constant";

import { useScrollToX } from "../../../../_hooks/useScrollToX";

import ShortVideoPreview from "../_main/ShortVideoPreview";
import NextPrevDiv from "../../../../component/some_div/next_prev_div/NextPrevDiv";

import "./ShortVideoPreviewList.scss";

//
ShortVideoPreviewList.propTypes = {
    list: PropTypes.array,
};

//
function ShortVideoPreviewList({ list }) {
    //
    const ref_scroll_elm = useRef(null);

    //
    const {
        is_has_next,
        is_has_prev,

        changeItemElm,
        hasNextPrev,

        handleNext,
        handlePrev,
    } = useScrollToX({
        ref_scroll_elm: ref_scroll_elm,
        getItemElm: getItemElm,
        // custom_scroll_x: true,
        // getCustomScrollX: getCustomScrollX,
    });

    //
    !IS_MOBILE &&
        useEffect(() => {
            hasNextPrev();
        }, [list]);

    //
    useEffect(() => {
        IS_MOBILE && changeItemElm();
    }, []);

    // -----

    function getItemElm() {
        return ref_scroll_elm.current.children[0];
    }

    //
    return (
        <div className="ShortVideoPreviewList pos-rel">
            <ul
                ref={ref_scroll_elm}
                className="display-flex list-none overflow-x-auto scroll-height-0"
            >
                {list.map((item, ix) => (
                    <li
                        key={item.id}
                        className="ShortVideoPreviewList_item flex-shrink-0"
                    >
                        <ShortVideoPreview {...item} />
                    </li>
                ))}
            </ul>

            {!IS_MOBILE ? (
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

export default ShortVideoPreviewList;
