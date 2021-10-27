import React from 'react';
import PropTypes from 'prop-types';
//
import CmtActionItem from '../item/CmtActionItem';
import CircleLoading from '../../../../../../waiting/circle_loading/CircleLoading';
import ActionsMultiListContain from '../../../../../../actions_multi_list/contain/ActionsMultiListContain';

//
CmtActionContain.propTypes = {};

//
function CmtActionContain({
    list_action_arr,
    is_fetching,

    handleClose,
    handleAction,
}) {
    //
    return (
        <div className="CmtActionContain">
            <ActionsMultiListContain
                list_action_arr={list_action_arr}
                is_fetching={is_fetching}
                //
                handleAction={handleAction}
                handleClose={handleClose}
            />
        </div>
    );
}

export default CmtActionContain;
