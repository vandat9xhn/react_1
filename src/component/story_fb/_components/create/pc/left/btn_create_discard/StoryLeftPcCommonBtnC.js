import React from 'react';
import PropTypes from 'prop-types';
//
import './StoryLeftPcCommonBtnC.scss';

//
StoryLeftPcCommonBtnC.propTypes = {};

//
function StoryLeftPcCommonBtnC({ handleCreate, handleDiscard }) {
    //
    return (
        <div className="StoryLeftPcCommonBtnC">
            <div className="StoryLeftPcCommonBtnC_row display-flex space-around">
                <div className="StoryLeftPcCommonBtnC_col">
                    <button
                        className="wh-100 padding-4px btn btn-hv btn-active bg-ccc brs-5px text-align-center label-field cursor-pointer"
                        onClick={handleDiscard}
                    >
                        Discard
                    </button>
                </div>

                <div className="StoryLeftPcCommonBtnC_col">
                    <button
                        className="wh-100 padding-4px btn btn-hv btn-active bg-blue brs-5px text-align-center label-field text-white cursor-pointer"
                        onClick={handleCreate}
                    >
                        Create story
                    </button>
                </div>
            </div>
        </div>
    );
}

export default StoryLeftPcCommonBtnC;
