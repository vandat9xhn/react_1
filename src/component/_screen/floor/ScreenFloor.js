import React from 'react';
import PropTypes from 'prop-types';

// 
ScreenFloor.propTypes = {
    
};

// 
function ScreenFloor({FloorComponent, ...props}) {
    return (
        <div>
            {<FloorComponent {...props}/>}
        </div>
    );
}

export default ScreenFloor;