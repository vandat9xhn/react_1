import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { useBool } from '../../../../../../../_hooks/useBool';
//
import IconFaceGray from '../../../../../../../_icons_svg/icons_like/_Icon_face_gray/IconFaceGray';
//
import Actions from '../../../../../../actions/_main/Actions';
import ActionsMultiList from '../../../../../../actions_multi_list/_main/ActionsMultiList';
import ListTypeLike from '../../../../../../like/list_type_like/_main/ListTypeLike';
//
import './ChatMessActions.scss';

//
ChatMessActions.propTypes = {};

//
function ChatMessActions({
    ref_bd_elm,
    unsent,
    chooseListTypeLike,
    handleAction,
}) {
    //
    const [show_action, setShowAction] = useState(false);

    //
    const { is_true, setIsTrue, toggleBool } = useBool();

    // -----

    //
    function handle_API_Action_L() {
        return unsent
            ? [[{ name: 'remove', title: 'Remove' }]]
            : [
                  [
                      { name: 'remove', title: 'Remove' },
                      { name: 'forward', title: 'Forward' },
                  ],
              ];
    }

    //
    function getActionsScrollElms() {
        return [ref_bd_elm.current];
    }

    //
    function handleClose() {
        setIsTrue(false);
    }

    //
    function whenIsShowChange(is_show) {
        setShowAction(is_show);
    }

    //
    function onChooseListTypeLike(...params) {
        chooseListTypeLike(...params);
        handleClose();
    }

    //
    return (
        <div
            className={`ChatMessActions ${
                is_true || show_action ? '' : 'visibility-hidden'
            }`}
        >
            <div className="ChatMessActions_row display-flex align-items-center row-reverse">
                <div className="ChatMessActions_action hv-opacity cursor-pointer">
                    <ActionsMultiList
                        deps_reset_api={[unsent]}
                        //
                        getActionsScrollElms={getActionsScrollElms}
                        handle_API_L={handle_API_Action_L}
                        handleAction={handleAction}
                        whenIsShowChange={whenIsShowChange}
                    />
                </div>

                {unsent ? null : (
                    <div className="ChatMessActions_reacted">
                        <Actions
                            title_action={<IconFaceGray />}
                            class_action_contain="ChatMessActions_reacted_contain"
                            class_action_contain_mb="ChatMessActions_reacted_contain_mb action-contain-mb-center"
                            is_show={is_true}
                            getActionsScrollElms={getActionsScrollElms}
                            //
                            use_caret={false}
                            //
                            toggleShow={toggleBool}
                            handleClose={handleClose}
                        >
                            <div className="ChatMessActions_reacted_list">
                                <ListTypeLike
                                    chooseListTypeLike={onChooseListTypeLike}
                                    open_type_like={true}
                                />
                            </div>
                        </Actions>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ChatMessActions;
