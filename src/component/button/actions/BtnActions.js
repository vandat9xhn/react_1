import React from 'react';
import PropTypes from 'prop-types';
//
import './BtnActions.scss';

//
BtnActions.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    use_title: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    handleClick: PropTypes.func,
};

BtnActions.defaultProps = {
    className: '',
    use_title: true,
};

//
function BtnActions({ className, Icon, use_title, title, handleClick }) {
    //
    return (
        <button
            className={`BtnActions btn btn-active display-flex-center h-36px padding-x-12px brs-6px font-600 line-20px cursor-pointer ${className} hv-after-shadow-05`}
            type="button"
            onClick={handleClick}
        >
            {Icon}

            {use_title ? (
                <span
                    className={`text-nowrap ${
                        title && Icon ? 'margin-left-5px' : ''
                    }`}
                >
                    {title}
                </span>
            ) : null}
        </button>
    );
}

export default BtnActions;
