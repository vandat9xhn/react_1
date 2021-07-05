import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
//
import UnitTime from '../../../../../../_some_function/UnitTime';
//
import { openScreenLike } from '../../../../../_screen/type/like/_main/ScreenLike';
//
import { context_post } from '../../../../__context_post/ContextPost';
//
import Like from '../../../../../like/_main/Like';
import ListUniqueLike from '../../../../../like/List_unique_like/_main/ListUniqueLike';
//
// import './SubWsFoot.scss';

//
SubWsFoot.propTypes = {};

//
function SubWsFoot({
    id,
    count_like,
    likes,
    user_type_like,
    updated_time,

    focusInputSub,
    changeTypeLike,
}) {
    //
    const { openScreenFloor } = useContext(context_api);

    const { handle_API_LikeSub_L } = useContext(context_post);

    //
    function onOpenScreenLike(type_like) {
        openScreenLike({
            openScreenFloor: openScreenFloor,
            handle_API_Like_L: on_API_LikeSub_L,
            type_like: type_like,
        });
    }

    //
    function on_API_LikeSub_L(type_like) {
        return handle_API_LikeSub_L(id, 0, type_like);
    }

    //
    return (
        <div className="CmtSub_foot">
            <div className="display-flex align-items-center">
                <div className="SubWsFoot__like display-flex align-items-center cursor-pointer">
                    <Like
                        type_like={user_type_like}
                        changeTypeLike={changeTypeLike}
                        icon_small={true}
                    />
                </div>

                <div className="CmtSub_reply" onClick={focusInputSub}>
                    <div className="SubWsFoot__btn-sub">Reply</div>
                </div>

                <div className="CmtSub_total-like">
                    <ListUniqueLike
                        count_like={count_like}
                        arr_unique_like={[1, 2, 3]}
                        on_API_Like_L={on_API_LikeSub_L}
                        onOpenDetailLike={onOpenScreenLike}
                    />
                </div>
            </div>

            <div
                className="CmtSub_time"
                title={new Date(updated_time).toLocaleString()}
            >
                {UnitTime(
                    new Date().getTime() - new Date(updated_time).getTime()
                )}
            </div>
        </div>
    );
}

export default SubWsFoot;
