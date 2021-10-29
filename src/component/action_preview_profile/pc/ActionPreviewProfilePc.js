import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { initial_profile } from '../../../_initial/profile/InitialProfile';
//
import { handle_API_ProfileInfo_R } from '../../../_handle_api/profile/info';
//
import { useForceUpdate } from '../../../_hooks/UseForceUpdate';
import { useHold } from '../../../_hooks/useHold';
//
import IconsProfile from '../../../_icons_svg/icons_profile/IconsProfile';
import CircleLoading from '../../waiting/circle_loading/CircleLoading';
//
import ActionsPc from '../../actions/pc/_main/ActionsPc';
import ActionsProfileCase from '../../actions_profile/case/_main/ActionsProfileCase';
import ActionsProfileOther from '../../actions_profile/other/ActionsProfileOther';
import ActionsPreviewFriend from '../friend/ActionsPreviewFriend';
import ActionsPreviewInfo from '../info/ActionsPreviewInfo';
//
import './ActionPreviewProfilePc.scss';

//
ActionPreviewProfilePc.propTypes = {};

//
function ActionPreviewProfilePc({ user_id, title_action }) {
    //
    const [profile_state, setProfileState] = useState({
        profile: initial_profile(),
        is_fetching: false,
        has_fetched: false,

        show_count: 0,
    });

    const { profile, is_fetching, has_fetched, show_count } = profile_state;

    const {
        id,
        first_name,
        last_name,
        picture,

        mutual_friend_count,
        friend_arr,

        time_to_birth,
        town,
        university,

        action_case_arr,
    } = profile;

    //
    const { StartHold, StopHold } = useHold({
        time: 100,
        time_holding_start: 400,
    });
    const forceUpdate = useForceUpdate();

    //
    async function getProfileInfo() {
        setProfileState({
            ...profile_state,
            is_fetching: true,
        });

        const data = await handle_API_ProfileInfo_R({ user_id: user_id });

        setProfileState({
            ...profile_state,
            profile: data,
            is_fetching: false,
            has_fetched: true,
        });
    }

    // -----

    //
    function handleChangeShowCount(is_up = true) {
        setProfileState((profile_state) => {
            const new_show_count = profile_state.show_count + (is_up ? 1 : -1);

            return {
                ...profile_state,
                show_count: new_show_count <= 0 ? 0 : 1,
            };
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
        !has_fetched ? getProfileInfo() : forceUpdate();
    }

    //
    function handleAction(action_name = '') {
        console.log(action_name);
    }

    // ------

    const profile_preview_arr = [
        {
            component: ActionsPreviewFriend,
            props: {
                mutual_friend_count: mutual_friend_count,
                friend_arr: friend_arr,
            },
            can_show: mutual_friend_count > 0,
        },
        {
            component: ActionsPreviewInfo,
            props: {
                Icon: <IconsProfile />,
                title: 'Studied at',
                info: university,
            },
            can_show: !!university,
        },
        {
            component: ActionsPreviewInfo,
            props: {
                Icon: <IconsProfile />,
                title: `${
                    time_to_birth == 0
                        ? `Today is`
                        : `${time_to_birth} day${
                              time_to_birth >= 2 ? 's' : ''
                          } to`
                } birthday of ${last_name}`,
                info: `${
                    time_to_birth == 0 ? `Happy birthday to ${last_name}` : ''
                }`,
            },
            can_show: time_to_birth >= 0,
        },
        {
            component: ActionsPreviewInfo,
            props: {
                Icon: <IconsProfile />,
                title: 'Lives in',
                info: town,
            },
            can_show: !!town,
        },
    ];

    //
    return (
        <ActionsPc
            title_action={
                <div
                    className="ActionPreviewProfilePc_title display-inherit cursor-pointer hv-underline"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {title_action}
                </div>
            }
            class_action_contain="ActionPreviewProfilePc"
            use_own_title={true}
            is_show={show_count > 0}
            // scroll_elm={scroll_elm}
            //
            // toggleShow={toggleShow}
            callbackOpen={callbackOpen}
            // callbackClose={callbackClose}
        >
            <div
                className="ActionPreviewProfilePc_contain"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {has_fetched ? (
                    <div className={`${is_fetching ? 'display-none' : ''}`}>
                        <div className="display-flex">
                            <div>
                                <Link to={`/profile/${id}`}>
                                    <img
                                        className="brs-50 object-fit-cover"
                                        src={picture}
                                        alt=""
                                        width="96"
                                        height="96"
                                    />
                                </Link>
                            </div>

                            <div className="ActionPreviewProfilePc_right padding-left-16px overflow-hidden">
                                <div className="margin-y-8px text-nowrap">
                                    <Link
                                        className="font-20px font-700 color-inherit hv-underline"
                                        to={`/profile/${id}`}
                                    >
                                        {first_name} {last_name}
                                    </Link>
                                </div>

                                {profile_preview_arr.map((item, ix) =>
                                    item.can_show ? (
                                        <div key={ix} className="margin-y-8px">
                                            <item.component {...item.props} />
                                        </div>
                                    ) : null
                                )}
                            </div>
                        </div>

                        <div className="display-flex flex-wrap padding-top-15px">
                            {action_case_arr.map((item, ix) => (
                                <div
                                    key={ix}
                                    className="ActionPreviewProfilePc_btn ActionPreviewProfilePc_btn_main flex-grow-1"
                                >
                                    <ActionsProfileCase
                                        action_case={item.name}
                                        user_id={user_id}
                                        is_at_body={true}
                                        handleAction={handleAction}
                                    />
                                </div>
                            ))}

                            <div className="ActionPreviewProfilePc_btn">
                                <ActionsProfileOther
                                    user_id={user_id}
                                    class_action_contain={`ActionPreviewProfilePc_other_contain`}
                                    is_at_body={true}
                                    handleAction={handleAction}
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
    );
}

export default ActionPreviewProfilePc;
