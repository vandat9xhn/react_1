import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { UnitNumber } from '../../../_some_function/UnitNumber';
//
import { initial_group_preview } from '../../../_initial/group/preview';
//
import { handle_API_GroupPreview_R } from '../../../_handle_api/fb_group/preview';
//
import { useMounted } from '../../../_hooks/useMounted';
// 
import IconFriends from '../../../_icons_svg/icon_friends/IconFriends';
import IconPublic from '../../../_icons_svg/icon_public/IconPublic';
import IconPrivate from '../../../_icons_svg/icon_private/IconPrivate';
//
import ActionPreviewPc from '../../action_preview/pc/ActionPreviewPc';
import ActionsPreviewInfo from '../../action_preview/info/ActionsPreviewInfo';
import ActionsGroupOther from '../../actions_group/other/ActionsGroupOther';
import BtnGroupCase from '../../button/group_actions/_case/BtnGroupCase';
//
import './ActionPreviewGroupPc.scss';

//
function ActionsCaseComponent({ item, group_id, handleAction }) {
    return (
        <BtnGroupCase
            action_name={item.action_name}
            group_id={group_id}
            handleAction={handleAction}
        />
    );
}

//
const ActionsOtherComponent = ({
    group_id,
    class_action_contain,
    handleAction,
}) => (
    <ActionsGroupOther
        group_id={group_id}
        is_at_body={true}
        class_action_contain={class_action_contain}
        handleAction={handleAction}
    />
);

//
ActionPreviewGroupPc.propTypes = {};

//
function ActionPreviewGroupPc({ group_id, title_action }) {
    //
    const [group_state, setGroupState] = useState({
        group: initial_group_preview(),
        is_fetching: false,
        has_fetched: false,
    });

    const { group, is_fetching, has_fetched } = group_state;

    const {
        id,
        name,
        picture,

        joined,
        privacy,

        member_count,
        friend_count,
        friend_arr,
    } = group;

    const action_case_arr = [{ action_name: joined ? 'joined' : 'join' }];

    //
    const mounted = useMounted();

    // --------

    //
    async function getGroupInfo() {
        setGroupState({
            ...group_state,
            is_fetching: true,
        });

        const data = await handle_API_GroupPreview_R({ group_id: group_id });

        if (!mounted) {
            return;
        }

        setGroupState({
            ...group_state,
            group: data,
            is_fetching: false,
            has_fetched: true,
        });
    }

    //
    function handleAction(action_name = '') {
        console.log(action_name);
    }

    // ------

    const group_preview_arr = [
        {
            component: ActionsPreviewInfo,
            can_show: true,
            props: {
                Icon:
                    privacy.toUpperCase() == 'PUBLIC' ? (
                        <IconPublic />
                    ) : (
                        <IconPrivate />
                    ),
                info: '',
                title: `${privacy} Group`,
            },
        },
        {
            component: ActionsPreviewInfo,
            can_show: true,
            props: {
                Icon: <IconFriends />,
                info: '',
                title: `${
                    friend_count
                        ? `${friend_count} friend${
                              friend_count >= 2 ? 's' : ''
                          } · `
                        : ''
                }${UnitNumber(member_count)} member${
                    member_count >= 2 ? 's' : ''
                }`,
            },
        },
    ];

    //
    return (
        <ActionPreviewPc
            title_action={title_action}
            class_action_contain={'ActionPreviewGroupPc'}
            //
            id={id}
            name={name}
            picture={picture}
            link_to={`/group/${id}`}
            //
            is_fetching={is_fetching}
            has_fetched={has_fetched}
            //
            preview_arr={group_preview_arr}
            action_case_arr={action_case_arr}
            case_props={{ group_id: id }}
            other_case_props={{ group_id: id }}
            //
            getData_API={getGroupInfo}
            handleAction={handleAction}
            ActionsCaseComponent={ActionsCaseComponent}
            ActionsOtherComponent={ActionsOtherComponent}
        />
    );
}

export default ActionPreviewGroupPc;
