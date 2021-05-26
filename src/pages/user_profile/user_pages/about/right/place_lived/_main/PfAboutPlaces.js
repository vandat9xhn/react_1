import React from 'react';
import PropTypes from 'prop-types';
// 
import PfAboutPlace from '../place/_main/PfAboutPlace';


// 
PfAboutPlaces.propTypes = {
    
};

// 
function PfAboutPlaces(props) {
    return (
        <div>
            <div className="PfAbout_part">
                <PfAboutPlace />
            </div>
        </div>
    );
}

export default PfAboutPlaces;