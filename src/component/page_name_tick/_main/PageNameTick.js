import React from 'react';
import PropTypes from 'prop-types';
//
import PageTick from '../tick/PageTick';

//
PageNameTick.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    size_icon: PageTick.propTypes.size_icon,
};

//
function PageNameTick({ children, size_icon }) {
    //
    return (
        <span className="PageNameTick inline-flex align-items-center">
            {children}

            <PageTick size_icon={size_icon} />
        </span>
    );
}

export default PageNameTick;
