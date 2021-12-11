import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { UnitNumber } from '../../../../_some_function/UnitNumber';
import { getPostTitleReacted } from '../../../../_some_function/post/title_reacted';
//
import ListUniqueLike from '../../../like/List_unique_like/_main/ListUniqueLike';
//
import './PrLayoutHomePreviewVideo.scss';
import ProfileLayoutHomePreview from '../../home_preview/ProfileLayoutHomePreview';

//
PrLayoutHomePreviewVideo.propTypes = {};

//
function PrLayoutHomePreviewVideo({
    title,
    link_to,
    is_fetching,
    ProfilePrSkeleton,

    link_to_item,

    content,
    thumbnail,
    video_time,
    view_count,
    created_time_str,

    reacted_ix_arr,
    reacted_count,
    user_reacted_ix,

    on_API_Like_L,
    onOpenDetailLike,
}) {
    //
    return (
        <ProfileLayoutHomePreview
            title={title}
            link_to={link_to}
            is_fetching={is_fetching}
            ProfilePrSkeleton={ProfilePrSkeleton}
        >
            <div className="PrLayoutHomePreviewVideo line-20px">
                <Link
                    className="PrLayoutHomePreviewVideo_thumbnail display-block pos-rel color-inherit hv-after-shadow-05"
                    to={link_to_item}
                >
                    <img
                        className="pos-abs-100 object-fit-cover"
                        src={thumbnail}
                        alt=""
                    />

                    <div className="pos-abs right-0 bottom-0 padding-8px">
                        <div className="padding-x-8px padding-y-5px brs-8px bg-shadow-5 text-white font-500">
                            {video_time}
                        </div>
                    </div>
                </Link>

                <Link
                    className="display-block padding-y-5px text-nowrap font-17px font-600 color-inherit hv-underline"
                    to={link_to_item}
                >
                    {content}
                </Link>

                <div className="font-13px">
                    <ListUniqueLike
                        title={getPostTitleReacted({
                            reacted_count: reacted_count,
                            user_reacted_ix: user_reacted_ix,
                        })}
                        count_like={reacted_count}
                        arr_unique_like={reacted_ix_arr}
                        // div_fix_width={175}
                        //
                        on_API_Like_L={on_API_Like_L}
                        onOpenDetailLike={onOpenDetailLike}
                    />
                </div>

                <Link className="color-inherit hv-underline" to={link_to_item}>
                    <div className="font-13px">
                        {UnitNumber(view_count)} view
                        {view_count >= 2 ? 's' : ''} · {created_time_str}
                    </div>
                </Link>
            </div>
        </ProfileLayoutHomePreview>
    );
}

export default PrLayoutHomePreviewVideo;
