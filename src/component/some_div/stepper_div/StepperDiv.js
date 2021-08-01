import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//
import './StepperDiv.scss';

//
StepperDiv.propTypes = {
    stage_arr: PropTypes.arrayOf(
        PropTypes.shape({
            component: PropTypes.func,
        })
    ),
    count_stage: PropTypes.number,
    completed_stage_ix: PropTypes.number,
};

StepperDiv.defaultProps = {
    stage_arr: [{ component: () => <div></div> }],
    count_stage: 1,
    completed_stage_ix: 0,
};

//
function StepperDiv({
    stage_arr,
    count_stage,
    completed_stage_ix,
    handleChooseStep,
}) {
    //
    return (
        <div className="StepperDiv">
            <div className="StepperDiv_row">
                {stage_arr.map((stage, stage_ix) => (
                    <div
                        key={`StepperDiv_${stage_ix}`}
                        className="StepperDiv_stage cursor-pointer"
                        onClick={() => handleChooseStep(stage_ix)}
                    >
                        <stage.component
                            is_active={completed_stage_ix >= stage_ix + 1}
                        />
                    </div>
                ))}
            </div>

            <div className="StepperDiv_line stepper-line"></div>
            <div
                className="StepperDiv_line-active stepper-line-active"
                style={{
                    width: `${(100 * completed_stage_ix) / count_stage}%`,
                }}
            ></div>
        </div>
    );
}

export default StepperDiv;
