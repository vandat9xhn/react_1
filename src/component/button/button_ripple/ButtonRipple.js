import React from 'react';
import PropTypes from 'prop-types';
//
import './ButtonRipple.scss';

//
ButtonRipple.propTypes = {
    type: PropTypes.string,
    title: PropTypes.string,
    disabled: PropTypes.bool,
    ripple_type: PropTypes.string,

    children: PropTypes.any,
    onClick: PropTypes.func,
};

ButtonRipple.defaultProps = {
    title: '',
    type: 'text',
    ripple_type: 'right',
    disabled: false,
};

//
function ButtonRipple(props) {
    // ripple_type is one of ['right', 'left', 'center']
    const { children, onClick, type, disabled, ripple_type, title } = props;

    //
    return (
        <button
            className={`ButtonRipple label-field ${
                disabled ? 'opacity-5 pointer-events-none' : 'cursor-pointer'
            }`}
            type={type}
            title={title}
            disabled={disabled}
            onClick={onClick}
        >
            <div
                className={`ButtonRipple_common ButtonRipple_${ripple_type} ${
                    disabled ? 'display-none' : ''
                }`}
            />
            {children}
        </button>
    );
}

export default ButtonRipple;
