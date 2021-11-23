import React from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_FbNoticeAction_L } from '../../../../../../../../_handle_api/fb_notice/action';
//
import { useActionsMultiList } from '../../../../../../../../_hooks/useActionsMultiList';
//
import IconThreeDot from '../../../../../../../../_icons_svg/icon_three_dot/IconThreeDot';
//
import Actions from '../../../../../../../actions/_main/Actions';
import ActionsMultiListContain from '../../../../../../../actions_multi_list/contain/ActionsMultiListContain';
//
import './HeaderNoticeItemAction.scss';

//
const title_action = (
    <div className="HeaderNoticeItemAction_btn display-flex-center brs-50 border-blur bg-primary cursor-pointer hv-bg-blur">
        <IconThreeDot size_icon="18px" color="var(--md-color-third)" />
    </div>
);

//
HeaderNoticeItemAction.propTypes = {};

//
function HeaderNoticeItemAction({ notice_id, ref_scroll_elm, handleAction }) {
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
            handle_API_FbNoticeAction_L({ notice_id: notice_id }),
        handleAction: handleAction,
    });

    // --------

    //
    return (
        <Actions
            title_action={title_action}
            class_action_contain={
                'HeaderNoticeItemAction_contain-pc padding-10px'
            }
            class_action_contain_mb={
                'HeaderNoticeItemAction_contain-mb pos-abs bottom-0 left-0 w-100per bg-primary overflow-y-auto scroll-width-0'
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

export default HeaderNoticeItemAction;
