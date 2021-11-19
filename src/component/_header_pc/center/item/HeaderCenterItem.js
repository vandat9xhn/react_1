import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
//
import BadgeDiv from '../../../some_div/badge_div/BadgeDiv';
//
import './HeaderCenterItem.scss';

//
HeaderCenterItem.propTypes = {};

//
function HeaderCenterItem({ Icon, link_to, count_new, title }) {
    //
    return (
        <NavLink
            className="HeaderCenterItem display-block pos-rel h-100per brs-6px text-secondary hv-bg-s-through"
            activeClassName="HeaderCenterItem-active nav-active"
            to={link_to}
            title={title}
        >
            <div className="HeaderCenterItem_icon pos-rel display-flex-center h-100per">
                {Icon}

                <div className="HeaderCenterItem_badge pos-abs top-0 trans-y--50per">
                    <BadgeDiv num={count_new} max_num={99} />
                </div>
            </div>

            <div className="HeaderCenterItem_bottom display-none pos-abs left-0 top-100per w-100per brs-10px bg-blue"></div>
        </NavLink>
    );
}

export default HeaderCenterItem;
