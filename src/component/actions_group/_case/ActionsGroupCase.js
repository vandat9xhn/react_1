import React from 'react';
import PropTypes from 'prop-types';
// 
import BtnGroupJoin from '../../button/group_actions/join/BtnGroupJoin';
import BtnGroupVisit from '../../button/group_actions/visit/BtnGroupVisit';

//
ActionsGroupCase.propTypes = {};

//
function ActionsGroupCase({
    action_name,
    group_id,

    handleAction,
}) {
    //
    if (action_name == 'join') {
        return <BtnGroupJoin handleAction={handleAction} />;
    }

    //
    if (action_name == 'joined') {
        return <BtnGroupVisit group_id={group_id} />;
    }

    //
    return null;
}

export default ActionsGroupCase;
