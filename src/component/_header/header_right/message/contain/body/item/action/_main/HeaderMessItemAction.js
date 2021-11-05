import React from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_FbHeaderMessAction_L } from '../../../../../../../../../_handle_api/message/header_action';
//
import { useActionsMultiList } from '../../../../../../../../../_hooks/useActionsMultiList';
//
import IconThreeDot from '../../../../../../../../../_icons_svg/icon_three_dot/IconThreeDot';
//
import Actions from '../../../../../../../../actions/_main/Actions';
import ActionsMultiListContain from '../../../../../../../../actions_multi_list/contain/ActionsMultiListContain';
//
import './HeaderMessItemAction.scss';

//
HeaderMessItemAction.propTypes = {};

//
function HeaderMessItemAction({
    room_id,
    ref_scroll_elm,
    ref_mess_item,

    handleAction,
}) {
    //
    const {
        list_action_arr,
        is_fetching,
        is_true,

        toggleBool,
        handleClose,
        callbackOpen,
        callbackClose,
    } = useActionsMultiList({
        handle_API_L: () =>
            handle_API_FbHeaderMessAction_L({ room_id: room_id }),
        handleAction: handleAction,
    });

    // -------

    //
    const title_action = (
        <div className="HeaderMessItemAction_btn display-flex-center brs-50 border-blur bg-primary cursor-pointer hv-bg-blur btn-active">
            <IconThreeDot size_icon="18px" color="var(--md-color-third)" />
        </div>
    );

    //
    return (
        <Actions
            title_action={title_action}
            class_action_contain={
                'HeaderMessItemAction_contain-pc padding-10px'
            }
            class_action_contain_mb={
                'HeaderMessItemAction_contain-mb pos-abs bottom-0 left-0 w-100per bg-primary overflow-y-auto scroll-width-0'
            }
            //
            use_title={true}
            is_show={is_true}
            scroll_elm={ref_scroll_elm.current}
            //

            toggleShow={toggleBool}
            handleClose={handleClose}
            callbackOpen={callbackOpen}
            callbackClose={callbackClose}
        >
            <ActionsMultiListContain
                list_action_arr={list_action_arr}
                is_fetching={is_fetching}
                // class_separate={class_separate}
                //
                handleClose={handleClose}
                handleAction={handleAction}
            />
        </Actions>
    );
}

export default HeaderMessItemAction;
