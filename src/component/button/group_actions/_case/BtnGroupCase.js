import React from 'react';
import PropTypes from 'prop-types';
//
import BtnGroupJoin from '../../../button/group_actions/join/BtnGroupJoin';
import BtnGroupVisit from '../../../button/group_actions/visit/BtnGroupVisit';

//
BtnGroupCase.propTypes = {};

//
function BtnGroupCase({
    action_name,
    group_id,

    use_icon,
    use_title,

    handleAction,
}) {
    //
    if (action_name == 'join') {
        return (
            <BtnGroupJoin
                use_icon={use_icon}
                use_title={use_title}
                handleAction={handleAction}
            />
        );
    }

    //
    if (action_name == 'joined') {
        return (
            <BtnGroupVisit
                use_icon={use_icon}
                use_title={use_title}
                group_id={group_id}
            />
        );
    }

    //
    return null;
}

export default BtnGroupCase;
