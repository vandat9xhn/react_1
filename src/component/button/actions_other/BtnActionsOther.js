import React from 'react';
import PropTypes from 'prop-types';
//
import IconThreeDot from '../../../_icons_svg/icon_three_dot/IconThreeDot';
//
import ActionsMultiList from '../../actions_multi_list/_main/ActionsMultiList';
import BtnActions from '../actions/BtnActions';

//
BtnActionsOther.propTypes = {};

//
function BtnActionsOther({
    class_main,
    class_btn,

    class_action_contain,
    is_at_body = false,
    
    handle_API_L,
    handleAction,
}) {
    //
    return (
        <div className={`BtnActionsOther ${class_main}`}>
            <ActionsMultiList
                title_action={
                    <BtnActions
                        className={`${class_btn} bg-ccc`}
                        Icon={
                            <IconThreeDot color="var(--md-color-secondary)" />
                        }
                        title=""
                    />
                }
                class_action_contain={class_action_contain}
                use_title={true}
                is_at_body={is_at_body}
                class_separate=""
                // ComponentItem
                handle_API_L={handle_API_L}
                handleAction={handleAction}
            />
        </div>
    );
}

export default BtnActionsOther;
