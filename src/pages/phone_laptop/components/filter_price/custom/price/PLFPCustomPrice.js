import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import './PLFPCustomPrice.scss';

//
PLFPCustomPrice.propTypes = {};

//
function PLFPCustomPrice({ value, min, max, changePrice }) {
    //
    const ref_input = useRef(null);

    //
    useEffect(() => {
        if (ref_input.current.value != value) {
            ref_input.current.value = value;
        }
    }, [value]);

    // ----

    //
    function onChangePrice() {
        const new_value = parseInt(ref_input.current.value);
        const value_done =
            new_value <= min ? min : new_value >= max ? max : new_value;

            // console.log(value_done);
        ref_input.current.value = value_done;
        changePrice(parseInt(value_done));
    }

    //
    function focusInput() {
        ref_input.current.focus();
    }

    //
    return (
        <div
            className="PLFPCustomPrice padding-5px border-blur brs-4px cursor-text"
            onClick={focusInput}
        >
            <input
                ref={ref_input}
                className="PLFPCustomPrice_input border-none outline-none text-align-end"
                type="number"
                onBlur={onChangePrice}
            />

            <span className="text-smoke">.000đ</span>
        </div>
    );
}

export default PLFPCustomPrice;
