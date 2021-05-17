import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_post } from '../../../../__context_post/ContextPost';
import { context_api } from '../../../../../../_context/ContextAPI';
import UnitTime from '../../../../../../_some_function/UnitTime';
//
import ListUniqueLike from '../../../../../like/List_unique_like/_main/ListUniqueLike';
import Like from '../../../../../like/_main/Like';
// 
import './CommentWsFoot.scss';

//
CommentWsFoot.propTypes = {};

//
function CommentWsFoot(props) {
    const {
        id,
        count_like,
        likes,
        user_type_like,
        updated_time,
        //
        focusInputSub,
        changeTypeLike,
    } = props;
    // 
    const { handle_API_LikeCmt_L } = useContext(context_post);

    const {openScreenLike} = useContext(context_api)

    //
    function onOpenScreenLike(type_like) {
        openScreenLike(on_API_LikeCmt_L, type_like);
    }

    //
    function on_API_LikeCmt_L(type_like) {
        return handle_API_LikeCmt_L(id, 0, type_like);
    }

    //
    return (
        <div className="CmtSub_foot">
            <div className="display-flex align-items-center">
                <div className="CommentWsFoot__like cursor-pointer">
                    <Like
                        type_like={user_type_like}
                        changeTypeLike={changeTypeLike}
                        icon_small={true}
                    />
                </div>

                <div
                    className="CmtSub_reply"
                    onClick={focusInputSub}
                >
                    <div className="Comment__btn-sub">Reply</div>
                </div>

                <div className="CmtSub_total-like">
                    <ListUniqueLike
                        count_like={count_like}
                        arr_unique_like={[1, 2, 3]}
                        
                        on_API_Like_L={on_API_LikeCmt_L}
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

export default CommentWsFoot;
