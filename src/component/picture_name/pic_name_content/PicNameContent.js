import React from 'react';
import PropTypes from 'prop-types';
// 
import { content_pic_name_props } from '../../../_prop-types/_CommonPropTypes';
// 
import PictureNameCommon from '../_main/PictureNameCommon';

// 
PicNameContent.propTypes = {
    user: PropTypes.object,
    handleClick: PropTypes.func,
    content: content_pic_name_props,
    is_inline_block: PropTypes.bool,
};

// 
function PicNameContent(props) {
    const {user, content, is_inline_block, handleClick} = props;
    const { id, picture, first_name, last_name } = user;

    // 
    return (
        <div className="PicNameContent" onClick={handleClick}>
            <PictureNameCommon
                name={first_name ? first_name + ' ' + last_name : undefined}
                picture={picture}
                content={content}
                is_inline_block={is_inline_block}
            />
        </div>
    );
}

export default PicNameContent;