import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//
ProfilePhotoCreateBtnLink.propTypes = {};

//
function ProfilePhotoCreateBtnLink({ title, link_to, children }) {
    //
    return (
        <Link
            className="ProfilePhotoCreateBtnLink display-block padding-4px text-secondary hv-underline"
            to={link_to}
        >
            <div className="pos-rel padding-top-100per brs-8px border-blur bg-ccc">
                <div className="pos-abs-center w-100per">{title}</div>
            </div>

            {children}
        </Link>
    );
}

export default ProfilePhotoCreateBtnLink;
