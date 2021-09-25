import React, { useRef } from 'react';
import PropTypes from 'prop-types';

//
PLRIDiscussInput.propTypes = {};

//
function PLRIDiscussInput({ handleSend }) {
    //
    const ref_input = useRef(null);

    //
    function onSend() {
        const content = ref_input.current.value;
        content.trim() && handleSend(content);
    }

    //
    return (
        <div className="PLRIDiscussInput">
            <div className="PLRIDiscussInput_row display-flex align-items-center">
                <input ref={ref_input} className="flex-grow-1" type="text" />

                <button
                    className="btn-active padding-5px border-blue text-blue text-upper"
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
