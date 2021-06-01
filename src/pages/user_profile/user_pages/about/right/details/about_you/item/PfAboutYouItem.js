import React from 'react';
import PropTypes from 'prop-types';
//
import { IconsProfileAbout } from '../../../../../../../../_groups_icon/about/GroupIconProfileAbout';
//
import { handle_API_You_U } from '../../../../../../__handle_api/ProfileHandleAPI';

import AboutRowItemEdit from '../../../_component/row_item_edit/AboutRowItemEdit';
import PfAboutYouEdit from '../edit/PfAboutYouEdit';

//
PfAboutYouItem.propTypes = {
    you_obj: PropTypes.object,
};

//
function PfAboutYouItem(props) {
    //
    const { you_obj } = props;

    //
    function handleUpdateItemObj(data) {
        const { you, permission } = data;

        you_obj.title = you;
        you_obj.permission = permission;
        you_obj.you = you;
    }

    //
    return (
        <div>
            <div>
                <div className="label-field text-secondary">About you</div>
            </div>

            <div>
                <AboutRowItemEdit
                    item_obj={you_obj}
                    Icon={IconsProfileAbout.you}
                    ComponentEdit={PfAboutYouEdit}
                    handle_API_U={handle_API_You_U}
                    handleUpdateItemObj={handleUpdateItemObj}
                />
            </div>
        </div>
    );
}

export default PfAboutYouItem;
