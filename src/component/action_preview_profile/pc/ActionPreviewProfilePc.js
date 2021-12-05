import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { initial_profile } from '../../../_initial/profile/InitialProfile';
//
import { handle_API_ProfileInfo_R } from '../../../_handle_api/profile/info';
//
import IconsProfile from '../../../_icons_svg/icons_profile/IconsProfile';
//
import ActionPreviewPc from '../../action_preview/pc/ActionPreviewPc';
import ActionsProfileCase from '../../actions_profile/case/_main/ActionsProfileCase';
import ActionsProfileOther from '../../actions_profile/other/ActionsProfileOther';
import ActionsPreviewPrFriend from '../../action_preview/profile_friend/ActionsPreviewPrFriend';
import ActionsPreviewInfo from '../../action_preview/info/ActionsPreviewInfo';
//
import './ActionPreviewProfilePc.scss';
import { useMounted } from '../../../_hooks/useMounted';

//
const ActionsCaseComponent = ({ item, user_id }) => (
    <ActionsProfileCase
        action_case={item.name}
        user_id={user_id}
        is_at_body={true}
    />
);

//
const ActionsOtherComponent = ({ user_id }) => (
    <ActionsProfileOther user_id={user_id} is_at_body={true} />
);

//
ActionPreviewProfilePc.propTypes = {};

//
function ActionPreviewProfilePc({ user_id, title_action }) {
    //
    const [profile_state, setProfileState] = useState({
        profile: initial_profile(),
        is_fetching: false,
        has_fetched: false,
    });

    const { profile, is_fetching, has_fetched } = profile_state;

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
    const mounted = useMounted();

    // -----

    //
    async function getProfileInfo() {
        setProfileState({
            ...profile_state,
            is_fetching: true,
        });

        const data = await handle_API_ProfileInfo_R({ user_id: user_id });

        if (!mounted) {
            return;
        }

        setProfileState({
            ...profile_state,
            profile: data,
            is_fetching: false,
            has_fetched: true,
        });
    }

    //
    function handleAction(action_name = '') {
        console.log(action_name);
    }

    // ------

    const profile_preview_arr = [
        {
            component: ActionsPreviewPrFriend,
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
        <ActionPreviewPc
            title_action={title_action}
            id={id}
            name={`${first_name} ${last_name}`}
            picture={picture}
            link_to={`/profile/${id}`}
            is_fetching={is_fetching}
            has_fetched={has_fetched}
            //
            preview_arr={profile_preview_arr}
            action_case_arr={action_case_arr}
            case_props={{ user_id: id }}
            other_case_props={{ user_id: id }}
            //
            getData_API={getProfileInfo}
            handleAction={handleAction}
            //
            ActionsCaseComponent={ActionsCaseComponent}
            ActionsOtherComponent={ActionsOtherComponent}
        />
    );
}

export default ActionPreviewProfilePc;
