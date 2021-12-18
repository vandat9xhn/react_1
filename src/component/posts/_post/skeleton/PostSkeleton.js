import React from 'react';
import PropTypes from 'prop-types';
//
import SkeletonDiv from '../../../skeleton/skeleton_div/SkeletonDiv';

//
PostSkeleton.propTypes = {};

//
function PostSkeleton(props) {
    // 
    return (
        <div className="Post bg-primary brs-5px-md box-shadow-1">
            <div className="padding-8px">
                <div className="display-flex">
                    <div className="PicNameImg brs-50"></div>

                    <div className="PostSkeleton_name">
                        <SkeletonDiv />
                    </div>
                </div>
            </div>

            <div className="VidPics_grid"></div>
        </div>
    );
}

export default PostSkeleton;
