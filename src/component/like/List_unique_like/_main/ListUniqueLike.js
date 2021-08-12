import React from 'react';
import PropTypes from 'prop-types';
//
import CircleLoading from '../../../waiting/circle_loading/CircleLoading';
import { type_likes } from '../../list_type_like/type_likes/TypeLikes';
import MouseEnterLeaveInfo from '../../../posts/common/mouse_enter_leave_info/_main/MouseEnterLeaveInfo';
//
import ItemUniqueLike from '../item/ItemUniqueLike';
import PeopleUniqueLike from '../people/PeopleUniqueLike';
//
import './ListUniqueLike.scss';

//
ListUniqueLike.propTypes = {
    count_like: PropTypes.number,
    arr_unique_like: PropTypes.array,
};

ListUniqueLike.defaultProps = {
    count_like: 0,
    arr_unique_like: [],
};

//
function ListUniqueLike({
    title,
    count_like,
    arr_unique_like,

    on_API_Like_L,
    onOpenDetailLike,
}) {
    //
    function on_API_LikeAll_L() {
        return on_API_Like_L(-1);
    }

    //
    function onOpenDetailLikeAll() {
        return onOpenDetailLike(-1);
    }

    //
    return (
        <div className={count_like ? 'ListUniqueLike' : 'display-none'}>
            <div className="display-flex align-items-center">
                {arr_unique_like.map((ix) => (
                    <div
                        key={`Info_like_${ix}`}
                        className="ListUniqueLike_item"
                    >
                        <ItemUniqueLike
                            ix={ix}
                            count={count_like}
                            title={type_likes[ix].component}
                            PeopleComponent={PeopleUniqueLike}
                            //
                            onOpenDetailLike={onOpenDetailLike}
                            handle_API_L={on_API_Like_L}
                            handleOpenScreen={onOpenDetailLike}
                        />
                    </div>
                ))}

                <div className="ListUniqueLike_item ListUniqueLike_count">
                    <MouseEnterLeaveInfo
                        // title={title}
                        count={count_like}
                        PeopleComponent={PeopleUniqueLike}
                        //
                        handle_API_L={on_API_LikeAll_L}
                        handleOpenScreen={onOpenDetailLikeAll}
                        LoadingComponent={CircleLoading}
                    />
                </div>
            </div>
        </div>
    );
}

export default ListUniqueLike;
