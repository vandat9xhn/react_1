import PropTypes from 'prop-types';

//
export const simple_icon_propTypes = {
    class_icon: PropTypes.string,
    size_icon: PropTypes.string,

    x: PropTypes.number,
    y: PropTypes.number,
    stroke_width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    stroke: PropTypes.string,
    fill: PropTypes.string,
};
