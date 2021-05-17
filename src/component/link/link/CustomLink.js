import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//
CustomLink.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    to: PropTypes.string,
    className: PropTypes.string,
    replace: PropTypes.bool,
};

CustomLink.defaultProps = {
    replace: false,
};

//
function CustomLink({ children, to, replace, className }) {
    //
    function handleClickLink(e) {
        to == location.pathname + location.search && e.preventDefault();
    }

    //
    return (
        <Link
            to={to}
            replace={replace}
            className={className}
            onClick={handleClickLink}
        >
            {children}
        </Link>
    );
}

export default CustomLink;
