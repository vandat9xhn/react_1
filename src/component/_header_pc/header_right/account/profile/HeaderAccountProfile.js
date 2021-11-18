import React from 'react';
import PropTypes from 'prop-types';
//
import LinkToProfilePage from '../../../../link/to_profile_page/LinkToProfilePage';
// 
import './HeaderAccountProfile.scss';

//
HeaderAccountProfile.propTypes = {};

//
function HeaderAccountProfile({ user, closeAccount }) {
    //
    return (
        <LinkToProfilePage
            className="normal-text hv-cl-blue"
            activeClassName="HeaderAccountProfile-active"
            to={`/profile/${user.id}`}
        >
            <div
                className="ActionsAccount_profile display-flex align-items-center padding-8px hv-bg-blur"
                title="Profile"
                onClick={closeAccount}
            >
                <img
                    className="ActionsAccount_profile_pic flex-shrink-0 brs-50 object-fit-cover"
                    src={user.picture}
                    alt=""
                    width="60"
                    height="60"
                />

                <div className="padding-left-12px">
                    <div className="font-17px font-600">
                        {user.first_name} {user.last_name}
                    </div>

                    <div className="text-secondary">View your profile</div>
                </div>
            </div>
        </LinkToProfilePage>
    );
}

export default HeaderAccountProfile;
