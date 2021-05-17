import React from 'react';
import PropTypes from 'prop-types';

import './SkeletonDiv.scss';
//
function SkeletonDiv(props) {
    const {num} = props;
    
    return (
        <div className="SkeletonDiv">
            {
                Array.from({length: num}, (_, k) => k).map(item => (
                    <div key={`SkeletonDiv_${item}`} className="SkeletonDiv_div"/>
                ))
            }
        </div>
    );
}

SkeletonDiv.propTypes = {
    num: PropTypes.number,
};

SkeletonDiv.defaultProps = {
    num: 1,
}

export default SkeletonDiv;