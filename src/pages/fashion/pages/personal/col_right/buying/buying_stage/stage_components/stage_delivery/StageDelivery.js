import React from 'react';
import PropTypes from 'prop-types';

StageDelivery.propTypes = {
    is_active: PropTypes.bool,
};

function StageDelivery({ is_active }) {
    //
    return (
        <div>
            <h4 className={`margin-0 ${is_active ? 'text-green' : ''}`}>
                DELIVERY
            </h4>
        </div>
    );
}

export default StageDelivery;
