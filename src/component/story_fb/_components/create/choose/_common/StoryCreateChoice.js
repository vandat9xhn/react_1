import React from 'react';
import PropTypes from 'prop-types';
//
import './StoryCreateChoice.scss';

//
StoryCreateChoice.propTypes = {};

//
function StoryCreateChoice({ children, title }) {
    //
    return (
        <div className="StoryCreateChoice wh-100 position-rel cursor-pointer">
            <div className="pos-abs-center w-100per">
                <div className="display-flex justify-content-center">
                    <div className="StoryCreateChoice_icon display-flex-center bg-primary brs-50">
                        {children}
                    </div>
                </div>

                <div className="StoryCreateChoice_title padding-8px text-align-center">
                    <span className="label-field">{title}</span>
                </div>
            </div>
        </div>
    );
}

export default StoryCreateChoice;
