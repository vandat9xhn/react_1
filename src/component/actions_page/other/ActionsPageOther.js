import React from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_PageActions_L } from '../../../_handle_api/fb_page/action';
//
import BtnActionsOther from '../../button/actions_other/BtnActionsOther';

//
ActionsPageOther.propTypes = {};

//
function ActionsPageOther({
    page_id,
    class_action_contain,
    is_at_body,

    handleAction,
}) {
    //
    async function getData_PageActionsOther() {
        const data = await handle_API_PageActions_L({
            page_id: page_id,
            type: 'other',
        });

        return data;
    }

    //
    return (
        <BtnActionsOther
            class_main={'BtnPageOther'}
            class_btn={'BtnPageOther_btn'}
            //
            is_at_body={is_at_body}
            class_action_contain={class_action_contain}
            //
            handle_API_L={getData_PageActionsOther}
            handleAction={handleAction}
        />
    );
}

export default ActionsPageOther;
