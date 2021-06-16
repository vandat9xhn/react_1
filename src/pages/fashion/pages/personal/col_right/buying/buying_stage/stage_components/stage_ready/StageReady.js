import React from 'react';
import PropTypes from 'prop-types';

// 
StageReady.propTypes = {
    is_active: PropTypes.bool,
};

// 
function StageReady({ is_active }) {
    //
    return (
        <div>
            <h4 className={`margin-0 ${is_active ? 'text-green' : ''}`}>
                READY
            </h4>
        </div>
    );
}

export default StageReady;
