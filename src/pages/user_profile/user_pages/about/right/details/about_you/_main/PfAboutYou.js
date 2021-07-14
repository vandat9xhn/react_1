import React from 'react';
import PropTypes from 'prop-types';
//
import { useForceUpdate } from '../../../../../../../../_hooks/UseForceUpdate';
//
import { handle_API_You_U } from '../../../../../../../../_handle_api/profile/ProfileHandleAPI';

import PfAboutAdd from '../../../_component/add/PfAboutAdd';

import PfAboutYouEdit from '../edit/PfAboutYouEdit';
import PfAboutYouItem from '../item/PfAboutYouItem';

//
PfAboutYou.propTypes = {
    you_obj: PropTypes.object,
};

//
function PfAboutYou({ you_obj }) {
    //
    const forceUpdate = useForceUpdate();

    //
    function handleCreate(data) {
        const { you, permission } = data;

        you_obj.title = you;
        you_obj.you = you;
        you_obj.permission = permission;

        forceUpdate();
    }

    //
    function handleUpdateItemObj(data) {
        const { you, permission } = data;

        you_obj.title = you;
        you_obj.permission = permission;
        you_obj.you = you;

        forceUpdate();
    }

    //
    return (
        <div>
            <div
                className={`PfAbout_add ${
                    you_obj.you == '' ? '' : 'display-none'
                }`}
            >
                <PfAboutAdd
                    title_add="Add about you"
                    item_obj={{
                        you: '',
                        permission: 0,
                    }}
                    ComponentEdit={PfAboutYouEdit}
                    handleCreate={handleCreate}
                    handle_API_C={handle_API_You_U}
                />
            </div>

            <div>
                <PfAboutYouItem
                    you_obj={you_obj}
                    handleUpdateItemObj={handleUpdateItemObj}
                />
            </div>
        </div>
    );
}

export default PfAboutYou;
