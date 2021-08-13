import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';

//
StoryIconCloseMb.propTypes = {};

//
function StoryIconCloseMb({ handleDiscard }) {
    //
    return (
        <div
            className="StoryIconCloseMb padding-4px"
            onClick={handleDiscard}
        >
            <IconsArrow y={400} size_icon="1.5rem" />
        </div>
    );
}

export default StoryIconCloseMb;
