import React from 'react';
import PropTypes from 'prop-types';
//
import './FsPPrPhoneStepError.scss';

//
FsPPrPhoneStepError.propTypes = {};

function FsPPrPhoneStepError({ title }) {
    //
    return (
        <div className="FsPPrPhoneStepError padding-top-20px display-flex-center flex-col text-red">
            <div className="padding-x-15px bg-primary">
                <div className="FsPPrPhoneStep_contain display-flex-center brs-50 font-18px">
                    !
                </div>
            </div>

            <div className="FsPPrPhoneStep_title margin-top-5px font-14px text-cap">
                {title}
            </div>
        </div>
    );
}

export default FsPPrPhoneStepError;
