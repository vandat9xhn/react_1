import React from 'react';
import PropTypes from 'prop-types';
//
import BtnGroupJoin from '../../button/group_actions/join/BtnGroupJoin';
import ActionsGroupJoined from '../joined/ActionsGroupJoined';

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
        return (
            <BtnGroupJoin
                // className={''}
                // title={title}
                // Icon={Icon}
                handleAction={handleAction}
            />
        );
    }

    //
    if (action_name == 'joined') {
        return (
            <ActionsGroupJoined
                group_id={group_id}
                handleAction={handleAction}
            />
        );
    }

    //
    return null;
}

export default ActionsGroupCase;
