import React from 'react';
import PropTypes from 'prop-types';
//
import { type_likes } from '../../../../like/list_type_like/type_likes/TypeLikes';
import PictureName from '../../../../picture_name/pic_name/PictureName';
import ScreenBlurShowMore from '../../../../_screen_blur/_component/foot/ScreenBlurShowMore';
// 
import './ActionsUserLikedList.scss'

//
ActionsUserLikedList.propTypes = {};

//
function ActionsUserLikedList({ user_liked, getMoreUserLiked }) {
    //
    const { data_arr, count, is_fetching } = user_liked;

    //
    return (
        <div>
            {data_arr.map((user_like, ix) => (
                <div
                    className="ActionsUserLikedList_item padding-8px"
                    key={`${user_like.id || ix}`}
                >
                    <div className="flex-between-center">
                        <PictureName user={user_like.user} />

                        {type_likes[user_like.type_like].component}
                    </div>
                </div>
            ))}

            <ScreenBlurShowMore
                title="Show more..."
                is_show_more={count > data_arr.length}
                handleShowMore={getMoreUserLiked}
                is_fetching={is_fetching}
            />
        </div>
    );
}

export default ActionsUserLikedList;
