import React from 'react';
import PropTypes from 'prop-types';

StageDelivery.propTypes = {
    is_active: PropTypes.bool,
};

function StageDelivery(props) {
    const {is_active} = props;

    return (
        <div>
            <div className={is_active ? 'text-green' : ''}>
                DELIVERY
            </div>
        </div>
    );
}

export default StageDelivery;