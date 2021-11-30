import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../_constant/Constant';
//
import PortalAtBody from '../portal/at_body/PortalAtBody';
import CloseDiv from '../some_div/close_div/CloseDiv';
import ActionsContainMb from '../actions/mobile/contain/ActionsContainMb';

//
CloseDivPcMb.propTypes = {};

//
function CloseDivPcMb({
    class_actions = 'action-contain-mb-bottom',
    class_action_contain_mb,

    refs_target,
    children,

    handleClose,
    callbackOpen,
    makeDivHidden,
}) {
    //
    return IS_MOBILE ? (
        <PortalAtBody>
            <ActionsContainMb
                class_actions={class_actions}
                class_action_contain_mb={class_action_contain_mb}
                handleClose={handleClose}
                callbackOpen={callbackOpen}
            >
                {children}
            </ActionsContainMb>
        </PortalAtBody>
    ) : (
        <CloseDiv makeDivHidden={makeDivHidden} refs_target={refs_target}>
            <div className="CloseDivPcMb_pos-pc pos-abs top-100per right-0 z-index-1 w-250px">
                {children}
            </div>
        </CloseDiv>
    );
}

export default CloseDivPcMb;
