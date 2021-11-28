import React from 'react';
import PropTypes from 'prop-types';
//
import ActionsGroupCase from '../../../../../../component/actions_group/_case/ActionsGroupCase';
import BtnGroupInvite from '../../../../../../component/button/group_actions/invite/BtnGroupInvite';
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
import BtnActions from '../../../../../../component/button/actions/BtnActions';

//
GroupPageActions.propTypes = {};

//
function GroupPageActions({
    action_name,
    group_id,

    handleAction,
    toggleRelatedGroup,
}) {
    //
    return (
        <div className="GroupPageActions">
            <div className="display-flex align-items-center">
                <div className="margin-right-8px">
                    <ActionsGroupCase
                        action_name={action_name}
                        group_id={group_id}
                        handleAction={handleAction}
                    />
                </div>

                <div className="margin-right-8px">
                    <BtnGroupInvite handleAction={handleAction} />
                </div>

                <div>
                    <BtnActions
                        className="bg-ccc padding-x-16px"
                        Icon={
                            <IconsArrow
                                class_icon="rotate-90"
                                x={200}
                                size_icon="12px"
                            />
                        }
                        title=""
                        use_title={false}
                        //  use_icon
                        handleClick={toggleRelatedGroup}
                    />
                </div>
            </div>
        </div>
    );
}

export default GroupPageActions;
