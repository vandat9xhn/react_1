import React from 'react';
import PropTypes from 'prop-types';
//
import CircleLoading from '../../../waiting/circle_loading/CircleLoading';
import MouseEnterLeaveInfo from '../../../posts/common/mouse_enter_leave_info/_main/MouseEnterLeaveInfo';

//
ItemUniqueLike.propTypes = {};

//
function ItemUniqueLike({
    ix,
    title,
    count_like,

    title_people,
    div_fix_width,
    PeopleComponent,

    onOpenDetailLike,
    handle_API_L,
}) {
    //
    function on_API_Like_L() {
        return handle_API_L(ix);
    }
    //
    function openDetailLike() {
        return onOpenDetailLike(ix);
    }

    //
    return (
        <MouseEnterLeaveInfo
            title={title}
            count={count_like}
            title_people={title_people}
            PeopleComponent={PeopleComponent}
            div_fix_width={div_fix_width}
            //
            handle_API_L={on_API_Like_L}
            handleOpenScreen={openDetailLike}
            LoadingComponent={CircleLoading}
        />
    );
}

export default ItemUniqueLike;
