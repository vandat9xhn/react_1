import React from 'react';
import PropTypes from 'prop-types';
//
import './FsPPrPhoneStep.scss';
import IconSent from '../../../../../../../../../_icons_svg/icons_status_message/icon_sent/IconSent';

//
FsPPrPhoneStep.propTypes = {};

function FsPPrPhoneStep({ c_step, step, title, step_count }) {
    //
    return (
        <div
            className={`FsPPrPhoneStep padding-top-20px display-flex-center flex-col ${
                c_step == step_count - 1
                    ? 'color-fashion'
                    : c_step == step
                    ? 'text-blue'
                    : c_step > step
                    ? 'FsPPrPhoneStep-active'
                    : 'text-del-05'
            }`}
        >
            <div className="padding-x-15px bg-primary">
                <div className="FsPPrPhoneStep_contain display-flex-center brs-50 font-18px">
                    {c_step < step_count - 1 ? (
                        step + 1
                    ) : (
                        <IconSent size_icon="18px" stroke="currentColor" />
                    )}
                </div>
            </div>

            <div className="margin-top-5px font-14px text-cap">{title}</div>
        </div>
    );
}

export default FsPPrPhoneStep;
