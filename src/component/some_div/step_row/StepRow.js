import React from 'react';
import PropTypes from 'prop-types';
//
import './StepRow.scss';

//
StepRow.propTypes = {
    count_step: PropTypes.number,
    active_step: PropTypes.number,
};

//
function StepRow({ count_step, active_step }) {
    // console.log(count_step, active_step);
    //
    return (
        <div className="display-flex-center flex-nowrap">
            {Array(count_step)
                .fill(0)
                .map((_, ix) => (
                    <div key={`${ix}`} className="StepRow_item flex-grow-1">
                        <div
                            className={`StepRow_item-contain bg-primary ${
                                ix <= active_step ? 'opacity-1' : 'opacity-05'
                            }`}
                        ></div>
                    </div>
                ))}
        </div>
    );
}

export default StepRow;
