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
        <div className="StoryCreateChoice wh-100 pos-rel cursor-pointer">
            <div className="pos-abs-center w-100per">
                <div className="display-flex justify-content-center">
                    <div className="StoryCreateChoice_icon display-flex-center bg-primary brs-50 box-shadow-fb">
                        {children}
                    </div>
                </div>

                <div className="StoryCreateChoice_title padding-4px text-align-center">
                    <span className="font-700 text-white font-13px">{title}</span>
                </div>
            </div>
        </div>
    );
}

export default StoryCreateChoice;
