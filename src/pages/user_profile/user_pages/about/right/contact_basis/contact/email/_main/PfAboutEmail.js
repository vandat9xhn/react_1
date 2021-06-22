import React from 'react';
import PropTypes from 'prop-types';
//
import { IconsProfileAbout } from '../../../../../../../../../_groups_icon/about/GroupIconProfileAbout';
//
import { handle_API_Email_U } from '../../../../../../../__handle_api/ProfileHandleAPI';

import AboutRowItemEdit from '../../../../_component/row_item_edit/AboutRowItemEdit';

import PfAbEmailEdit from '../edit/PfAbEmailEdit';
//
import './PfAboutEmail.scss';

//
PfAboutEmail.propTypes = {};

//
function PfAboutEmail({ email_obj }) {
    //
    function handleUpdateItemObj(data) {
        const { email, password, permission } = data;

        email_obj.permission = permission;
        email_obj.email = email;
        email_obj.title = email;
    }

    //
    return (
        <div>
            <div>
                <AboutRowItemEdit
                    item_obj={email_obj}
                    Icon={IconsProfileAbout.email}
                    label="Mail"
                    //
                    ComponentEdit={PfAbEmailEdit}
                    handle_API_U={handle_API_Email_U}
                    handleUpdateItemObj={handleUpdateItemObj}
                />
            </div>
        </div>
    );
}

export default PfAboutEmail;
