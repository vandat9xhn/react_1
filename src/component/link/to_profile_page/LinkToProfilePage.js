import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import { context_api } from '../../../_context/ContextAPI';
// 
import { IS_MOBILE } from '../../../_constant/Constant';

//
LinkToProfilePage.propTypes = {};

//
function LinkToProfilePage({
    className,
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
        <Link
            className={className}
            to={to}
            replace={replace}
            //
            title={title}
            onClick={gotoProfilePage}
        >
            {children}
        </Link>
    );
}

export default LinkToProfilePage;
