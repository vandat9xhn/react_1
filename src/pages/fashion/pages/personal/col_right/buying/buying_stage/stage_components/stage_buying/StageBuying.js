import React from 'react';
import PropTypes from 'prop-types';

// 
StageBuying.propTypes = {
    is_active: PropTypes.bool,
};

// 
function StageBuying(props) {
    const {is_active} = props;

    return (
        <div>
            <div className={is_active ? 'text-green' : ''}>
                Buying
            </div>
        </div>
    );
}

export default StageBuying;