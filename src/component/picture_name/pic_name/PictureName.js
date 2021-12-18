import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import {
    content_pic_name_props,
    user_default,
    user_propTypes,
} from '../../../_prop-types/_CommonPropTypes';
//
import PictureNameCommon from '../_main/PictureNameCommon';

//
PictureName.propTypes = {
    ...user_propTypes,
    content: content_pic_name_props,

    use_time_online: PropTypes.bool,
    is_inline_block: PropTypes.bool,
    align_center: PropTypes.bool,
};

PictureName.defaultProps = {
    ...user_default,
    content: '',
};

//
function PictureName({
    link_class,

    user,
    content,

    use_time_online,
    is_inline_block,
    align_center,
}) {
    //
    const { id, picture, first_name, last_name, time_online } = user;

    //
    function handleClickLink(e) {
        !id && e.preventDefault();
    }

    //
    return (
        <div className="PictureName">
            <Link
                to={`/profile/${id}`}
                className={link_class || 'normal-text hv-cl-blue'}
                onClick={handleClickLink}
            >
                <PictureNameCommon
                    picture={picture}
                    name={first_name + ' ' + last_name}
                    use_time_online={use_time_online}
                    time_online={time_online}
                    content={content}
                    //
                    is_inline_block={is_inline_block}
                    align_center={align_center}
                />
            </Link>
        </div>
    );
}

export default PictureName;
