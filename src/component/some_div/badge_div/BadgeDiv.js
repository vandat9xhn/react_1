import React from 'react';
import PropTypes from 'prop-types';
//
import './BadgeDiv.scss';

//
BadgeDiv.propTypes = {
    num: PropTypes.number,
};

//
function BadgeDiv({ num }) {
    return (
        <div className={`BadgeDiv brs-50 ${num ? '' : 'display-none'}`}>
            <div className="wh-100 display-flex-center">{num}</div>
        </div>
    );
}

export default BadgeDiv;
