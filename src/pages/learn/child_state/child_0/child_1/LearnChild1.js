import React, { useState } from 'react';
import PropTypes from 'prop-types';

//
LearnChild1.propTypes = {};

//
function LearnChild1({ value: old_value }) {
    // 
    const [value, setValue] = useState(old_value)

    // 
    function handleChange(e) {
        setValue(e.target.value)
    }

    // 
    return (
        <div>
            <input type="text" value={value} onChange={handleChange} />
        </div>
    );
}

export default LearnChild1;
