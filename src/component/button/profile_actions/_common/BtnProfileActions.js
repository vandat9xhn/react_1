import React from 'react';
import PropTypes from 'prop-types';
//
import './BtnProfileActions.scss';

//
BtnProfileActions.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    handleClick: PropTypes.func,
};

BtnProfileActions.defaultProps = {
    className: '',
};

//
function BtnProfileActions({ className, Icon, title, handleClick }) {
    //
    return (
        <button
            className={`BtnProfileActions btn btn-hv btn-active display-flex-center padding-x-12px brs-6px font-600 line-20px cursor-pointer ${className}`}
            type="button"
            onClick={handleClick}
        >
            {Icon}

            <span
                className={`text-nowrap ${
                    title && Icon ? 'margin-left-5px' : ''
                }`}
            >
                {title}
            </span>
        </button>
    );
}

export default BtnProfileActions;
