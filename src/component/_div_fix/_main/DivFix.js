import React, { useEffect } from 'react';
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
    scroll_elm: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
    position_class: PropTypes.string,

    top: propTypes_str_num,
    bottom: propTypes_str_num,
    left: propTypes_str_num,
    right: propTypes_str_num,

    transform_x: propTypes_str_num,
    transform_y: propTypes_str_num,
    scroll_x_diff: PropTypes.number,
    scroll_y_diff: PropTypes.number,

    children: PropTypes.element,
    closeDivFix: PropTypes.func,

    is_width_lte_400: PropTypes.bool,
};

DivFix.defaultProps = {
    top: 'auto',
    bottom: 'auto',
    left: 'auto',
    right: 'auto',

    scroll_x_diff: 0,
    scroll_y_diff: 0,

    is_width_lte_400: innerWidth <= 400,
};

//
function DivFix({
    scroll_elm,
    position_class,

    top,
    bottom,
    left,
    right,

    transform_x,
    transform_y,
    scroll_x_diff,
    scroll_y_diff,

    children,
    closeDivFix,
    handleScrollDiff,
    is_width_lte_400,
}) {
    //
    useEffect(() => {
        window.addEventListener('popstate', closeDivFix);

        return () => {
            window.removeEventListener('popstate', closeDivFix);
        };
    }, []);

    //
    useEffect(() => {
        if (scroll_elm) {
            scroll_elm.onscroll = (e) => {
                handleScrollDiff(e);
            };
        }
    }, []);

    //
    return (
        <div
            className={`DivFix ${
                is_width_lte_400
                    ? 'DivFixItem_fixed pos-fixed-100v z-index-lv5 bg-loader'
                    : ''
            }`}
        >
            {is_width_lte_400 && (
                <div
                    className="pos-fixed-100v bg-loader"
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
                    transform: `translate(${transform_x}, ${transform_y}) translate(${scroll_x_diff}px, ${scroll_y_diff}px)`,
                    // zIndex: z_index,
                }}
            >
                {children}
            </div>
        </div>
    );
}

export default DivFix;
