import React from 'react';
import PropTypes from 'prop-types';
//
import { UnitNumber } from '../../../../../../../_some_function/UnitNumber';
//
import IconLike from '../../../../../../../_icons_svg/icons_like/icon_like/IconLike';
//
import ProfileLayoutAboutPreviewItem from '../../../../../../../component/profile_layout/about_preview_item/ProfileLayoutAboutPreviewItem';
import OverlapPics from '../../../../../../../component/overlap_pics/_main/OverlapPics';

//
FPHomeAboutLike.propTypes = {};

//
function FPHomeAboutLike({ like_obj }) {
    //
    const { count, friend_arr, friend_count } = like_obj;

    //
    return (
        <div className="FPHomeAboutLike">
            <ProfileLayoutAboutPreviewItem Icon={<IconLike />}>
                <div>
                    <div>
                        <span>{UnitNumber(count)} people like this</span>

                        {friend_count == 0 ? null : (
                            <span>
                                , including {friend_count} of your friend
                                {friend_count >= 2 ? 's' : ''}
                            </span>
                        )}
                    </div>

                    <div>
                        <OverlapPics pic_arr={friend_arr} />
                    </div>
                </div>
            </ProfileLayoutAboutPreviewItem>
        </div>
    );
}

export default FPHomeAboutLike;
