import React from 'react';
import PropTypes from 'prop-types';
//
import { getBgColorOrImg } from '../../../../../_some_function/getBgColorOrImg';
//
import ContentMore from '../../../../content_more/Content_more';
//
import './PostText.scss';

//
PostText.propTypes = {};

//
function PostText({ bg_obj, content_obj, seeMoreContent }) {
    //
    return (
        <div
            className={`PostText padding-10px ${
                bg_obj && bg_obj.bg
                    ? 'PostText-bg display-flex-center text-align-center font-16px font-700'
                    : ''
            }`}
            style={{
                ...(bg_obj
                    ? {
                          ...getBgColorOrImg({
                              is_bg_img: bg_obj.is_bg_img,
                              bg: bg_obj.bg,
                          }),
                          color: bg_obj.color,
                      }
                    : {}),
            }}
        >
            <div className="max-h-100per overflow-y-auto scroll-thin">
                <ContentMore
                    content_obj={content_obj}
                    seeMoreContent={seeMoreContent}
                />
            </div>
        </div>
    );
}

export default PostText;
