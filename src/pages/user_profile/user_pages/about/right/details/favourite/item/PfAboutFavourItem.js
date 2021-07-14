import React from 'react';
import PropTypes from 'prop-types';
//
import { IconsProfileAbout } from '../../../../../../../../_groups_icon/about/GroupIconProfileAbout';
//
import { handle_API_Favour_U } from '../../../../../../../../_handle_api/profile/ProfileHandleAPI';

import AboutRowItemEdit from '../../../_component/row_item_edit/AboutRowItemEdit';
import PfAboutFavourEdit from '../edit/PfAboutFavourEdit';

//
PfAboutFavourItem.propTypes = {
    favour_obj: PropTypes.object,
    handleUpdateItemObj: PropTypes.func,
};

//
function PfAboutFavourItem({ favour_obj, handleUpdateItemObj }) {
    //
    return (
        <div>
            <div>
                <AboutRowItemEdit
                    item_obj={favour_obj}
                    Icon={IconsProfileAbout.favour}
                    label="Favour"
                    // 
                    ComponentEdit={PfAboutFavourEdit}
                    handle_API_U={handle_API_Favour_U}
                    handleUpdateItemObj={handleUpdateItemObj}
                />
            </div>
        </div>
    );
}

export default PfAboutFavourItem;
