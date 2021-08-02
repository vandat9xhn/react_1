import React from 'react';
import PropTypes from 'prop-types';
//
import StoryMenuMobile from '../_main/StoryMenuMobile';

//
StoryFollowedMobile.propTypes = {};

//
function StoryFollowedMobile(props) {
    //
    return (
        <StoryMenuMobile story_type="followed" heading="Stories" />
    );
}

export default StoryFollowedMobile;
