import React from 'react';
import PropTypes from 'prop-types';
//
import './StepperDiv.scss';

//
StepperDiv.propTypes = {
    step_arr: PropTypes.arrayOf(
        PropTypes.shape({
            component: PropTypes.func,
            props: PropTypes.object,
        })
    ),
    c_step: PropTypes.number,
};

//
function StepperDiv({ step_arr, c_step }) {
    //
    return (
        <div className="StepperDiv pos-rel">
            <div className="StepperDiv_row display-flex space-between">
                {step_arr.map((step_obj, ix) => (
                    <div
                        key={ix}
                        className="StepperDiv_stage pos-rel z-index-lv1"
                    >
                        <step_obj.component
                            c_step={c_step}
                            step={ix}
                            {...step_obj.props}
                        />
                    </div>
                ))}
            </div>

            <div className="StepperDiv_line_width pos-abs left-0 w-100per y-center">
                <div className="StepperDiv_line stepper-line"></div>

                <div
                    className="StepperDiv_line-active stepper-line-active"
                    style={{
                        width: `${(100 * c_step) / (step_arr.length - 1)}%`,
                    }}
                ></div>
            </div>
        </div>
    );
}

export default StepperDiv;
