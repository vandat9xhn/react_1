import React from 'react';
import PropTypes from 'prop-types';
//
import './IconDiv.scss';

//
IconDiv.propTypes = {
    is_reverse: PropTypes.bool,
    space_between: PropTypes.bool,

    Icon: PropTypes.func,
    x: PropTypes.number,
    y: PropTypes.number,
    color: PropTypes.string,
    size_icon: PropTypes.string,
    icon_props: PropTypes.object,

    children: PropTypes.any,
};

IconDiv.defaultProps = {
    is_reverse: false,
    space_between: false,
    icon_props: {},
};

//
function IconDiv(props) {
    const {
        is_reverse,
        space_between,

        x,
        y,
        color,
        Icon,
        size_icon,
        icon_props,

        children,
    } = props;

    //
    return (
        <div className="IconDiv">
            <div
                className={`IconDiv_row ${is_reverse ? 'row-reverse' : ''} ${
                    space_between ? 'IconDiv_row-between' : ''
                }`}
            >
                <div className="IconDiv__icon">
                    <Icon
                        x={x}
                        y={y}
                        color={color}
                        size_icon={size_icon}
                        {...icon_props}
                    />
                </div>

                <div className="IconDiv__children">{children}</div>
            </div>
        </div>
    );
}

export default IconDiv;
