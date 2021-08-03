import React from 'react';
import PropTypes from 'prop-types';
//
import './BadgeDiv.scss';

//
BadgeDiv.propTypes = {
    num: PropTypes.number,
    max_num: PropTypes.number,
};

BadgeDiv.defaultProps = {
    max_num: 99
}

//
function BadgeDiv({ num, max_num }) {
    return (
        <div className={`BadgeDiv brs-50 ${num ? '' : 'display-none'}`}>
            <div className="wh-100 display-flex-center">
                {num >= max_num ? `${max_num}+` : num}
            </div>
        </div>
    );
}

export default BadgeDiv;
