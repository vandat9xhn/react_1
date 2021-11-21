import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import IconCaret from '../../../../../_icons_svg/_icon_caret/IconCaret';
//
import ActionPreviewProfile from '../../../../action_preview_profile/_main/ActionPreviewProfile';

//
NameToNameLayout.propTypes = {};

//
function NameToNameLayout({ user, right_elm }) {
    //
    return (
        <div className="NameToNameLayout">
            <span className="font-600">
                <ActionPreviewProfile
                    user_id={user.id}
                    title_action={
                        <Link
                            className="color-inherit hv-underline"
                            to={`/profile/${user.id}`}
                        >
                            {user.first_name + ' ' + user.last_name}
                        </Link>
                    }
                />
            </span>{' '}
            <span className="text-third">
                <IconCaret
                    class_icon="display-inherit rotate--90"
                    size_icon="12px"
                    fill="currentColor"
                />
            </span>{' '}
            <span>{right_elm}</span>
        </div>
    );
}

export default NameToNameLayout;
