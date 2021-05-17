import React from 'react';
import PropTypes from 'prop-types';

StageReady.propTypes = {
    is_active: PropTypes.bool,
};

function StageReady(props) {
    const {is_active} = props;

    return (
        <div>
            <div className={is_active ? 'text-green' : ''}>
                READY
            </div>
        </div>
    );
}

export default StageReady;