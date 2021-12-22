import React from 'react';
import PropTypes from 'prop-types';
//
import LinkToProfilePage from '../../../link/to_profile_page/LinkToProfilePage';
//
import './HeaderUser.scss';

//
HeaderUser.propTypes = {};

//
function HeaderUser({ user }) {
    //
    return (
        <LinkToProfilePage
            className="HeaderUser display-flex-center h-36px padding-left-4px padding-right-12px brs-18px color-inherit hv-bg-s-through"
            to={`/profile/${user.id}`}
            activeClassName="HeaderUser-active"
        >
            {/* <React.Fragment> */}
                <img
                    className="brs-50 object-fit-cover"
                    src={user.picture}
                    alt=""
                    width="28"
                    height="28"
                />

                <div className="margin-left-6px text-nowrap font-600">
                    {user.last_name}
                </div>
            {/* </React.Fragment> */}
        </LinkToProfilePage>
    );
}

export default HeaderUser;
