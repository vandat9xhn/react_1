import React from 'react';
import PropTypes from 'prop-types';
//
import StoryCreateChoice from '../_common/StoryCreateChoice';
//
import './StoryCreateTextChoice.scss';

//
StoryCreateTextChoice.propTypes = {
    title: PropTypes.string,
    openScreenStoryText: PropTypes.func,
};

StoryCreateChoice.defaultProps = {
    title: 'Create a Text Story',
};

//
function StoryCreateTextChoice({ title, openScreenStoryText }) {
    //
    return (
        <div
            className="StoryCreateTextChoice wh-100"
            onClick={openScreenStoryText}
        >
            <StoryCreateChoice title={title}>
                <div>
                    <span className="StoryCreateTextChoice_title label-field font-18px">
                        Aa
                    </span>
                </div>
            </StoryCreateChoice>
        </div>
    );
}

export default StoryCreateTextChoice;
