import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import ActionsGroupCase from '../../../../../component/actions_group/_case/ActionsGroupCase';
import BtnGroupInvite from '../../../../../component/button/group_actions/invite/BtnGroupInvite';
import ProfileLayoutNav from '../../../../../component/profile_layout/nav/_layout/ProfileLayoutNav';
//
import GroupPageNavMore from '../more/_main/GroupPageNavMore';
import GroupPageNavItem from '../item/GroupPageNavItem';
import GroupPageBtnSearch from '../btn_search/GroupPageBtnSearch';
import GroupPageActionOther from '../action_other/GroupPageActionOther';

import GPNavGroup from '../group/GPNavGroup';
//
import './GroupPageNav.scss';

//
const MORE_LINK_ARR = ({ group_id = 0 }) => [
    {
        title: 'Media',
        link_to: `/group/${group_id}/media`,
    },
    {
        title: 'Files',
        link_to: `/group/${group_id}/files`,
    },
];

//
const NAV_LINK_ARR = ({ group_id = 0 }) => [
    {
        title: 'About',
        link_to: `/group/${group_id}/about`,
    },
    {
        title: 'Discussion',
        link_to: `/group/${group_id}/discuss`,
    },
    {
        title: 'Members',
        link_to: `/group/${group_id}/members`,
    },
    {
        title: 'Topics',
        link_to: `/group/${group_id}/topics`,
    },

    ...(IS_MOBILE ? MORE_LINK_ARR({ group_id: group_id }) : []),
];

//
GroupPageNav.propTypes = {};

//
function GroupPageNav({
    group_id,
    color,
    bg_btn,

    name,
    picture,
    link_to,

    action_name,
    no_permission,

    handleAction,
}) {
    //
    const [state_obj, setStateObj] = useState({
        nav_arr: NAV_LINK_ARR({ group_id: group_id }),
        nav_more_arr: IS_MOBILE ? [] : MORE_LINK_ARR({ group_id: group_id }),
    });

    //
    return (
        <ProfileLayoutNav
            left_main_elm={
                <ul className="display-flex list-none h-100per padding-top-3px">
                    {state_obj.nav_arr
                        .slice(0, no_permission ? 2 : undefined)
                        .map((item, ix) => (
                            <li key={ix} className="GroupPageNav_item">
                                <GroupPageNavItem
                                    title={item.title}
                                    link_to={item.link_to}
                                    color_active={color}
                                    border_active={bg_btn}
                                />
                            </li>
                        ))}

                    {IS_MOBILE || no_permission ? null : (
                        <li className="GroupPageNav_item">
                            <GroupPageNavMore
                                color={color}
                                bg_btn={bg_btn}
                                more_link_arr={state_obj.nav_more_arr}
                            />
                        </li>
                    )}
                </ul>
            }
            left_sticky_elm={
                <div className="flex-between-center h-100per">
                    <div className="flex-grow-1 h-100per padding-y-2px overflow-hidden">
                        <GPNavGroup
                            name={name}
                            picture={picture}
                            link_to={link_to}
                        />
                    </div>

                    <div className="display-flex align-items-center">
                        <div className="margin-left-8px">
                            <ActionsGroupCase
                                action_name={action_name}
                                group_id={group_id}
                                handleAction={handleAction}
                            />
                        </div>

                        {action_name == 'joined' ? (
                            <div className="margin-left-8px">
                                <BtnGroupInvite
                                    className="text-white"
                                    btn_props={{
                                        style: {
                                            backgroundColor: bg_btn,
                                        },
                                    }}
                                    handleAction={handleAction}
                                />
                            </div>
                        ) : null}
                    </div>
                </div>
            }
            right_elm={
                <div className="display-flex align-items-center h-100per">
                    {no_permission ? null : (
                        <div>
                            <GroupPageBtnSearch />
                        </div>
                    )}

                    <div className="margin-left-8px">
                        <GroupPageActionOther
                            group_id={group_id}
                            handleAction={handleAction}
                        />
                    </div>
                </div>
            }
        />
    );
}

export default GroupPageNav;
