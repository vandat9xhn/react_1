import React from 'react';
import PropTypes from 'prop-types';

// 
StageBought.propTypes = {
    is_active: PropTypes.bool,
};

// 
function StageBought(props) {
    const {is_active} = props;

    return (
        <div>
            <div className={is_active ? 'text-green' : ''}>
                BOUGHT
            </div>
        </div>
    );
}

export default StageBought;