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

/**
 * ripple_type is one of ['right', 'left', 'center']
 */
function ButtonRipple({
    children,
    onClick,
    type,
    disabled,
    ripple_type,
    title,
}) {
    //
    return (
        <button
            className={`ButtonRipple label-field ${
                disabled ? 'opacity-05 pointer-events-none' : 'cursor-pointer'
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
