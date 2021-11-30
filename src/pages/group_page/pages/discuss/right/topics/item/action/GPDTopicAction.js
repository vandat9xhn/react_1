import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { useActionsMultiList } from '../../../../../../../../_hooks/useActionsMultiList';
//
import Actions from '../../../../../../../../component/actions/_main/Actions';
import ActionsMultiListContain from '../../../../../../../../component/actions_multi_list/contain/ActionsMultiListContain';

//
GPDTopicAction.propTypes = {};

//
function GPDTopicAction({ ix, is_hidden, handleAction }) {
    //
    const {
        list_action_arr,
        is_fetching,
        has_fetched,
        is_true,

        setStateObj,

        toggleBool,
        handleClose,
        callbackOpen,
        callbackClose,
    } = useActionsMultiList({
        handle_API_L: handle_API_L,
    });

    // --------

    //
    function handle_API_L() {
        return is_hidden
            ? [[{ name: 'unhide', title: 'Unhide topic' }]]
            : [[{ name: 'hide', title: 'Hide topic' }]];
    }

    //
    function onAction(action_name = '') {
        handleAction({ ix: ix, action_name: action_name });
    }

    //
    useEffect(() => {
        if (has_fetched) {
            setStateObj((state_obj) => {
                return {
                    ...state_obj,
                    list_action_arr: is_hidden
                        ? [[{ name: 'unhide', title: 'Unhide topic' }]]
                        : [[{ name: 'hide', title: 'Hide topic' }]],
                };
            });
        }
    }, [is_hidden]);

    //
    return (
        <div>
            <Actions
                class_action_contain={`action-contain-pc`}
                class_action_contain_mb={'action-contain-mb-bottom'}
                is_show={is_true}
                //
                x_always="right"
                //
                toggleShow={toggleBool}
                handleClose={handleClose}
                callbackOpen={callbackOpen}
                callbackClose={callbackClose}
            >
                <ActionsMultiListContain
                    list_action_arr={list_action_arr}
                    is_fetching={is_fetching}
                    class_separate={'h-1px'}
                    //
                    // ComponentItem={ComponentItem}
                    handleAction={onAction}
                    handleClose={handleClose}
                />
            </Actions>
        </div>
    );
}

export default GPDTopicAction;
