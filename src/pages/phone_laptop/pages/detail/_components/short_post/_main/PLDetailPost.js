import React from 'react';
import PropTypes from 'prop-types';
//
import IconCaret from '../../../../../../../_icons_svg/_icon_caret/IconCaret';
//
import './PLDetailPost.scss';

//
PLDetailPost.propTypes = {};

//
function PLDetailPost({ post, openDetailPost }) {
    //
    return (
        <div className="PLDetailPost pos-rel">
            <div className="PLDetailPost_contain margin-bottom-15px overflow-hidden font-16px">
                <h3 className="font-20px font-700">Bài viết đánh giá</h3>

                {post}
            </div>

            <div className="pos-abs left-0 bottom-0 w-100per">
                <div className="PLDetailPost_more display-flex justify-content-center align-items-end">
                    <button
                        className="PLDetailPost_more_btn margin-auto w-100per padding-y-10px border-blue brs-4px text-blue"
                        type="button"
                        onClick={openDetailPost}
                    >
                        <span className="margin-right-10px">Xem thêm</span>

                        <IconCaret
                            class_icon="rotate--90"
                            fill="currentColor"
                            size_icon="14px"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PLDetailPost;
