import React from 'react';
import PropTypes from 'prop-types';
// 
import SkeletonDiv from '../../../../../../component/skeleton/skeleton_div/SkeletonDiv';

// 
FashionItemCmtSkeleton.propTypes = {};

// 
function FashionItemCmtSkeleton(props) {
    // 
    return (
        <div>
            {[1, 2, 3, 4, 5].map((ix) => (
                <div
                    key={`FashionItemCmt_skeleton_${ix}`}
                    className="FashionItemCmt_skeleton"
                >
                    <div className="FashionItemCmt_skeleton-user">
                        <SkeletonDiv />
                    </div>

                    <div className="FashionItemCmt_skeleton-content">
                        <SkeletonDiv />
                    </div><br />
                </div>
            ))}
        </div>
    );
}

export default FashionItemCmtSkeleton;
