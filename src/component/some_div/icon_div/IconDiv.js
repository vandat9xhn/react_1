import React from 'react';
import PropTypes from 'prop-types';
//
import FlexDiv from '../flex_div/FlexDiv';
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
        <FlexDiv
            is_reverse={is_reverse}
            space_between={space_between}
            ComponentLeft={
                <div className="IconDiv_left">
                    <Icon
                        x={x}
                        y={y}
                        size_icon={size_icon}
                        color={color}
                        {...icon_props}
                    />
                </div>
            }
            ComponentRight={<div className="IconDiv_right">{children}</div>}
        />
    );
}

export default IconDiv;
