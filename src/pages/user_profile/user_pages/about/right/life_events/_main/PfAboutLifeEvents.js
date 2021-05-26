import React from 'react';
import PropTypes from 'prop-types';
// 
import PfAboutLifeEvent from '../life_event/_main/PfAboutLifeEvent';

// 
PfAboutLifeEvents.propTypes = {
    
};

// 
function PfAboutLifeEvents(props) {
    return (
        <div>
            <div className="PfAbout_part">
                <PfAboutLifeEvent />
            </div>
        </div>
    );
}

export default PfAboutLifeEvents;