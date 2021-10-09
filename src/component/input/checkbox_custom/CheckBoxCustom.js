import React from 'react';
import PropTypes from 'prop-types';
//
import CheckBox from '../checkbox/CheckBox';
//
import './CheckBoxCustom.scss';

//
CheckBoxCustom.propTypes = {
    checked: PropTypes.bool,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    handleChangeChecked: PropTypes.func,
};

CheckBoxCustom.defaultProps = {
    title: '',
};

//
function CheckBoxCustom({ checked, title, handleChangeChecked }) {
    //
    return (
        <div
            className={`CheckBoxCustom cursor-pointer ${
                checked
                    ? 'CheckBoxCustom-checked font-500'
                    : 'CheckBoxCustom-unchecked'
            }`}
            onClick={handleChangeChecked}
        >
            <div className="CheckBoxCustom_row display-flex align-items-center">
                <div className="CheckBoxCustom_box">
                    <CheckBox />
                </div>

                {title ? <div className="margin-left-10px">{title}</div> : null}
            </div>
        </div>
    );
}

export default CheckBoxCustom;
