import React from 'react';
import PropTypes from 'prop-types';

//
InputColor.propTypes = {
    label: PropTypes.string,
    color: PropTypes.string,
    handlePickColor: PropTypes.func,
};

InputColor.defaultProps = {
    label: 'Color',
};

//
function InputColor({ label, color, handlePickColor }) {
    return (
        <div>
            <div>
                <label className="font-500">{label}</label>
            </div>

            <div>
                <input type="color" value={color} onChange={handlePickColor} />
            </div>
        </div>
    );
}

export default InputColor;
