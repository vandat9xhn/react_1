import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// 
import { content_pic_name_props, user_default, user_propTypes } from '../../../_prop-types/_CommonPropTypes';
//
import PictureNameCommon from '../_main/PictureNameCommon';

//
PictureName.propTypes = {
    ...user_propTypes,
    content: content_pic_name_props,
    is_inline_block: PropTypes.bool,
};

PictureName.defaultProps = {
    ...user_default,
    content: '',
};

//
function PictureName(props) {
    const { link_class, content } = props;
    const { id, picture, first_name, last_name } = props.user;

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
                    content={content}
                />
            </Link>
        </div>
    );
}

export default PictureName;
