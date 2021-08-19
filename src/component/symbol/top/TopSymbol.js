import React from 'react';
import PropTypes from 'prop-types';
// 
import './TopSymbol.scss';

// 
TopSymbol.propTypes = {
    
};

// 
function TopSymbol() {
    // 
    return (
        <div className="TopSymbol pos-rel text-align-center">
            <span className="text-white font-700 font-10px">
                TOP
            </span>
        </div>
    );
}

export default TopSymbol;