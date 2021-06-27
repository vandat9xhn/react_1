import React from 'react';
import PropTypes from 'prop-types';
//
import { useForceUpdate } from '../../../../../../../../../_hooks/UseForceUpdate';

import { joinArrayWithAnd } from '../../../../../../../../../_some_function/joinArrayWithAnd';
//
import { handle_API_Lang_C } from '../../../../../../../__handle_api/ProfileHandleAPI';

import PfAboutAdd from '../../../../_component/add/PfAboutAdd';

import PfAboutLangEdit from '../edit/PfAboutLangEdit';
import PfAboutLangItem from '../item/PfAboutLangItem';

//
PfAboutLang.propTypes = {
    lang_arr: PropTypes.array,
};

//
function PfAboutLang(props) {
    //
    const { lang_obj } = props;

    //
    const forceUpdate = useForceUpdate();

    //
    function handleCreate(data) {
        const { lang, permission } = data;

        lang_obj.title = joinArrayWithAnd(lang.split(','));
        lang_obj.lang = lang;
        lang_obj.permission = permission;

        forceUpdate();
    }

    //
    function handleUpdateItemObj(data) {
        const { lang, permission } = data;

        lang_obj.title = joinArrayWithAnd(lang.split(','));
        lang_obj.permission = permission;
        lang_obj.lang = lang;

        forceUpdate()
    }

    //
    return (
        <div>
            <div
                className={`PfAbout_add ${
                    lang_obj.title == '' ? '' : 'display-none'
                }`}
            >
                <PfAboutAdd
                    title_add="Add a language"
                    item_obj={{
                        lang: '',
                        permission: 0,
                    }}
                    ComponentEdit={PfAboutLangEdit}
                    handleCreate={handleCreate}
                    handle_API_C={handle_API_Lang_C}
                />
            </div>

            <div>
                <PfAboutLangItem
                    lang_obj={lang_obj}
                    handleUpdateItemObj={handleUpdateItemObj}
                />
            </div>
        </div>
    );
}

export default PfAboutLang;
