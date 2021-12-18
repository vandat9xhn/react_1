import React from 'react';
import PropTypes from 'prop-types';
//
import { content_pic_name_props } from '../../../_prop-types/_CommonPropTypes';
//
import SkeletonDiv from '../../skeleton/skeleton_div/SkeletonDiv';
//
import PicNameImg from '../_components/img/_main/PicNameImg';
// 
import './PictureNameCommon.scss';

//
PictureNameCommon.propTypes = {
    name: PropTypes.string,
    picture: PropTypes.string,
    content: content_pic_name_props,

    use_time_online: PropTypes.bool,
    time_online: PropTypes.number,

    is_inline_block: PropTypes.bool,
    align_center: PropTypes.bool,
};
PictureNameCommon.defaultProps = {
    name: '',
    picture: '',
    content: '',

    use_time_online: false,
    time_online: 0,

    is_inline_block: false,
    align_center: true,
};

//
function PictureNameCommon({
    name,
    picture,
    content,

    use_time_online,
    time_online,
    use_new_story,
    has_new_story,

    is_inline_block,
    align_center,
}) {
    //
    return (
        <div className="PictureNameCommon">
            <div
                className={`PictureNameCommon_row display-flex ${
                    align_center ? 'align-items-center' : ''
                }`}
            >
                <div className="PictureNameCommon_left">
                    <PicNameImg
                        picture={picture}
                        use_time_online={use_time_online}
                        time_online={time_online}
                        use_new_story={use_new_story}
                        has_new_story={has_new_story}
                    />
                </div>

                <div className="PictureNameCommon_right flex-grow-1">
                    {name ? (
                        <div className="PictureNameCommon__name-content">
                            <span className="PictureNameCommon__name font-600">
                                {name}
                            </span>

                            <span
                                className={`PictureNameCommon__content ${
                                    is_inline_block ? '' : 'display-block'
                                }`}
                            >
                                {content}
                            </span>
                        </div>
                    ) : (
                        <SkeletonDiv />
                    )}
                </div>
            </div>
        </div>
    );
}

export default PictureNameCommon;
