import React from 'react';
import PropTypes from 'prop-types';
//
import StoryMenuMobile from '../_main/StoryMenuMobile';

//
StorySuggestsMobile.propTypes = {};

//
function StorySuggestsMobile(props) {
    //
    return (
        <StoryMenuMobile story_type="suggested" heading="Suggested for you" />
    );
}

export default StorySuggestsMobile;
