import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import { observerSticky } from '../../../../../_some_function/observerSticky';
//
import ActionsGroupCase from '../../../../../component/actions_group/_case/ActionsGroupCase';
import BtnGroupInvite from '../../../../../component/button/group_actions/invite/BtnGroupInvite';
//
import GroupPageNavMore from '../more/_main/GroupPageNavMore';
import GroupPageNavItem from '../item/GroupPageNavItem';
import GroupPageBtnSearch from '../btn_search/GroupPageBtnSearch';
import GroupPageActionOther from '../action_other/GroupPageActionOther';

import GPNavGroup from '../group/GPNavGroup';
//
import './GroupPageNav.scss';

//
const MORE_LINK_ARR = [
    {
        title: 'Media',
        link_to: 'media',
    },
    {
        title: 'Files',
        link_to: 'files',
    },
];

//
const NAV_LINK_ARR = [
    {
        title: 'About',
        link_to: 'about',
    },
    {
        title: 'Discussion',
        link_to: 'discuss',
    },
    {
        title: 'Members',
        link_to: 'members',
    },
    {
        title: 'Topics',
        link_to: 'topics',
    },

    ...(IS_MOBILE ? MORE_LINK_ARR : []),
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
    const [scroll_over, setScrollOver] = useState(false);

    //
    const ref_fake_sticky = useRef(null);

    //
    useEffect(() => {
        window.scrollTo(scrollX, scrollY + 1);

        observerSticky({
            fake_elm: ref_fake_sticky.current,
            fake_bottom: -1,
            callbackNotOver: () => {
                setScrollOver(false);
            },
            callbackOver: () => {
                setScrollOver(true);
            },
        });
    }, []);

    //
    return (
        <div className="GroupPageNav font-600 text-secondary">
            <div
                ref={ref_fake_sticky}
                className="GroupPageNav_fake_sticky pos-abs left-0 w-100per h-1px"
            ></div>

            <div className="GroupPageNav_row flex-between-center h-100per">
                <div className="flex-grow-1 h-100per">
                    <div
                        className={`h-100per ${
                            scroll_over ? 'display-none' : ''
                        }`}
                    >
                        <ul className="display-flex list-none h-100per padding-top-3px">
                            {NAV_LINK_ARR.slice(
                                0,
                                no_permission ? 2 : undefined
                            ).map((item, ix) => (
                                <li key={ix} className="GroupPageNav_item">
                                    <GroupPageNavItem
                                        title={item.title}
                                        link_to={`/group/${group_id}/${item.link_to}`}
                                        color_active={color}
                                        border_active={bg_btn}
                                    />
                                </li>
                            ))}

                            {IS_MOBILE || no_permission ? null : (
                                <li className="GroupPageNav_item">
                                    <GroupPageNavMore
                                        group_id={group_id}
                                        color={color}
                                        bg_btn={bg_btn}
                                        more_link_arr={MORE_LINK_ARR}
                                    />
                                </li>
                            )}
                        </ul>
                    </div>

                    <div
                        className={`h-100per ${
                            scroll_over ? 'flex-between-center' : 'display-none'
                        }`}
                    >
                        <div className="flex-grow-1 h-100per padding-y-2px">
                            <GPNavGroup
                                name={name}
                                picture={picture}
                                link_to={link_to}
                            />
                        </div>

                        <div className="display-flex">
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
                                            style: { backgroundColor: bg_btn },
                                        }}
                                        handleAction={handleAction}
                                    />
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>

                <div className="display-flex">
                    {no_permission ? null : (
                        <div className="margin-left-8px">
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
            </div>
        </div>
    );
}

export default GroupPageNav;
