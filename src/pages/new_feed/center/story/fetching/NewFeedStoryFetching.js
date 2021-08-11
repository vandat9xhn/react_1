import React from 'react';
import PropTypes from 'prop-types';
//
import IconUpdate from '../../../../../_icons_svg/icon_update/IconUpdate';
//
import './NewFeedStoryFetching.scss';

//
NewFeedStoryFetching.propTypes = {};

//
function NewFeedStoryFetching({ is_fetching }) {
    return (
        <div
            className={`NewFeedStoryFetching padding-8px ${
                is_fetching ? 'NewFeedStoryFetching_active' : 'display-none'
            }`}
        >
            <IconUpdate stroke="var(--blue)" />
        </div>
    );
}

export default NewFeedStoryFetching;
