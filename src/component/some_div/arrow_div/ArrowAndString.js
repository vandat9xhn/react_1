import React, { Component } from 'react';
import IconsArrow from '../../../_icons_svg/icons_arrow/IconsArrow';
import PropTypes from 'prop-types';

import './ArrowAndString.scss';

// class
class ArrowAndString extends Component {
    render() {
        const {div_with, size_icon, children, open_list, onClick} = this.props;
        return (
            <div className="ArrowAndString">
                <div
                    className="ArrowAndString_row"
                    style={{width: div_with}}
                    onClick={onClick}
                >
                    <div>
                        {children}
                    </div>

                    {/* arrow */}
                    <div>
                        <div className={`ArrowAndString_arrow ${
                                        open_list ? 'ArrowAndString_arrow-down' : ''
                                    }`}
                        >
                            <IconsArrow size_icon={size_icon}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ArrowAndString.propTypes = {
    div_with: PropTypes.string,
    size_icon: PropTypes.string,
    open_list: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element,]),
    onClick: PropTypes.func,
}

ArrowAndString.defaultProps = {
   open_list: false,
   size_icon: '1rem',
}

export default ArrowAndString;