import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../_icons_svg/icons_arrow/IconsArrow';

import IconDiv from '../icon_div/IconDiv';
//
import './ArrowAndString.scss';

//
ArrowAndString.propTypes = {
    size_icon: PropTypes.string,
    open_list: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

ArrowAndString.defaultProps = {
    open_list: false,
    size_icon: '1rem',
};

//
function ArrowAndString({ size_icon, children, open_list }) {
    //
    return (
        <div className="ArrowAndString">
            <div
                className={`ArrowAndString_arrow ${
                    open_list ? 'ArrowAndString_arrow-down' : ''
                }`}
            >
                <IconDiv
                    Icon={IconsArrow}
                    size_icon={size_icon}
                    is_reverse={true}
                    space_between={true}

                    class_left="ArrowAndString_icon"
                >
                    {children}
                </IconDiv>
            </div>
        </div>
    );
}

export default ArrowAndString;
