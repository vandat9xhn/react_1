import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//
HasLinkOrNot.propTypes = {
    has_link: PropTypes.bool,
    link_to: PropTypes.string,
    class_link: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

HasLinkOrNot.defaultProps = {
    class_link: 'color-inherit',
};

//
function HasLinkOrNot({ has_link, link_to, class_link, children }) {
    //
    return has_link ? (
        <Link className={class_link} to={link_to}>
            {children}
        </Link>
    ) : (
        children
    );
}

export default HasLinkOrNot;
