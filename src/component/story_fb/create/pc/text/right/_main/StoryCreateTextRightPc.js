import React from 'react';
import PropTypes from 'prop-types';
//
import StoryItemMain from '../../../../../item/vid_pic_text/StoryItemMain';
// 
import './StoryCreateTextRightPc.scss';

//
StoryCreateTextRightPc.propTypes = {};

//
function StoryCreateTextRightPc({ bg, text, font_family }) {
    //
    return (
        <div className="StoryCreateTextRightPc position-rel wh-100 padding-8px">
            <div className="display-flex-center h-100per">
                <div className="StoryCreateTextRightPc_item position-rel h-100per brs-8px overflow-hidden">
                    <StoryItemMain
                        is_story_text={true}
                        vid_pic={bg}
                        text={text || 'Start typing'}
                        font_family={font_family}
                    />
                </div>
            </div>
        </div>
    );
}

export default StoryCreateTextRightPc;
