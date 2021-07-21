import React from 'react';
import PropTypes from 'prop-types';
//
import './BtnAction.scss';

//
BtnAction.propTypes = {
    btn_class: PropTypes.string,
    handleBtnAction: PropTypes.func,
    disabled: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

//
function BtnAction({ btn_class, handleBtnAction, disabled, children }) {
    //
    return (
        <button
            className={`BtnAction ${btn_class}`}
            onClick={handleBtnAction}
            disabled={disabled}
        >
            <div>{children}</div>
        </button>
    );
}

export default BtnAction;
