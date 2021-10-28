import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import ActionPreviewProfile from '../../../../../action_preview_profile/_main/ActionPreviewProfile';

//
CmtUser.propTypes = {};

//
function CmtUser({ user_name, user_id }) {
    //
    function onTouchStart(e) {
        e.stopPropagation();
    }

    //
    return (
        <div className="CmtUser line-16px">
            <div className="inline-block">
                <ActionPreviewProfile
                    user_id={user_id}
                    title_action={
                        <Link
                            to={`/profile/${user_id}`}
                            className="font-600 font-12px color-inherit"
                            onTouchStart={onTouchStart}
                        >
                            {user_name}
                        </Link>
                    }
                />
            </div>
        </div>
    );
}

export default CmtUser;
