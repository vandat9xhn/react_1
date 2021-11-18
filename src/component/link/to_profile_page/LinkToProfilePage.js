import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
//
import { context_api } from '../../../_context/ContextAPI';
// 
import { IS_MOBILE } from '../../../_constant/Constant';

//
LinkToProfilePage.propTypes = {};

//
function LinkToProfilePage({
    className,
    activeClassName,
    to,
    replace,

    title,
    onClick,
    children,
}) {
    //
    const { profile_friends_pathname } = useContext(context_api);

    //
    function gotoProfilePage() {
        !IS_MOBILE && (profile_friends_pathname.current = '');
        onClick && onClick();
    }

    //
    return (
        <NavLink
            className={className}
            activeClassName={activeClassName}
            to={to}
            replace={replace}
            exact
            //
            title={title}
            onClick={gotoProfilePage}
        >
            {children}
        </NavLink>
    );
}

export default LinkToProfilePage;
