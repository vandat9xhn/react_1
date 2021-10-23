import React from 'react';
import PropTypes from 'prop-types';
//
import MouseEnterLeaveInfo from '../../../../../common/mouse_enter_leave_info/_main/MouseEnterLeaveInfo';
//
import CmtReactedList from '../list/CmtReactedList';
import CmtReactedTitle from '../title/CmtReactedTitle';
import CmtReactedItem from '../item/CmtReactedItem';
import CmtReactedPeople from '../people/CmtReactedPeople';

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
    const has_one_reacted = reacted_ix_arr.length <= 1;

    //
    if (reacted_count == 0) {
        return null;
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
                div_fix_width={has_one_reacted ? 150 : 75}
                count={reacted_count}
                total_people={reacted_count}
                //
                title_people={
                    has_one_reacted ? (
                        <CmtReactedItem
                            reacted_ix={reacted_ix_arr[0]}
                            reacted_item_count={reacted_count}
                        />
                    ) : (
                        ''
                    )
                }
                has_list_people_component={!has_one_reacted}
                ListPeopleComponent={CmtReactedList}
                PeopleComponent={CmtReactedPeople}
                //
                handle_API_L={on_API_LikeAll_L}
                handleOpenScreen={onOpenDetailLikeAll}
            />
        </div>
    );
}

export default CmtReacted;
