import React from 'react';
import PropTypes from 'prop-types';
//
import './BtnActions.scss';

//
BtnActions.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    btn_props: PropTypes.object,

    use_title: PropTypes.bool,
    use_icon: PropTypes.bool,
    icon_on_left: PropTypes.bool,

    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    handleClick: PropTypes.func,
};

BtnActions.defaultProps = {
    className: '',
    btn_props: {},

    use_title: true,
    use_icon: true,
    icon_on_left: true,
};

//
function BtnActions({
    className,
    Icon,
    title,
    btn_props,

    use_title,
    use_icon,
    icon_on_left,

    handleClick,
}) {
    //
    return (
        <button
            className={`BtnActions btn btn-active display-flex-center h-36px padding-x-12px brs-6px font-600 line-20px cursor-pointer ${className} hv-after-shadow-05`}
            type="button"
            onClick={handleClick}
            {...btn_props}
        >
            {use_icon && icon_on_left ? Icon : null}

            {use_title ? (
                <span
                    className={`text-nowrap ${
                        title && Icon
                            ? icon_on_left
                                ? 'margin-left-5px'
                                : 'margin-right-5px'
                            : ''
                    }`}
                >
                    {title}
                </span>
            ) : null}

            {use_icon && !icon_on_left ? Icon : null}
        </button>
    );
}

export default BtnActions;
