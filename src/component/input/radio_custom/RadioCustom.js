import React from 'react';
import PropTypes from 'prop-types';
//
import './RadioCustom.scss';

//
RadioCustom.propTypes = {
    is_active: PropTypes.bool,
};
RadioCustom.defaultProps = {
    is_active: false,
};

//
function RadioCustom({ is_active }) {
    //
    return (
        <div
            className={`RadioCustom brs-50 ${
                is_active ? 'RadioCustom_active' : 'RadioCustom_inactive'
            }`}
        >
            <div className="RadioCustom_center pos-abs-center brs-50"></div>
        </div>
    );
}

export default RadioCustom;
