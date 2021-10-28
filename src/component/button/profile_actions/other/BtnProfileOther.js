import React from 'react';
import PropTypes from 'prop-types';
//
import IconThreeDot from '../../../../_icons_svg/icon_three_dot/IconThreeDot';
//
import BtnProfileActions from '../_common/BtnProfileActions';
import ActionsMultiList from '../../../actions_multi_list/_main/ActionsMultiList';

//
BtnProfileOther.propTypes = {};

//
function BtnProfileOther({
    class_action_contain,
    is_at_body = false,
    
    handle_API_L,
    handleAction,
}) {
    //
    return (
        <div className="BtnProfileOther">
            <ActionsMultiList
                title_action={
                    <BtnProfileActions
                        className={'BtnProfileOther_btn bg-ccc'}
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

export default BtnProfileOther;
