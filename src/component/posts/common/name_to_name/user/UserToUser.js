import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import ActionPreviewProfile from '../../../../action_preview_profile/_main/ActionPreviewProfile';
//
import NameToNameLayout from '../_layout/NameToNameLayout';

//
UserToUser.propTypes = {};

//
function UserToUser({ user, to_user }) {
    //
    return (
        <NameToNameLayout
            user={user}
            right_elm={
                <span className="font-600">
                    <ActionPreviewProfile
                        user_id={to_user.id}
                        title_action={
                            <Link
                                className="color-inherit hv-underline"
                                to={`/profile/${to_user.id}`}
                            >
                                {to_user.first_name + ' ' + to_user.last_name}
                            </Link>
                        }
                    />
                </span>
            }
        />
    );
}

export default UserToUser;
