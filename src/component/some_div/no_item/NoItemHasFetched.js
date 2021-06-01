import React from 'react';
import PropTypes from 'prop-types';
//
import NoItem from './NoItem';

//
NoItemHasFetched.propTypes = {
    has_fetched: PropTypes.bool,
    arr_length: PropTypes.number,
};

//
function NoItemHasFetched({ has_fetched, arr_length }) {
    return <NoItem no_item={has_fetched && arr_length == 0} />;
}

export default NoItemHasFetched;
