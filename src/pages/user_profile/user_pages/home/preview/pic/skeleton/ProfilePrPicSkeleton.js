import React from 'react';
import PropTypes from 'prop-types';
//
import SkeletonDiv from '../../../../../../../component/skeleton/skeleton_div/SkeletonDiv';
//
import image_loading from '../../../../../../../../image/image_loading.svg';
//

//
ProfilePrPicSkeleton.propTypes = {};

//
function ProfilePrPicSkeleton(props) {
    return (
        <div>
            <div className="ProfilePrCommon_skeleton_title">
                <SkeletonDiv />
            </div>

            <div>
                <div className="ProfilePrPic_row display-flex flex-wrap">
                    {Array(9)
                        .fill(1)
                        .map((_, ix) => (
                            <div
                                key={`ProfilePrPicSkeleton_${ix}`}
                                className="ProfilePrPic_item"
                            >
                                <img
                                    className="wh-100 padding-8px brs-5px"
                                    src={image_loading}
                                    alt=""
                                />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default ProfilePrPicSkeleton;
