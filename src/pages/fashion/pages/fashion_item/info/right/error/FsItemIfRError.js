import React from 'react';
import PropTypes from 'prop-types';

// 
FsItemIfRError.propTypes = {
    
};

// 
function FsItemIfRError({error_add_cart}) {
    // 
    return (
        <div className="FsItemIfRError text-red">
            {error_add_cart}
        </div>
    );
}

export default FsItemIfRError;