import React from 'react';
import PropTypes from 'prop-types';
//
import BtnActionsOther from '../../actions_other/BtnActionsOther';

//
BtnGroupOther.propTypes = {};

//
function BtnGroupOther({
    class_action_contain,
    is_at_body = false,

    handle_API_L,
    handleAction,
}) {
    //
    return (
        <BtnActionsOther
            class_main="BtnGroupOther"
            class_btn={'BtnGroupOther_btn'}
            class_action_contain={class_action_contain}
            is_at_body={is_at_body}
            // 
            handle_API_L={handle_API_L}
            handleAction={handleAction}
        />
    );
}

export default BtnGroupOther;
