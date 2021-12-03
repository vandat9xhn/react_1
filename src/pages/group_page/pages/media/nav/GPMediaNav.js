import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
//
import './GPMediaNav.scss';

//
const nav_arr = [
    {
        link_to: 'photos',
        title: 'Photos',
    },
    {
        link_to: 'videos',
        title: 'Videos',
    },
    {
        link_to: 'albums',
        title: 'Albums',
    },
];

//
GPMediaNav.propTypes = {};

//
function GPMediaNav({ group_id }) {
    //
    return (
        <div className="GPMediaNav">
            <div className="display-flex">
                {nav_arr.map((item, ix) => (
                    <div key={ix} className="margin-right-8px">
                        <NavLink
                            className="GPMediaNav_item display-flex-center h-52px padding-x-12px brs-6px text-third font-600 hv-bg-s-through"
                            activeClassName="GPMediaNav_item-active"
                            to={`/group/${group_id}/media/${item.link_to}`}
                        >
                            {item.title}
                        </NavLink>

                        <div className="GPMediaNav_item_bottom display-none h-3px brs-20px bg-blue"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GPMediaNav;
