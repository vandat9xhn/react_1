import React from 'react';
import PropTypes from 'prop-types';
//
import './CountDownUpDiv.scss';

//
CountDownUpDiv.propTypes = {
    disabled: PropTypes.bool,
    count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    countDown: PropTypes.func,
    countUp: PropTypes.func,
    beforeCountNum: PropTypes.func,
    countNum: PropTypes.func,
    countNumDone: PropTypes.func,
};

//
function CountDownUpDiv({
    disabled,
    count,
    max,
    min,

    countDown,
    countUp,
    beforeCountNum,
    countNum,
    countNumDone,
}) {
    //
    function onBeforeCountNum(e) {
        beforeCountNum(e.target.value);
    }

    //
    function onCountNum(e) {
        countNum(e.target.value);
    }

    //
    function onCountNumDone(e) {
        countNumDone(e.target.value);
    }
    //
    return (
        <div
            className={`CountDownUpDiv ${
                disabled ? 'pointer-events-none opacity-05' : ''
            }`}
        >
            <div className="display-flex align-items-center">
                <button
                    className={`CountDownUpDiv_btn btn btn-active cursor-pointer ${
                        count <= min
                            ? 'CountDownUpDiv_btn_disabled opacity-05'
                            : 'btn-hv'
                    }`}
                    disabled={count <= min}
                    onClick={countDown}
                >
                    -
                </button>

                <div className="CountDownUpDiv_input">
                    <input
                        className="input"
                        type="number"
                        value={count}
                        onFocus={onBeforeCountNum}
                        onChange={onCountNum}
                        onBlur={onCountNumDone}
                    />
                </div>

                <button
                    className={`CountDownUpDiv_btn btn btn-active cursor-pointer ${
                        count >= max
                            ? 'CountDownUpDiv_btn_disabled opacity-05'
                            : 'btn-hv'
                    }`}
                    disabled={count >= max}
                    onClick={countUp}
                >
                    +
                </button>
            </div>
        </div>
    );
}

export default CountDownUpDiv;
