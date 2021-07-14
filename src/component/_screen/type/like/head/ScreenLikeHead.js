import React from 'react';
import PropTypes from 'prop-types';
// 
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
// 
import { type_likes } from '../../../../like/list_type_like/type_likes/TypeLikes';
// 
import ScreenLikeType from '../type_like/ScreenLikeType';

//
ScreenLikeHead.propTypes = {};

//
function ScreenLikeHead({
    type_like,
    changeListTypeLike,
    closeScreen,
}) {
    // 
    function changeListTypeLikeAll() {
        changeListTypeLike(-1)
    }

    //
    return (
        <div className="ScreenLike_head position-rel">
            <div className="ScreenLike_head-row display-flex align-items-center margin-auto width-fit-content">
                <div
                    className={`padding-8px cursor-pointer ${
                        type_like == -1 ? 'bottom-blue' : ''
                    }`}
                    onClick={changeListTypeLikeAll}
                >
                    All
                </div>

                {type_likes.map((item, ix) => (
                    <div
                        key={`ScreenLike_type_like_${ix}`}
                        className={`padding-8px cursor-pointer ${
                            type_like == ix ? 'bottom-blue' : ''
                        }`}
                    >
                        <ScreenLikeType
                            ix={ix}
                            changeListTypeLike={changeListTypeLike}
                            component={item.component}
                        />
                    </div>
                ))}
            </div>

            <div className="ScreenLike_icon-close">
                <div
                    className="ScreenLike_icon-close_contain close-icon-small brs-50"
                    onClick={closeScreen}
                >
                    <IconsArrow y={400} size_icon="1rem" />
                </div>
            </div>
        </div>
    );
}

export default ScreenLikeHead;
