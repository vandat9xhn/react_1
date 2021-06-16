import React from 'react';
import PropTypes from 'prop-types';

//
StageBuying.propTypes = {
    is_active: PropTypes.bool,
};

//
function StageBuying({ is_active }) {
    //
    return (
        <div>
            <h4 className={`margin-0 ${is_active ? 'text-green' : ''}`}>
                BUYING
            </h4>
        </div>
    );
}

export default StageBuying;
