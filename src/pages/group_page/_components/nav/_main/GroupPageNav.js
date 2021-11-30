import React from 'react';
import PropTypes from 'prop-types';
//
import GroupPageNavMore from '../more/_main/GroupPageNavMore';
import GroupPageNavItem from '../item/GroupPageNavItem';
import GroupPageBtnSearch from '../btn_search/GroupPageBtnSearch';
import GroupPageActionOther from '../action_other/GroupPageActionOther';
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
];

//
GroupPageNav.propTypes = {};

//
function GroupPageNav({ group_id, color, bg_btn, handleAction }) {
    //
    return (
        <div className="GroupPageNav font-600">
            <div className="GroupPageNav_row flex-between-center h-100per">
                <ul className="display-flex list-none h-100per padding-top-3px">
                    {NAV_LINK_ARR.map((item, ix) => (
                        <li key={ix} className="GroupPageNav_item">
                            <GroupPageNavItem
                                title={item.title}
                                link_to={`/group/${group_id}/${item.link_to}`}
                                color_active={color}
                                border_active={bg_btn}
                            />
                        </li>
                    ))}

                    <li className="GroupPageNav_item">
                        <GroupPageNavMore
                            group_id={group_id}
                            color={color}
                            bg_btn={bg_btn}
                            more_link_arr={MORE_LINK_ARR}
                        />
                    </li>
                </ul>

                <div className="display-flex">
                    <div className="margin-right-8px">
                        <GroupPageBtnSearch />
                    </div>

                    <div>
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
