import React from 'react';
import PropTypes from 'prop-types';
//
import './StoryPicLeftPcC.scss';

//
StoryPicLeftPcC.propTypes = {
    openAddText: PropTypes.func,
};

//
function StoryPicLeftPcC({ openAddText, is_open }) {
    //
    return (
        <div
            className={`StoryPicLeftPcC padding-8px brs-8px ${
                is_open ? 'bg-active-fb' : 'cursor-pointer hv-bg-hv'
            }`}
            onClick={openAddText}
        >
            <div className="display-flex align-items-center">
                <div>
                    <div className="StoryPicLeftPcC_left_contain display-flex-center brs-50 bg-ccc">
                        <span className="font-12px">Aa</span>
                    </div>
                </div>

                <div className="StoryPicLeftPcC_right">
                    <div className="StoryPicLeftPcC_right_contain">
                        <span className="font-17px label-field">Add Text</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoryPicLeftPcC;
