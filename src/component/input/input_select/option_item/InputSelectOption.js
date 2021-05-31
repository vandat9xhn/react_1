import React from 'react';
import PropTypes from 'prop-types';

//
InputSelectOption.propTypes = {};

//
function InputSelectOption({ ix, item, handleSelectOption }) {
    //
    function onSelectOption() {
        handleSelectOption(ix);
    }

    //
    return (
        <div
            className="cursor-pointer hv-bg-blur padding-8px"
            onClick={onSelectOption}
        >
            <div>{item}</div>
        </div>
    );
}

export default InputSelectOption;
