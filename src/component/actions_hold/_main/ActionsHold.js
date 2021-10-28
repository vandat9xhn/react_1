import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../_constant/Constant';
//
import ActionsHoldPc from '../pc/ActionsHoldPc';

//
ActionsHold.propTypes = {};

//
function ActionsHold({ title_action, children }) {
    //
    if (IS_MOBILE) {
        return title_action;
    }

    return (
        <ActionsHoldPc title_action={title_action}>{children}</ActionsHoldPc>
    );
}

export default ActionsHold;
