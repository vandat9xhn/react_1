import React from 'react';
import PropTypes from 'prop-types';
//
import SkeletonDiv from '../../../../../../../component/skeleton/skeleton_div/SkeletonDiv';

//
ProfilePrAboutSkeleton.propTypes = {};

//
function ProfilePrAboutSkeleton(props) {
    return (
        <div>
            <div className="ProfilePrCommon_skeleton_title">
                <SkeletonDiv />
            </div>

            <div className="ProfilePrAbout ProfilePrAboutSkeleton_item">
                <div>
                    <SkeletonDiv />
                </div>

                <div>
                    <SkeletonDiv />
                </div>

                <div>
                    <SkeletonDiv />
                </div>

                <div>
                    <SkeletonDiv></SkeletonDiv>
                </div>
            </div>
        </div>
    );
}

export default ProfilePrAboutSkeleton;
