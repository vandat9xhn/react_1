import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { observerOverflow } from '../../../../../../../../../_some_function/observerOverflow';
//
import { handle_API_FbHeaderMessAction_L } from '../../../../../../../../../_handle_api/message/header_action';
//
import { useBool } from '../../../../../../../../../_hooks/useBool';
import { useForceUpdate } from '../../../../../../../../../_hooks/UseForceUpdate';
//
import IconThreeDot from '../../../../../../../../../_icons_svg/icon_three_dot/IconThreeDot';
//
import CircleLoading from '../../../../../../../../waiting/circle_loading/CircleLoading';
import Actions from '../../../../../../../../actions/_main/Actions';
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
    const [state_obj, setStateObj] = useState({
        list_actions_arr: [] || [[]],
        is_fetching: false,
        has_fetched: false,
    });

    const { list_actions_arr, is_fetching, has_fetched } = state_obj;

    //
    const { is_true, setIsTrue, toggleBool } = useBool();
    const forceUpdate = useForceUpdate();

    //
    useEffect(() => {
        is_true &&
            observerOverflow({
                elm: ref_mess_item.current,
                detectOverflow: ({ entry }) => {
                    return entry.intersectionRatio < 0.5;
                },
                callbackOverflow: ({ entry, observer }) => {
                    handleClose();
                    observer.unobserve(entry.target);
                },
            });
    }, [is_true]);

    // ----

    //
    async function getData_MessageAction() {
        setStateObj((state_obj) => {
            return {
                ...state_obj,
                is_fetching: true,
            };
        });

        const data = await handle_API_FbHeaderMessAction_L({
            room_id: room_id,
        });

        setStateObj((state_obj) => {
            return {
                ...state_obj,
                list_actions_arr: data,
                is_fetching: false,
                has_fetched: true,
            };
        });
    }

    // ----

    //
    function handleClose() {
        setIsTrue(false);
    }

    //
    function callbackOpen() {
        !has_fetched ? getData_MessageAction() : forceUpdate();
    }

    //
    return (
        <div className="HeaderMessItemAction">
            <Actions
                class_action_contain="HeaderMessItemAction_action_contain"
                title_action={
                    <div className="HeaderMessItemAction_btn display-flex-center brs-50 border-blur bg-primary cursor-pointer hv-bg-blur">
                        <IconThreeDot
                            size_icon="18px"
                            color="var(--md-color-third)"
                        />
                    </div>
                }
                use_title={true}
                is_show={is_true}
                scroll_elm={ref_scroll_elm.current}
                //

                toggleShow={toggleBool}
                handleClose={handleClose}
                callbackOpen={callbackOpen}
                callbackClose={handleClose}
            >
                <div className="HeaderMessItemAction_contain padding-10px">
                    <div>
                        {list_actions_arr.map((action_arr, action_ix) => (
                            <div key={action_ix}>
                                {action_ix != 0 ? (
                                    <div className="HeaderMessItemAction_separate margin-y-8px"></div>
                                ) : null}

                                {action_arr.map((item, ix) => (
                                    <div
                                        key={ix}
                                        className="padding-y-6px padding-x-8px font-500 cursor-pointer hv-bg-fb"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleAction(item.name);
                                        }}
                                    >
                                        {item.title}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    {is_fetching ? (
                        <div className="display-flex-center padding-y-15px">
                            <CircleLoading is_fetching={true} />
                        </div>
                    ) : null}
                </div>
            </Actions>
        </div>
    );
}

export default HeaderMessItemAction;
