import React from 'react';
import PropTypes from 'prop-types';
//
import { content_pic_name_props } from '../../../_prop-types/_CommonPropTypes';
//
import PictureNameCommon from '../_main/PictureNameCommon';

//
PicNameContent.propTypes = {
    user: PropTypes.object,
    content: content_pic_name_props,
    
    use_time_online: PropTypes.bool,
    is_inline_block: PropTypes.bool,
    align_center: PropTypes.bool,
    
    handleClick: PropTypes.func,
};

//
function PicNameContent({
    user,
    content,

    use_time_online,
    is_inline_block,
    align_center,

    handleClick,
}) {
    const { id, picture, first_name, last_name, time_online } = user;

    //
    return (
        <div className="PicNameContent" onClick={handleClick}>
            <PictureNameCommon
                name={first_name ? first_name + ' ' + last_name : undefined}
                picture={picture}
                use_time_online={use_time_online}
                time_online={time_online}
                //
                content={content}
                is_inline_block={is_inline_block}
                align_center={align_center}
            />
        </div>
    );
}

export default PicNameContent;
