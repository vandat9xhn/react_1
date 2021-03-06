import React from 'react';
import PropTypes from 'prop-types';

//
InputSelectOptionItem.propTypes = {};

//
function InputSelectOptionItem({ ix, item, handleSelectOption }) {
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

export default InputSelectOptionItem;
