import React from 'react';
import PropTypes from 'prop-types';
//
import IconsPost from '../../../../../../_icons_svg/icons_post/IconsPost';
//
import './StoryShare.scss';

//
StoryShare.propTypes = {};

//
function StoryShare({ handleShare }) {
    return (
        <div className="StoryShare cursor-pointer" onClick={handleShare}>
            <IconsPost y={200} size_icon="2rem" />
        </div>
    );
}

export default StoryShare;
