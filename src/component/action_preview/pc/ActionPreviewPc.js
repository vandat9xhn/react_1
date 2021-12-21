import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { useForceUpdate } from '../../../_hooks/UseForceUpdate';
import { useHold } from '../../../_hooks/useHold';
//
import CircleLoading from '../../waiting/circle_loading/CircleLoading';
//
import ActionsPc from '../../actions/pc/_main/ActionsPc';
//
import './ActionPreviewPc.scss';

//
ActionPreviewPc.propTypes = {};

//
function ActionPreviewPc({
    title_action,
    class_action_contain,

    pos_orientation,
    x_always,
    y_always,

    use_caret = false,

    id,
    name,
    picture,
    link_to,

    is_fetching,
    has_fetched,

    preview_arr,
    action_case_arr,
    case_props,
    other_case_props,

    getData_API,
    handleAction,

    ActionsCaseComponent,
    ActionsOtherComponent,
}) {
    //
    const [show_count, setShowCount] = useState(0);

    //
    const { StartHold, StopHold } = useHold({
        time: 100,
        time_holding_start: 400,
    });
    const forceUpdate = useForceUpdate();

    // -----

    //
    function handleChangeShowCount(is_up = true) {
        setShowCount((show_count) => {
            const new_show_count = show_count + (is_up ? 1 : -1);

            return new_show_count <= 0 ? 0 : 1;
        });
    }

    // ------

    //
    function handleMouseEnter() {
        if (show_count == 0) {
            StartHold(() => {
                handleChangeShowCount(true);
            });
        } else {
            handleChangeShowCount(true);
        }
    }

    //
    function handleMouseLeave() {
        StopHold();
        handleChangeShowCount(false);
    }

    //
    function callbackOpen() {
        !has_fetched ? getData_API() : forceUpdate();
    }

    //
    return (
        <div
            className="ActionPreviewPc display-inherit"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <ActionsPc
                title_action={
                    <div
                        className="ActionPreviewPc_title display-inherit cursor-pointer hv-underline"
                        // onMouseEnter={handleMouseEnter}
                        // onMouseLeave={handleMouseLeave}
                    >
                        {title_action}
                    </div>
                }
                class_action_contain={`ActionPreviewPc ${class_action_contain}`}
                use_own_title={true}
                is_show={show_count > 0}
                //
                pos_orientation={pos_orientation}
                x_always={x_always}
                y_always={y_always}
                // scroll_elm={scroll_elm}
                use_caret={use_caret}
                //
                // toggleShow={toggleShow}
                callbackOpen={callbackOpen}
                // callbackClose={callbackClose}
            >
                <div
                    className="ActionPreviewPc_contain"
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                >
                    {has_fetched ? (
                        <div className={`${is_fetching ? 'display-none' : ''}`}>
                            <div className="display-flex">
                                <div className="flex-shrink-0">
                                    <Link
                                        className="display-block brs-50 overflow-hidden hv-after-shadow-05"
                                        to={link_to}
                                    >
                                        <img
                                            className="ActionPreviewPc_pic brs-50 border-blur object-fit-cover"
                                            src={picture}
                                            alt=""
                                            width="96"
                                            height="96"
                                        />
                                    </Link>
                                </div>

                                <div className="ActionPreviewPc_right padding-left-16px overflow-hidden">
                                    <div className="margin-y-8px text-nowrap">
                                        <Link
                                            className="font-20px font-700 color-inherit hv-underline"
                                            to={link_to}
                                        >
                                            {name}
                                        </Link>
                                    </div>

                                    <div className="ActionPreviewPc_preview">
                                        {preview_arr.map((item, ix) =>
                                            item.can_show ? (
                                                <div
                                                    key={ix}
                                                    className="margin-y-8px"
                                                >
                                                    <item.component
                                                        {...item.props}
                                                    />
                                                </div>
                                            ) : null
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="display-flex flex-wrap padding-top-15px">
                                {action_case_arr.map((item, ix) => (
                                    <div
                                        key={ix}
                                        className="ActionPreviewPc_btn ActionPreviewPc_btn_main flex-grow-1"
                                    >
                                        <ActionsCaseComponent
                                            item={item}
                                            handleAction={handleAction}
                                            {...case_props}
                                        />
                                    </div>
                                ))}

                                <div className="ActionPreviewPc_btn">
                                    <ActionsOtherComponent
                                        class_action_contain={`ActionPreviewPc_other_contain`}
                                        handleAction={handleAction}
                                        {...other_case_props}
                                    />
                                </div>
                            </div>
                        </div>
                    ) : null}

                    <div
                        className={`${
                            is_fetching ? 'display-flex-center' : 'display-none'
                        }`}
                    >
                        <CircleLoading is_fetching={is_fetching} />
                    </div>
                </div>
            </ActionsPc>
        </div>
    );
}

export default ActionPreviewPc;
