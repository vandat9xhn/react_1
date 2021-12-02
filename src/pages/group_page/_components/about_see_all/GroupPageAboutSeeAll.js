import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//
GroupPageAboutSeeAll.propTypes = {};

//
function GroupPageAboutSeeAll({ link_to }) {
    // 
    return (
        <Link
            className="display-flex-center h-36px brs-6px bg-ccc color-inherit font-600 hv-bg-hv"
            to={link_to}
        >
            See All
        </Link>
    );
}

export default GroupPageAboutSeeAll;
