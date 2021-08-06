import React from 'react';
import PropTypes from 'prop-types';
//
import StoryCreateChoice from '../_common/StoryCreateChoice';
//
import './StoryCreateTextChoice.scss';

//
StoryCreateTextChoice.propTypes = {};

//
function StoryCreateTextChoice({ openScreenStoryText }) {
    //
    return (
        <div
            className="StoryCreateTextChoice wh-100"
            onClick={openScreenStoryText}
        >
            <StoryCreateChoice title="Create a Text Story">
                <div>
                    <span className="label-field font-18px">Aa</span>
                </div>
            </StoryCreateChoice>
        </div>
    );
}

export default StoryCreateTextChoice;
