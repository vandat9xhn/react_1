import React from 'react';
import PropTypes from 'prop-types';
//
import IconLike from '../../../../../../../../_icons_svg/icons_like/icon_like/IconLike';
// 
import './FsRateIsGood.scss';

//
FsRateIsGood.propTypes = {};

//
function FsRateIsGood({ count_like, user_liked, handleLikeRate }) {
    //
    return (
        <div className="FsRateIsGood">
            <div className="display-flex align-items-center">
                <div className="cursor-pointer" onClick={handleLikeRate}>
                    <IconLike
                        size_icon="20px"
                        stroke="none"
                        fill={
                            user_liked
                                ? 'var(--fashion-head)'
                                : 'var(--md-bg-blur)'
                        }
                    />
                </div>

                <div className="FsRateIsGood_right margin-left-5px">
                    {count_like || 'Hữu Ích?'}
                </div>
            </div>
        </div>
    );
}

export default FsRateIsGood;
