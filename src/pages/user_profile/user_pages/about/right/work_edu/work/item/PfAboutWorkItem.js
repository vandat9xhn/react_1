import React from 'react';
import PropTypes from 'prop-types';
//
import { IconsProfileAbout } from '../../../../../../../../_groups_icon/about/GroupIconProfileAbout';
//
import { handle_API_Work_U } from '../../../../../../__handle_api/ProfileHandleAPI';

import AboutRowItemEdit from '../../../_component/row_item_edit/AboutRowItemEdit';
import PfAboutWorkEdit from '../edit/PfAboutWorkEdit';

//
PfAboutWorkItem.propTypes = {
    work_obj: PropTypes.object,
};

//
function PfAboutWorkItem(props) {
    //
    const { work_obj } = props;

    //
    function handleUpdateItemObj(data) {
        const { work, permission } = data;

        work_obj.title = work;
        work_obj.permission = permission;
        work_obj.work = work;
    }

    //
    return (
        <div>
            <AboutRowItemEdit
                item_obj={work_obj}
                Icon={IconsProfileAbout.work}
                ComponentEdit={PfAboutWorkEdit}
                handle_API_U={handle_API_Work_U}
                handleUpdateItemObj={handleUpdateItemObj}
            />
        </div>
    );
}

export default PfAboutWorkItem;
