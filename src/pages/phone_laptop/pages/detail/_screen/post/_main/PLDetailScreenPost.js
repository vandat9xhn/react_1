import React from 'react';
import PropTypes from 'prop-types';
//
import IconLike from '../../../../../../../_icons_svg/icons_like/icon_like/IconLike';
//
import './PLDetailScreenPost.scss';

//
PLDetailScreenPost.propTypes = {};

//
function PLDetailScreenPost({ post, handleLikePost, handleDislikePost }) {
    //
    return (
        <div className="PLDetailScreenPost">
            <div>{post}</div>

            <div className="PLDetailScreenPost_rate margin-y-20px">
                <div>Bài viết này có hữu ích cho Bạn không?</div>

                <div>
                    <div onClick={handleLikePost}>
                        <div>
                            <IconLike size_icon="20px" stroke="var(--blue)" />
                        </div>

                        <div>Hữu ích</div>
                    </div>

                    <div onClick={handleDislikePost}>
                        <div>
                            <IconLike size_icon="20px" stroke="var(--blue)" />
                        </div>

                        <div>Không hữu ích</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PLDetailScreenPost;
