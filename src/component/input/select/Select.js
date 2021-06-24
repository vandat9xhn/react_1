import React from 'react';
import PropTypes from 'prop-types';

//
Select.propTypes = {
    options: PropTypes.array,
    current_option: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onSelectOption: PropTypes.func,
};

//
function Select({ options, current_option, onSelectOption }) {
    //
    return (
        <select name="" value={current_option} onChange={onSelectOption}>
            {options.map((option, ix) => (
                <option key={`Select_${ix}`}>{option}</option>
            ))}
        </select>
    );
}

export default Select;
