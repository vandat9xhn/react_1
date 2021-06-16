import React from 'react';
import PropTypes from 'prop-types';

//
StageBought.propTypes = {
    is_active: PropTypes.bool,
};

//
function StageBought({ is_active }) {
    //
    return (
        <div>
            <h4 className={`margin-0 ${is_active ? 'text-green' : ''}`}>
                BOUGHT
            </h4>
        </div>
    );
}

export default StageBought;
