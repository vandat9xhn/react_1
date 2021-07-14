import React from 'react';
import PropTypes from 'prop-types';
//
import './FetchingDiv.scss';

//
FetchingDiv.propTypes = {
    is_fetching: PropTypes.bool,
};

FetchingDiv.defaultProps = {
    is_fetching: false,
};

//
function FetchingDiv({ is_fetching }) {
    //
    return (
        <div className={is_fetching ? 'FetchingDiv' : 'display-none'}>
            <div className="FetchingDiv_item" />
            <div className="FetchingDiv_item" />
            <div className="FetchingDiv_item" />
        </div>
    );
}

export default FetchingDiv;
