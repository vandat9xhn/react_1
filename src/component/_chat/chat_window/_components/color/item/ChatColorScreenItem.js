import React from 'react';
import PropTypes from 'prop-types';

//
ChatColorScreenItem.propTypes = {};

//
function ChatColorScreenItem({ colour_arr, changeColor }) {
    //
    function handleClick() {
        changeColor(colour_arr);
    }

    //
    return (
        <div className="ChatColorScreenItem padding-8px ">
            <div
                className="pos-rel padding-top-100per cursor-pointer hv-bg-fb-active brs-15px"
                onClick={handleClick}
            >
                <div className="pos-abs-100 padding-8px">
                    <div
                        className="wh-100 brs-50"
                        style={{
                            backgroundImage: `linear-gradient(to bottom, ${colour_arr.join(
                                ', '
                            )})`,
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default ChatColorScreenItem;
