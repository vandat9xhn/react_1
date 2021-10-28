import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../_constant/Constant';
//
import ActionPreviewProfilePc from '../pc/ActionPreviewProfilePc';

//
ActionPreviewProfile.propTypes = {};

//
function ActionPreviewProfile({ user_id, title_action }) {
    //
    if (IS_MOBILE) {
        return title_action;
    }

    return (
        <ActionPreviewProfilePc user_id={user_id} title_action={title_action} />
    );
}

export default ActionPreviewProfile;
