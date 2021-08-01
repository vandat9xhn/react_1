import React from 'react';
import PropTypes from 'prop-types';
//
import './StoryStep.scss';

//
StoryStep.propTypes = {};

//
function StoryStep({ count_step, active_step }) {
    console.log(count_step, active_step);
    //
    return (
        <div className="display-flex-center flex-nowrap">
            {Array(count_step)
                .fill(0)
                .map((_, ix) => (
                    <div key={`${ix}`} className="StoryStep_item flex-grow-1">
                        <div
                            className={`StoryStep_item-contain bg-primary ${
                                ix <= active_step ? 'opacity-1' : 'opacity-05'
                            }`}
                        ></div>
                    </div>
                ))}
        </div>
    );
}

export default StoryStep;
