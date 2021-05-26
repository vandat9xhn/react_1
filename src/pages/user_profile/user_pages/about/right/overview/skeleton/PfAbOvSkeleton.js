import React from 'react';
import PropTypes from 'prop-types';
//
import SkeletonDiv from '../../../../../../../component/skeleton/skeleton_div/SkeletonDiv';

//
PfAbOvSkeleton.propTypes = {};

//
function PfAbOvSkeleton(props) {
    return (
        <div>
            {[1, 2, 3, 4].map((item) => (
                <div key={`PfAbOvSkeleton_${item}`} className="padding-8px">
                    <SkeletonDiv />
                </div>
            ))}
        </div>
    );
}

export default PfAbOvSkeleton;
