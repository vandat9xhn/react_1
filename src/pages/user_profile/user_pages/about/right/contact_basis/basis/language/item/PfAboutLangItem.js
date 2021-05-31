import React from 'react';
import PropTypes from 'prop-types';
//
import { joinArrayWithAnd } from '../../../../../../../../../_some_function/joinArrayWithAnd';
// 
import { IconsProfileAbout } from '../../../../../../../../../_groups_icon/about/GroupIconProfileAbout';
//
import { handle_API_Lang_U } from '../../../../../../../__handle_api/ProfileHandleAPI';

import AboutRowItemEdit from '../../../../_component/row_item_edit/AboutRowItemEdit';
import PfAboutLangEdit from '../edit/PfAboutLangEdit';

//
PfAboutLangItem.propTypes = {
    lang_obj: PropTypes.object,
};

//
function PfAboutLangItem(props) {
    //
    const { lang_obj } = props;

    //
    function handleUpdateItemObj(data) {
        const { lang, permission } = data;

        lang_obj.title = joinArrayWithAnd(lang.split(','));
        lang_obj.permission = permission;
        lang_obj.lang = lang;
    }

    //
    return (
        <div>
            <AboutRowItemEdit
                item_obj={lang_obj}
                Icon={IconsProfileAbout.lang}
                ComponentEdit={PfAboutLangEdit}
                handle_API_U={handle_API_Lang_U}
                handleUpdateItemObj={handleUpdateItemObj}
            />
        </div>
    );
}

export default PfAboutLangItem;
