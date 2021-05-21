import React from 'react';
import PropTypes from 'prop-types';
//
import SkeletonDiv from '../../../../../../../component/skeleton/skeleton_div/SkeletonDiv';
// 
import './ProfilePrIntroSkeleton.scss';

//
ProfilePrIntroSkeleton.propTypes = {};

//
function ProfilePrIntroSkeleton(props) {
    return (
        <div>
            <div className="ProfilePrCommon_skeleton_title">
                <SkeletonDiv />
            </div>

            <div className="ProfilePrIntro ProfilePrIntroSkeleton_item">
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

export default ProfilePrIntroSkeleton;
