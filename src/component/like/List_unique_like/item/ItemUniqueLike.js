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
    div_fix_width,

    onOpenDetailLike,
    handle_API_L,
    PeopleComponent,
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
