import React from 'react';
import PropTypes from 'prop-types';
//
import StoryTextContentC from '../../../../../_components/create/story_text/content/StoryTextContentC';
//
import './StoryCreateTextRightPc.scss';

//
StoryCreateTextRightPc.propTypes = {};

//
function StoryCreateTextRightPc({
    ref_body_elm,
    bg,
    text,
    font_family,
    story_width,
}) {
    //
    return (
        <div className="StoryCreateTextRightPc pos-rel wh-100 padding-8px">
            <div className="display-flex-center h-100per">
                <div
                    ref={ref_body_elm}
                    className="StoryCreateTextRightPc_item pos-rel h-100per brs-8px overflow-hidden"
                    style={{ width: `${story_width}px` }}
                >
                    <StoryTextContentC
                        vid_pic={bg}
                        text={text || 'START TYPING'}
                        font_family={font_family}
                        scale_text={story_width / 200}
                    />
                </div>
            </div>
        </div>
    );
}

export default StoryCreateTextRightPc;
