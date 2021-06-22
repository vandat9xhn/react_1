import React from 'react';
import PropTypes from 'prop-types';
//
import './SkeletonDiv.scss';

//
SkeletonDiv.propTypes = {
    num: PropTypes.number,
};

SkeletonDiv.defaultProps = {
    num: 1,
};

//
function SkeletonDiv({ num }) {
    //
    return (
        <div className="SkeletonDiv">
            {Array.from({ length: num }, (_, k) => k).map((item) => (
                <div
                    key={`SkeletonDiv_${item}`}
                    className="SkeletonDiv_contain"
                >
                    <div className="SkeletonDiv_div"></div>
                </div>
            ))}
        </div>
    );
}

export default SkeletonDiv;
