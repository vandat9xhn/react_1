import React from 'react';
import PropTypes from 'prop-types';
//
import StepperDiv from '../../../../../../../../../../component/some_div/stepper_div/StepperDiv';
//
import FsPPrPhoneStep from '../item/FsPPrPhoneStep';
import FsPPrPhoneStepError from '../item_error/FsPPrPhoneStepError';
//
import './FsPPrPhoneSteps.scss';
import { IS_MOBILE } from '../../../../../../../../../../_constant/Constant';

//
FsPPrPhoneSteps.propTypes = {};

//
function FsPPrPhoneSteps({ c_step, step_error }) {
    //
    const step_arr = [
        'Xác minh',
        'Chứng thực',
        IS_MOBILE ? 'Cập nhật' : 'Cập nhật số điện thoại',
        'Hoàn thành',
    ].map((item, ix) => {
        return {
            component: ix == step_error ? FsPPrPhoneStepError : FsPPrPhoneStep,
            props: {
                title: item,
                step_count: 4,
            },
        };
    });

    //
    return (
        <div
            className={`FsPPrPhoneSteps ${
                c_step == step_arr.length - 1
                    ? 'FsPPrPhoneSteps-done'
                    : 'FsPPrPhoneSteps-process'
            }`}
        >
            <StepperDiv step_arr={step_arr} c_step={c_step} />
        </div>
    );
}

export default FsPPrPhoneSteps;
