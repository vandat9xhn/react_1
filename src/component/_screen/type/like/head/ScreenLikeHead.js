import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import { type_likes } from '../../../../like/list_type_like/type_likes/TypeLikes';
//
import ScreenLikeType from '../type_like/ScreenLikeType';
//
import './ScreenLikeHead.scss';

//
ScreenLikeHead.propTypes = {};

//
function ScreenLikeHead({
    type_like,
    reacted_count_arr,

    changeListTypeLike,
    closeScreen,
}) {
    //
    function changeListTypeLikeAll() {
        changeListTypeLike(-1);
    }

    //
    return (
        <div className="ScreenLikeHead pos-rel padding-left-16px text-secondary">
            <div className="ScreenLikeHead_row display-flex align-items-center overflow-x-auto scroll-height-0">
                <div
                    className={`ScreenLikeHead_item padding-x-16px ${
                        type_like == -1 ? 'ScreenLikeHead_item-active' : ''
                    }`}
                    onClick={changeListTypeLikeAll}
                >
                    All
                </div>

                {type_likes.map((item, ix) =>
                    reacted_count_arr[ix + 1] ? (
                        <div
                            key={ix}
                            className={`ScreenLikeHead_item ${
                                type_like == ix
                                    ? 'ScreenLikeHead_item-active nav-active'
                                    : ''
                            }`}
                        >
                            <ScreenLikeType
                                ix={ix}
                                count={reacted_count_arr[ix].count}
                                changeListTypeLike={changeListTypeLike}
                                component={item.component}
                            />
                        </div>
                    ) : null
                )}
            </div>

            <div
                className="ScreenLikeHead_close pos-abs display-flex-center brs-50 bg-ccc cursor-pointer"
                onClick={closeScreen}
            >
                <IconsArrow y={400} size_icon="24px" />
            </div>
        </div>
    );
}

export default ScreenLikeHead;
