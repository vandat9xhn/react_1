import React from 'react';
import PropTypes from 'prop-types';
//
import NoItem from './NoItem';

//
NoItemHasFetched.propTypes = {
    has_fetched: PropTypes.bool,
    no_item: PropTypes.bool,
    title: NoItem.propTypes.title
};


//
function NoItemHasFetched({ has_fetched, no_item, title }) {
    return <NoItem no_item={has_fetched && no_item} title={title} />;
}

export default NoItemHasFetched;
