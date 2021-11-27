import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../_constant/Constant';
//
import ActionPreviewGroupPc from '../pc/ActionPreviewGroupPc';

//
ActionPreviewGroup.propTypes = {};

//
function ActionPreviewGroup({ group_id, title_action }) {
    //
    if (IS_MOBILE) {
        return title_action;
    }

    return (
        <ActionPreviewGroupPc group_id={group_id} title_action={title_action} />
    );
}

export default ActionPreviewGroup;
