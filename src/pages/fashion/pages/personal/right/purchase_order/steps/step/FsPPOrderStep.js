import React from 'react';
import PropTypes from 'prop-types';
//
import { formatLocalDateTimeString } from '../../../../../../../../_some_function/FormatDate';
//
import './FsPPOrderStep.scss';

//
FsPPOrderStep.propTypes = {};

//
function FsPPOrderStep({ c_step, step, Icon, title, date_time }) {
    //
    return (
        <div
            className={`FsPPOrderStep display-flex-center flex-col ${
                c_step >= step ? 'FsPPOrderStep-done' : 'text-third'
            }`}
        >
            <div
                className={`FsPPOrderStep_icon brs-50 display-flex-center bg-primary ${
                    c_step >= step ? 'FsPPOrderStep_icon-done' : ''
                }`}
            >
                {Icon}
            </div>

            <div className="FsPPOrderStep_title margin-top-20px margin-bottom-5px text-cap text-align-center">
                {title}
            </div>

            <div className="FsPPOrderStep_time text-third font-12px">
                {formatLocalDateTimeString(date_time)}
            </div>
        </div>
    );
}

export default FsPPOrderStep;
