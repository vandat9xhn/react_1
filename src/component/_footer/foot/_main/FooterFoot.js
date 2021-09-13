import React from 'react';
import PropTypes from 'prop-types';

// 
FooterFoot.propTypes = {};

// 
function FooterFoot(props) {
    return (
        <div>
            <div className="App_title bg-shadow-9">
                <span className="color-react">ReactJs</span>
                <span className="active-color">{` - `}</span>
                <span className="color-django">Django</span>
            </div>
        </div>
    );
}

export default FooterFoot;
