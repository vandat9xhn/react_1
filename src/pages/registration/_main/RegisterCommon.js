import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../_constant/Constant';
//
import Registration from '../one_page/Registration';
import RegisterStep from '../step_by_step/_main/RegisterStep';

//
RegisterCommon.propTypes = {};

//
function RegisterCommon(props) {
    //
    return (
        <div>
            <div>
                {IS_MOBILE && innerWidth <= 400 ? (
                    <RegisterStep />
                ) : (
                    <Registration />
                )}
            </div>
        </div>
    );
}

export default RegisterCommon;
