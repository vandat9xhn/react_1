import React from 'react';
import PropTypes from 'prop-types';
//
import { content_pic_name_props } from '../../../_prop-types/_CommonPropTypes';
// 
import SkeletonDiv from '../../skeleton/skeleton_div/SkeletonDiv';
//
import white_person from '../../../../image/white_person.svg';
import './PictureNameCommon.scss';

//
PictureNameCommon.propTypes = {
    name: PropTypes.string,
    picture: PropTypes.string,
    content: content_pic_name_props,
    is_inline_block: PropTypes.bool,
};
PictureNameCommon.defaultProps = {
    name: '',
    picture: '',
    content: '',
    is_inline_block: false
};

//
function PictureNameCommon(props) {
    const { name, picture, content, is_inline_block } = props;

    //
    return (
        <div className="PictureNameCommon_contain" title={name}>
            <div className="PictureNameCommon_row display-flex align-items-center">
                <div className="PictureNameCommon_left">
                    <div className="PictureNameCommon__pic brs-50">
                        <img
                            className="wh-100"
                            src={picture || white_person}
                            alt=""
                        />
                    </div>
                </div>

                <div className="PictureNameCommon_right">
                    {name ? (
                        <div className="PictureNameCommon__name-content">
                            <span className="PictureNameCommon__name label-field">
                                {name}
                            </span>

                            <span className={`PictureNameCommon__content ${is_inline_block ? '' : 'display-block'}`}>
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
