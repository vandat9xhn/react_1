import React from "react";
import PropTypes from "prop-types";

import ScreenTitle from "../../../../../component/_screen/components/frame/has_title/title/ScreenTitle";
import CircleLoading from "../../../../../component/waiting/circle_loading/CircleLoading";
import NextPrevDiv from "../../../../../component/some_div/next_prev_div/NextPrevDiv";

//
ShortVideoFullLayoutPc.propTypes = {};

//
function ShortVideoFullLayoutPc({
    is_fetching,
    show_screen_title,
    is_has_next,
    is_has_prev,
    children,

    handleNext,
    handlePrev,
    closeScreenTitle,
}) {
    //
    return (
        <React.Fragment>
            {is_fetching ? (
                <div className="pos-abs-100 bg-black">
                    <div className="pos-abs-center">
                        <CircleLoading is_fetching={true} />
                    </div>
                </div>
            ) : (
                children
            )}

            <div className="pos-abs left-0 top-0 padding-left-8px">
                <ScreenTitle
                    show_screen_title={show_screen_title}
                    has_download={false}
                    tooltipCloseElm={"Close"}
                    closeScreenTitle={closeScreenTitle}
                />
            </div>

            <div className="pos-abs top-50per left-0 w-100per">
                <div className="NextPrevDivScreen pos-rel margin-auto w-620px max-w-100per">
                    <NextPrevDiv
                        is_btn_circle={true}
                        is_has_next={is_has_next && !is_fetching}
                        is_has_prev={is_has_prev}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default ShortVideoFullLayoutPc;
