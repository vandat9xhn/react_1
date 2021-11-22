import React from 'react';
import PropTypes from 'prop-types';
//
// import './PostHeadLayout.scss';

//
PostHeadLayout.propTypes = {};

//
function PostHeadLayout({
    left_elm,
    center_top_elm,
    center_bottom_elm,
    right_elm,
}) {
    //
    return (
        <div className="PostHeadLayout padding-10px">
            <div className="PostHeadLayout_row display-flex">
                <div className="PostHeadLayout_left">{left_elm}</div>

                <div className="PostHeadLayout_center flex-grow-1 padding-x-10px line-20px">
                    <div className="PostHeadLayout_center_top">
                        {center_top_elm}
                    </div>

                    <div className="PostHeadLayout_center_bottom font-13px text-secondary">
                        {center_bottom_elm}
                    </div>
                </div>

                <div className="PostHeadLayout_right">{right_elm}</div>
            </div>
        </div>
    );
}

export default PostHeadLayout;
