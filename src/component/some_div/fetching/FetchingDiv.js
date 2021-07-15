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
        <div className={is_fetching ? 'display-flex' : 'display-none'}>
            <div className="FetchingDiv_item FetchingDiv_item_1" />
            <div className="FetchingDiv_item FetchingDiv_item_2" />
            <div className="FetchingDiv_item FetchingDiv_item_3" />
        </div>
    );
}

export default FetchingDiv;
