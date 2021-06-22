import React from 'react';
import PropTypes from 'prop-types';
//
import SkeletonDiv from '../../../../../../../component/skeleton/skeleton_div/SkeletonDiv';
//
import image_loading from '../../../../../../../../image/image_loading.svg';
import './ProfilePrFrSkeleton.scss';

//
ProfilePrFrSkeleton.propTypes = {};

//
function ProfilePrFrSkeleton(props) {
    return (
        <div>
            <div className="ProfilePrCommon_skeleton_title">
                <SkeletonDiv />
            </div>

            <div>
                <div className="ProfilePrFriend_pic-row display-flex flex-wrap">
                    {Array(9)
                        .fill(1)
                        .map((_, ix) => (
                            <div
                                key={`ProfilePrFrSkeleton_${ix}`}
                                className="ProfilePrFriend_pic-item"
                            >
                                <div>
                                    <img
                                        className="wh-100 brs-5px"
                                        src={image_loading}
                                        alt=""
                                    />
                                </div>

                                <div className="ProfilePrFrSkeleton_pic-name">
                                    <SkeletonDiv />
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default ProfilePrFrSkeleton;
