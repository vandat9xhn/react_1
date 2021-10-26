import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { observerOverflow } from '../../../../../../../../_some_function/observerOverflow';
//
import { handle_API_FbNoticeAction_L } from '../../../../../../../../_handle_api/fb_notice/action';
//
import { useBool } from '../../../../../../../../_hooks/useBool';
import { useForceUpdate } from '../../../../../../../../_hooks/UseForceUpdate';
//
import IconThreeDot from '../../../../../../../../_icons_svg/icon_three_dot/IconThreeDot';
//
import CircleLoading from '../../../../../../../waiting/circle_loading/CircleLoading';
import Actions from '../../../../../../../actions/_main/Actions';
//
import './HeaderNoticeItemAction.scss';

//
HeaderNoticeItemAction.propTypes = {};

//
function HeaderNoticeItemAction({
    notice_id,
    ref_scroll_elm,
    ref_notice_item,

    handleAction,
}) {
    //
    const [state_obj, setStateObj] = useState({
        action_arr: [],
        is_fetching: false,
        has_fetched: false,
    });

    const { action_arr, is_fetching, has_fetched } = state_obj;

    //
    const { is_true, setIsTrue, toggleBool } = useBool();
    const forceUpdate = useForceUpdate();

    //
    useEffect(() => {
        is_true &&
            observerOverflow({
                elm: ref_notice_item.current,
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
    async function getData_NoticeAction() {
        setStateObj((state_obj) => {
            return {
                ...state_obj,
                is_fetching: true,
            };
        });

        const data = await handle_API_FbNoticeAction_L({
            notice_id: notice_id,
        });

        setStateObj((state_obj) => {
            return {
                ...state_obj,
                action_arr: data,
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
        !has_fetched ? getData_NoticeAction() : forceUpdate();
    }

    //
    return (
        <div className="HeaderNoticeItemAction">
            <Actions
                class_action_contain="HeaderNoticeItemAction_action_contain"
                title_action={
                    <div className="HeaderNoticeItemAction_btn display-flex-center brs-50 border-blur bg-primary cursor-pointer hv-bg-blur">
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
                <div className="HeaderNoticeItemAction_contain padding-10px">
                    <div>
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

export default HeaderNoticeItemAction;
