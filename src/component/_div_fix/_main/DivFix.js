import React from 'react';
import PropTypes from 'prop-types';
//
import './DivFix.scss';

//
const propTypes_str_num = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
]);

//
DivFix.propTypes = {
    position_class: PropTypes.string,

    top: propTypes_str_num,
    bottom: propTypes_str_num,
    left: propTypes_str_num,
    right: propTypes_str_num,
    transform_x: propTypes_str_num,
    transform_y: propTypes_str_num,

    children: PropTypes.element,
    closeDivFix: PropTypes.func,

    is_mobile: PropTypes.bool,
};

DivFix.defaultProps = {
    top: 'auto',
    bottom: 'auto',
    left: 'auto',
    right: 'auto',
    is_mobile: localStorage.is_mobile == 1,
};

//
function DivFix({
    position_class,

    top,
    bottom,
    left,
    right,
    transform_x,
    transform_y,

    children,
    closeDivFix,

    is_mobile,
}) {
    //
    return (
        <div
            className={`DivFix ${
                is_mobile ? 'DivFix_fixed pos-fixed-100 bg-loader' : ''
            }`}
        >
            {is_mobile && (
                <div
                    className="pos-fixed-100 bg-loader"
                    onClick={closeDivFix}
                ></div>
            )}

            <div
                className={`DivFix_pos ${position_class}`}
                style={{
                    top: top,
                    bottom: bottom,
                    left: left,
                    right: right,
                    transform: `translate(${transform_x}, ${transform_y})`,
                }}
            >
                {children}
            </div>
        </div>
    );
}

export default DivFix;
