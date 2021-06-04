import React from 'react';
import PropTypes from 'prop-types';

import './FetchingDiv.scss';
//
function FetchingDiv(props) {
    const {is_fetching} = props;

    return (
        <div className={is_fetching ? 'FetchingDiv' : 'display-none'}>
            <div className="FetchingDiv_item"/>
            <div className="FetchingDiv_item"/>
            <div className="FetchingDiv_item"/>
        </div>
    );
}

FetchingDiv.propTypes = {
    is_fetching: PropTypes.bool,
};

FetchingDiv.defaultProps = {
    is_fetching: false,
}

export default FetchingDiv;