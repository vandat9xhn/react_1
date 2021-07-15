import React, { useState } from 'react';
import PropTypes from 'prop-types';

//
FormStepByStep.propTypes = {
    form_step_arr: PropTypes.arrayOf(
        PropTypes.shape({
            can_next: PropTypes.bool,
            can_prev: PropTypes.bool,
            component: PropTypes.element,
        })
    ),
    FormStepNextPrev: PropTypes.func,
};

//
function FormStepByStep({ form_step_arr, FormStepNextPrev }) {
    //
    const [form_state, setFormState] = useState({
        c_step: 0,
    });

    const { c_step } = form_state;

    //
    function handleNextPrev(is_next = true) {
        setFormState({
            ...form_state,
            c_step: c_step + (is_next ? 1 : -1),
        });
    }

    //
    return (
        <div className="FormStepByStep">
            <div>
                <div>
                    <div>
                        {form_step_arr.map((item, ix) => (
                            <div key={`${ix}`}>{item.component}</div>
                        ))}
                    </div>
                </div>

                <div>
                    <FormStepNextPrev
                        c_step={c_step}
                        is_last_step={c_step == form_step_arr.length}
                        can_prev={form_step_arr[c_step].can_prev}
                        can_next={form_step_arr[c_step].can_next}
                        handleNextPrev={handleNextPrev}
                    />
                </div>
            </div>
        </div>
    );
}

export default FormStepByStep;
