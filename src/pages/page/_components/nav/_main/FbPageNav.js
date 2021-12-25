import React, { useState } from 'react';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import { useStickyOver } from '../../../../../_hooks/useStickyOver';
//
import BtnPageCase from '../../../../../component/button/page_actions/_case/BtnPageCase';
import ActionsPageOther from '../../../../../component/actions_page/other/ActionsPageOther';

import ProfileLayoutUserSticky from '../../../../../component/profile_layout/user_sticky/ProfileLayoutUserSticky';
import ProfileLayoutNav from '../../../../../component/profile_layout/nav/_layout/ProfileLayoutNav';
//
import FbPageNavMore from '../more/FbPageNavMore';
import FbPageNavItem from '../item/FbPageNavItem';
//
import './FbPageNav.scss';

//
const MORE_LINK_ARR = ({ page_id = 0 }) => [
    {
        link_to: `/page/${page_id}/events`,
        title: 'Events',
    },
    {
        link_to: `/page/${page_id}/community`,
        title: 'Community',
    },
    {
        link_to: `/page/${page_id}/group`,
        title: 'Group',
    },
];

//
const NAV_LINK_ARR = ({ page_id = 0 }) => [
    {
        link_to: `/page/${page_id}/home`,
        title: 'Home',
    },
    {
        link_to: `/page/${page_id}/about`,
        title: 'About',
    },
    {
        link_to: `/page/${page_id}/videos`,
        title: 'Videos',
    },
    {
        link_to: `/page/${page_id}/photos`,
        title: 'Photos',
    },

    ...(IS_MOBILE ? MORE_LINK_ARR({ page_id: page_id }) : []),
];

//
function FbPageNav({
    page_id,
    name,
    picture,

    action_main_arr,
    action_arr,

    has_liked,
    has_followed,

    handleAction,
}) {
    //
    const [state_obj, setStateObj] = useState({
        nav_arr: NAV_LINK_ARR({ page_id: page_id }),
        nav_more_arr: IS_MOBILE ? [] : MORE_LINK_ARR({ page_id: page_id }),
    });

    //
    const scroll_over_obj = useStickyOver({});

    //
    return (
        <ProfileLayoutNav
            has_scroll_over={true}
            scroll_over_obj={scroll_over_obj}
            //
            left_main_elm={
                <ul className="FbPageNav_list flex-grow-1 display-flex list-none h-100per padding-top-3px">
                    {state_obj.nav_arr.map((item, ix) => (
                        <li key={ix} className="FbPageNav_item">
                            <FbPageNavItem
                                link_to={item.link_to}
                                title={item.title}
                            />
                        </li>
                    ))}

                    {IS_MOBILE ? null : (
                        <li className="FbPageNav_item">
                            <FbPageNavMore
                                more_link_arr={state_obj.nav_more_arr}
                            />
                        </li>
                    )}
                </ul>
            }
            left_sticky_elm={
                <div className="display-flex h-100per padding-y-2px">
                    <ProfileLayoutUserSticky
                        link_to={`/page/${page_id}/home`}
                        picture={picture}
                        name={name}
                    />
                </div>
            }
            right_elm={
                IS_MOBILE ? null : (
                    <div className="display-flex align-items-center h-100per">
                        {[
                            ...(scroll_over_obj.scroll_over
                                ? action_main_arr
                                : []),
                            ...action_arr,
                        ].map((item, ix) => (
                            <div key={ix} className="margin-right-8px">
                                <BtnPageCase
                                    action_name={item}
                                    // use_title={use_title}
                                    // use_icon={use_icon}
                                    page_id={page_id}
                                    has_liked={has_liked}
                                    has_followed={has_followed}
                                    handleAction={handleAction}
                                />
                            </div>
                        ))}

                        <div>
                            <ActionsPageOther
                                page_id={page_id}
                                handleAction={handleAction}
                            />
                        </div>
                    </div>
                )
            }
        />
    );
}

export default FbPageNav;
