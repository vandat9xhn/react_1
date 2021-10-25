import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
//
import { openScreenLike } from '../../../../../_screen/type/like/_main/ScreenLike';
//
import ContentMore from '../../../../../content_more/Content_more';
import PictureName from '../../../../../picture_name/pic_name/PictureName';
import ListUniqueLike from '../../../../../like/List_unique_like/_main/ListUniqueLike';
import UnitTime from '../../../../../../_some_function/UnitTime';
import Textarea from '../../../../../input/textarea/Textarea';
import ZoomPostCommonEdit from '../edit/ZoomPostCommonEdit';
//
// import './ZoomPostCommonRight.scss';

//
ZoomPostCommonRight.propTypes = {};

//
function ZoomPostCommonRight({
    user,
    updated_time,

    content_obj,
    seeMoreContent,

    reacted_count,
    reacted_ix_arr,
    on_API_Like_L,

    is_editing,
    handleEdit,
    cancelEdit,

    action_component,
    like_share_cmt_component,
    comment_component,
}) {
    //
    const { openScreenFloor } = useContext(context_api);

    //
    function onOpenDetailLike(type_like) {
        openScreenLike({
            openScreenFloor: openScreenFloor,
            handle_API_Like_L: on_API_Like_L,
            type_like: type_like,
        });
    }

    //
    return (
        <div className="ZoomPostCommon_right_contain scroll-thin div_fix_scroll">
            <div>
                <div className="ZoomPostCommon_right-head">
                    <div>
                        <PictureName
                            user={user}
                            content={UnitTime(
                                new Date() - new Date(updated_time)
                            )}
                        />
                    </div>

                    <div className="ZoomPostCommon_actions">
                        {action_component}
                    </div>

                    <div>
                        {is_editing ? (
                            <ZoomPostCommonEdit
                                old_text={`${content_obj.content} ${content_obj.content_more}`}
                                handleEdit={handleEdit}
                                cancelEdit={cancelEdit}
                            />
                        ) : (
                            <ContentMore
                                content_obj={content_obj}
                                seeMoreContent={seeMoreContent}
                            />
                        )}
                    </div>

                    <div>
                        <ListUniqueLike
                            count_like={reacted_count}
                            arr_unique_like={reacted_ix_arr}
                            on_API_Like_L={on_API_Like_L}
                            onOpenDetailLike={onOpenDetailLike}
                            //
                            use_transform_x={false}
                        />
                    </div>

                    <div>{like_share_cmt_component}</div>
                </div>

                <div className="ZoomPostCommon_right-cmt">
                    {comment_component}
                </div>
            </div>
        </div>
    );
}

export default ZoomPostCommonRight;
