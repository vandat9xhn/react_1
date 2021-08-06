import React from 'react';
import PropTypes from 'prop-types';

//
StoryTextRightPcC.propTypes = {};

//
function StoryTextRightPcC({ bg, text, font_family }) {
    //
    return (
        <div className="position-rel">
            <img src={bg} alt="" className="wh-100" />

            <div className="pos-abs-center">
                <div>
                    <span style={{fontFamily: font_family}}>{text ? text : 'Start typing'}</span>
                </div>
            </div>
        </div>
    );
}

export default StoryTextRightPcC;
