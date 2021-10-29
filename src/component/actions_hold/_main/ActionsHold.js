import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../_constant/Constant';
//
import ActionsHoldPc from '../pc/ActionsHoldPc';
import ActionsHoldMb from '../mobile/ActionsHoldMb';

//
ActionsHold.propTypes = {};

//
function ActionsHold({ title_action, force_close, children }) {
    //
    if (IS_MOBILE) {
        return (
            <ActionsHoldMb
                title_action={title_action}
                force_close={force_close}
            >
                {children}
            </ActionsHoldMb>
        );
    }

    return (
        <ActionsHoldPc title_action={title_action}>{children}</ActionsHoldPc>
    );
}

export default ActionsHold;
