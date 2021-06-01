import React from 'react';
import PropTypes from 'prop-types';
//
import { IconsProfileAbout } from '../../../../../../../../_groups_icon/about/GroupIconProfileAbout';
//
import { handle_API_Favour_U } from '../../../../../../__handle_api/ProfileHandleAPI';

import AboutRowItemEdit from '../../../_component/row_item_edit/AboutRowItemEdit';
import PfAboutFavourEdit from '../edit/PfAboutFavourEdit';

//
PfAboutFavourItem.propTypes = {
    favour_obj: PropTypes.object,
};

//
function PfAboutFavourItem(props) {
    //
    const { favour_obj } = props;

    //
    function handleUpdateItemObj(data) {
        const { favour, permission } = data;

        favour_obj.title = favour;
        favour_obj.permission = permission;
        favour_obj.favour = favour;
    }

    //
    return (
        <div>
            <div>
                <div className="label-field text-secondary">Favour</div>
            </div>

            <div>
                <AboutRowItemEdit
                    item_obj={favour_obj}
                    Icon={IconsProfileAbout.favour}
                    ComponentEdit={PfAboutFavourEdit}
                    handle_API_U={handle_API_Favour_U}
                    handleUpdateItemObj={handleUpdateItemObj}
                />
            </div>
        </div>
    );
}

export default PfAboutFavourItem;
