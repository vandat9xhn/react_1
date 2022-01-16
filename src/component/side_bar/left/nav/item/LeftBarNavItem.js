import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import './LeftBarNavItem.scss';

//
LeftBarNavItem.propTypes = {
    item: PropTypes.shape({
        link_to: PropTypes.string,
        Icon: PropTypes.object,
        title: PropTypes.string,
        right: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    }),
};

//
function LeftBarNavItem({ item }) {
    //
    return (
        <NavLink
            className="LeftBarNavItem flex-between-center padding-x-8px padding-y-8px brs-6px line-20px text-333 font-500 hv-bg-fb"
            activeClassName="LeftBarNavItem-active bg-fb"
            to={item.link_to}
        >
            <div className="LeftBarNavItem_left display-flex align-items-center">
                <div className="LeftBarNavItem_icon btn-icon-36px bg-ccc margin-right-12px">
                    {item.Icon}
                </div>

                <div className="LeftBarNavItem_title">{item.title}</div>
            </div>

            {item.right ? (
                <div className="LeftBarNavItem_right">{item.right}</div>
            ) : null}
        </NavLink>
    );
}

export default LeftBarNavItem;
