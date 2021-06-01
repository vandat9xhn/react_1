import React from 'react';
import PropTypes from 'prop-types';
// 
import PfAboutLifeEvent from '../life_event/_main/PfAboutLifeEvent';

// 
PfAboutLifeEvents.propTypes = {
    
};

// 
function PfAboutLifeEvents(props) {
    const life_event_arr = []

    // 
    return (
        <div>
            <div className="PfAbout_part">
                <PfAboutLifeEvent life_event_arr={life_event_arr} />
            </div>
        </div>
    );
}

export default PfAboutLifeEvents;