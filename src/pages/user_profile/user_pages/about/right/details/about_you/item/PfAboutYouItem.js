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
    handleUpdateItemObj: PropTypes.func,
};

//
function PfAboutYouItem({ you_obj, handleUpdateItemObj }) {
    //
    return (
        <div>
            <div>
                <AboutRowItemEdit
                    item_obj={you_obj}
                    Icon={IconsProfileAbout.you}
                    label="About you"
                    //
                    ComponentEdit={PfAboutYouEdit}
                    handle_API_U={handle_API_You_U}
                    handleUpdateItemObj={handleUpdateItemObj}
                />
            </div>
        </div>
    );
}

export default PfAboutYouItem;
