import React from 'react';
import PropTypes from 'prop-types';

//
IconSetting.propTypes = {
    size_icon: PropTypes.string,
    stroke: PropTypes.string,
};

IconSetting.defaultProps = {
    size_icon: '1rem',
    stroke: 'var(--md-color)',
};

//
function IconSetting(props) {
    const { size_icon, stroke } = props;
    //
    return (
        <svg
            width={size_icon}
            height={size_icon}
            viewBox="0 0 200 200"
            fill="none"
            strokeWidth="10"
            stroke={stroke}
        >
            <path
                d="M145.216 99.5058C145.216 124.079 125.48 143.924 101.225 143.924C76.9699 143.924 57.2334
                124.079 57.2334 99.5058C57.2334 74.9331 76.9699 55.0872 101.225 55.0872C125.48 55.0872 145.216
                74.9331 145.216 99.5058Z"
            />

            <path
                d="M59.0922 44.157L55.6628 23.4012L79.6686 15L91.9164 29.8256H110.043L124.251 15L144.827
                23.4012V44.157L157.565 58.9826L177.161 56.5116L185 77.2674L171.282 90.6105V110.378L185
                121.25L177.161 144.477H157.565L142.378 158.314L144.827 177.587L124.251 185L110.043
                170.669H91.9164L79.6686 185L57.1326 177.587L59.0922 158.314L46.8444 144.477L24.7983
                146.453L15 125.203L31.6571 110.378V93.5756L15 77.2674L24.7983 56.5116L42.9251
                58.9826L59.092244.157Z"
            />
        </svg>
    );
}

export default IconSetting;
