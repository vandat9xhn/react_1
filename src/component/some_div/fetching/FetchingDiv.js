import React from 'react';
import PropTypes from 'prop-types';

import './FetchingDiv.scss';
//
function FetchingDiv(props) {
    const {open_fetching} = props;

    return (
        <div className={open_fetching ? 'FetchingDiv' : 'display-none'}>
            <div className="FetchingDiv_item"/>
            <div className="FetchingDiv_item"/>
            <div className="FetchingDiv_item"/>
        </div>
    );
}

FetchingDiv.propTypes = {
    open_fetching: PropTypes.bool,
};

FetchingDiv.defaultProps = {
    open_fetching: false,
}

export default FetchingDiv;