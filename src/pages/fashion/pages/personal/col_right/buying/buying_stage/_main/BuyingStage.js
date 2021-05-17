import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import StepperDiv from '../../../../../../../../component/some_div/stepper_div/StepperDiv';
//
import { StageComponents } from '../stage_components/_main/StageComponents';
//
import './BuyingStage.scss';

//
BuyingStage.propTypes = {
    count_stage: PropTypes.number,
    completed_stage_ix: PropTypes.number,
    handleChooseStep: PropTypes.func,
};

//
function BuyingStage(props) {
    const { count_stage, completed_stage_ix, handleChooseStep } = props;
    //
    const ref_buying_state = useRef(null);
    //
    useEffect(() => {
        completed_stage_ix - 1 &&
            ref_buying_state.current.scrollWidth &&
            ref_buying_state.current.scroll(
                ((ref_buying_state.current.scrollWidth -
                    ref_buying_state.current.clientWidth) *
                    (completed_stage_ix - 1)) /
                    (count_stage - 1),
                0
            );
    }, []);

    //
    return (
        <div ref={ref_buying_state} className="BuyingStage">
            <div className="BuyingStage_contain">
                <StepperDiv
                    stage_arr={StageComponents}
                    count_stage={count_stage}
                    completed_stage_ix={completed_stage_ix}
                    handleChooseStep={handleChooseStep}
                />
            </div>
        </div>
    );
}

export default BuyingStage;
