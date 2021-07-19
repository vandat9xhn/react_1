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
            {Array(6)
                .fill(1)
                .map((_, ix) => (
                    <div
                        key={`FashionItemCmt_skeleton_${ix}`}
                        className="FashionItemCmt_skeleton"
                    >
                        <div className="FashionItemCmt_skeleton-user">
                            <SkeletonDiv />
                        </div>

                        <div className="FashionItemCmt_skeleton-content">
                            <SkeletonDiv />
                        </div>
                        <br />
                    </div>
                ))}
        </div>
    );
}

export default FashionItemCmtSkeleton;
