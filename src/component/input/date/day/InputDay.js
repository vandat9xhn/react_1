import React from 'react';
import PropTypes from 'prop-types';
//
import { getDaysInMonth } from '../../../../_some_function/getDaysInMonth';
//
import Select from '../../select/Select';

//
InputDay.propTypes = {};

//
function InputDay({ month, year, day, handleChangeDay }) {
    //
    const options = getDaysInMonth(month, year);

    //
    return (
        <Select
            options={options}
            current_option={day}
            onSelectOption={handleChangeDay}
        />
    );
}

export default InputDay;
