import React from 'react';
import PropTypes from 'prop-types';
//
import Registration from '../one_page/Registration';
import RegisterStep from '../step_by_step/_main/RegisterStep';

//
RegisterCommon.propTypes = {};

//
function RegisterCommon(props) {
    return (
        <div>
            <div>
                {localStorage.is_mobile == 1 && innerWidth <= 400 ? (
                    <RegisterStep />
                ) : (
                    <Registration />
                )}
            </div>
        </div>
    );
}

export default RegisterCommon;
