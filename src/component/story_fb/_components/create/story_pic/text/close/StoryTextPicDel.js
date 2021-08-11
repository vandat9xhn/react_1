import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../../../_icons_svg/icons_arrow/IconsArrow';
// 
import './StoryTextPicDel.scss'

//
StoryTextPicDel.propTypes = {};

//
function StoryTextPicDel({ handleDelete }) {
    return (
        <div
            className="StoryTextPicDel display-flex-center bg-primary brs-50 cursor-pointer"
            onClick={handleDelete}
        >
            <IconsArrow y={400} size_icon="1rem" />
        </div>
    );
}

export default StoryTextPicDel;
