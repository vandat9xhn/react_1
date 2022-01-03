import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { useActionsMultiList } from '../../../_hooks/useActionsMultiList';
//
import Actions from '../../actions/_main/Actions';
//
import ActionsMultiListContain from '../contain/ActionsMultiListContain';
//
import './ActionsMultiList.scss';

//
ActionsMultiList.propTypes = {
    title_action: Actions.propTypes.title_action,
    class_separate: PropTypes.string,
    ComponentItem: PropTypes.func,

    handle_API_L: PropTypes.func,
    handleAction: PropTypes.func,
};

ActionsMultiList.defaultProps = {};

//
function ActionsMultiList({
    title_action,
    class_action_contain,
    use_title,

    scroll_elm,
    pos_orientation,
    is_at_body,
    getActionsScrollElms,

    x_always,
    y_always,
    transform_x_more,
    transform_y_more,

    class_separate,
    deps_reset_api,
    
    ComponentItem,
    handle_API_L,
    handleAction,

    whenIsShowChange,
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
        handle_API_L: handle_API_L,
        deps_reset_api: deps_reset_api,
    });

    //
    useEffect(() => {
        whenIsShowChange && whenIsShowChange(is_true);
    }, [is_true]);

    //
    return (
        <div className="ActionsMultiList">
            <Actions
                title_action={title_action}
                class_action_contain={`action-contain-pc ${class_action_contain}`}
                class_action_contain_mb={'action-contain-mb-bottom'}
                use_title={use_title}
                is_show={is_true}
                //
                scroll_elm={scroll_elm}
                pos_orientation={pos_orientation}
                is_at_body={is_at_body}
                getActionsScrollElms={getActionsScrollElms}
                //
                x_always={x_always}
                y_always={y_always}
                transform_x_more={transform_x_more}
                transform_y_more={transform_y_more}
                //
                toggleShow={toggleBool}
                handleClose={handleClose}
                callbackOpen={callbackOpen}
                callbackClose={callbackClose}
            >
                <ActionsMultiListContain
                    list_action_arr={list_action_arr}
                    is_fetching={is_fetching}
                    class_separate={class_separate}
                    //
                    ComponentItem={ComponentItem}
                    handleAction={handleAction}
                    handleClose={handleClose}
                />
            </Actions>
        </div>
    );
}

export default ActionsMultiList;
