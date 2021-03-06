import React from 'react';
import PropTypes from 'prop-types';
//
import { IconsProfileAbout } from '../../../../../../../../../_groups_icon/about/GroupIconProfileAbout';
//
import { handle_API_UserCity_U } from '../../../../../../../../../_handle_api/profile/ProfileHandleAPI';

import AboutRowItemEdit from '../../../../_component/row_item_edit/AboutRowItemEdit';
import PfAboutCityEdit from '../edit/PfAboutCityEdit';

//
PfAboutCityItem.propTypes = {
    city_obj: PropTypes.object,
};

//
function PfAboutCityItem(props) {
    //
    const { city_obj } = props;

    //
    function handleUpdateItemObj(data) {
        const { city, permission } = data;

        city_obj.title = city;
        city_obj.permission = permission;
        city_obj.city = city
    }

    //
    return (
        <div>
            <AboutRowItemEdit
                item_obj={city_obj}
                Icon={IconsProfileAbout.city}
                ComponentEdit={PfAboutCityEdit}
                handle_API_U={handle_API_UserCity_U}
                handleUpdateItemObj={handleUpdateItemObj}
            />
        </div>
    );
}

export default PfAboutCityItem;
