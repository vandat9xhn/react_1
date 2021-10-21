import React from 'react';
import PropTypes from 'prop-types';
//
import MouseEnterLeaveInfo from '../../../../../common/mouse_enter_leave_info/_main/MouseEnterLeaveInfo';
//
import CmtReactedList from '../list/CmtReactedList';
import CmtReactedTitle from '../title/CmtReactedTitle';

//
CmtReacted.propTypes = {};

//
function CmtReacted({
    reacted_ix_arr,
    reacted_count,

    on_API_LikeAll_L,
    onOpenDetailLikeAll,
}) {
    // 
    if (reacted_count == 0) {
        return null
    }

    //
    return (
        <div className="CmtReacted font-13px line-16px">
            <MouseEnterLeaveInfo
                title={
                    <CmtReactedTitle
                        reacted_ix_arr={reacted_ix_arr}
                        reacted_count={reacted_count}
                    />
                }
                div_fix_width={100}
                count={reacted_count}
                total_people={reacted_count}
                has_list_people_component={true}
                //
                handle_API_L={on_API_LikeAll_L}
                handleOpenScreen={onOpenDetailLikeAll}
                ListPeopleComponent={CmtReactedList}
            />
        </div>
    );
}

export default CmtReacted;
