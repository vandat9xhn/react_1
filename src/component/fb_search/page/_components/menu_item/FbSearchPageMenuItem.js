import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import './FbSearchPageMenuItem.scss';

//
FbSearchPageMenuItem.propTypes = {};

//
function FbSearchPageMenuItem({
    title,
    Icon,
    children,

    pathname,
    search_value,
    other_pathname_arr = [],
}) {
    //
    return (
        <div className="FbSearchPageMenuItem">
            <NavLink
                className="FbSearchPageMenuItem_link display-flex align-items-center padding-8px brs-6px color-inherit font-600 hv-bg-fb"
                activeClassName="FbSearchPageMenuItem_link-active bg-fb pointer-events-none"
                to={`${pathname}?q=${search_value}`}
                exact
            >
                <div className="FbSearchPageMenuItem_icon btn-icon-36px bg-ccc">
                    {Icon}
                </div>

                <div className="margin-left-12px">{title}</div>
            </NavLink>

            {[pathname, ...other_pathname_arr].includes(location.pathname) ? (
                <div className="FbSearchPageMenuItem_filter">{children}</div>
            ) : null}
        </div>
    );
}

export default FbSearchPageMenuItem;
