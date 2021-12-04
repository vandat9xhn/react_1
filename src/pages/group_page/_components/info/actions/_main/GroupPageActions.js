import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
// 
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
// 
import BtnGroupInvite from '../../../../../../component/button/group_actions/invite/BtnGroupInvite';
import BtnActions from '../../../../../../component/button/actions/BtnActions';
import ActionsGroupCase from '../../../../../../component/actions_group/_case/ActionsGroupCase';
// 
import './GroupPageActions.scss';

//
GroupPageActions.propTypes = {};

//
function GroupPageActions({
    action_name,
    group_id,
    bg_btn,

    handleAction,
    toggleRelatedGroup,
}) {
    //
    return (
        <div className="GroupPageActions">
            <div className="GroupPageActions_row display-flex align-items-center">
                <div className="GroupPageActions_btn margin-right-8px">
                    <ActionsGroupCase
                        action_name={action_name}
                        group_id={group_id}
                        handleAction={handleAction}
                    />
                </div>

                <div className="GroupPageActions_btn margin-right-8px">
                    <BtnGroupInvite
                        className="text-white"
                        btn_props={{ style: { backgroundColor: bg_btn } }}
                        handleAction={handleAction}
                    />
                </div>

                {IS_MOBILE ? null : <div>
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
                </div>}
            </div>
        </div>
    );
}

export default GroupPageActions;
