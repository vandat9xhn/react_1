import React, { useRef } from 'react';
import PropTypes from 'prop-types';

//
PLRIDiscussInput.propTypes = {};

//
function PLRIDiscussInput({ handleSendDiscuss }) {
    //
    const ref_input = useRef(null);

    //
    function onSend() {
        const content = ref_input.current.value;
        content.trim() && handleSendDiscuss(content);
    }

    //
    return (
        <div className="PLRIDiscussInput">
            <div className="PLRIDiscussInput_row display-flex align-items-center">
                <input
                    ref={ref_input}
                    className="flex-grow-1 margin-right-10px padding-5px brs-3px border-blur outline-none"
                    type="text"
                    placeholder="Nhập thảo luận của bạn"
                />

                <button
                    className="btn-active padding-5px border-blue brs-3px text-blue text-upper cursor-pointer"
                    type="button"
                    onClick={onSend}
                >
                    Gửi
                </button>
            </div>
        </div>
    );
}

export default PLRIDiscussInput;
