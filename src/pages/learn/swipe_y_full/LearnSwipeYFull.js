import React from "react";
import PropTypes from "prop-types";

import SwipeYFull from "../../../component/swipe/y/_main/SwipeYFull";

//
LearnSwipeYFull.propTypes = {};

//
function LearnSwipeYFull(props) {
    //
    return (
        <div className="w-500px max-w-100per margin-auto user-select-none">
            <div style={{ height: 300, border: `5px solid` }}>
                <SwipeYFull className={`bg-green text-white font-500`}>
                    <React.Fragment>
                        {[1, 2, 3, 4, 5, 6].map((item, ix) => (
                            <div
                                key={ix}
                                className="LearnSwipeYFull_item SwipeYFull_item display-flex-center"
                                style={{
                                    border: `4px solid red`,
                                }}
                            >
                                {item}
                            </div>
                        ))}
                    </React.Fragment>
                </SwipeYFull>
            </div>
        </div>
    );
}

export default LearnSwipeYFull;
