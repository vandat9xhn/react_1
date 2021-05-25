import React from 'react';
import PropTypes from 'prop-types';
// 
import PostSkeleton from '../../../../../component/posts/_post/skeleton/PostSkeleton';
import ProfilePrAboutSkeleton from '../preview/about/skeleton/ProfilePrAboutSkeleton';
import ProfilePrPicSkeleton from '../preview/pic/skeleton/ProfilePrPicSkeleton';
import ProfilePrFrSkeleton from '../preview/friend/skeleton/ProfilePrFrSkeleton';

// 
ProfileHomeSkeleton.propTypes = {
    
};

// 
function ProfileHomeSkeleton() {
    return (
        <div className="ProfileHomeSkeleton">
            <div className="ProfileHome_row display-flex justify-content-center">
                <div className="ProfileHome_col-left">
                    <div><ProfilePrAboutSkeleton /></div>

                    <div><ProfilePrPicSkeleton /></div>

                    <div><ProfilePrFrSkeleton /></div>
                </div>

                <div className="ProfileHome_col-right">
                    <PostSkeleton />
                </div>
            </div>
        </div>
    );
}

export default ProfileHomeSkeleton;