import React from 'react';
import PropTypes from 'prop-types';
//
import PfAboutLifeEvent from '../life_event/_main/PfAboutLifeEvent';

//
PfAboutLifeEvents.propTypes = {};

//
function PfAboutLifeEvents(props) {
    //
    const life_event_arr = [];

    //
    const has_fetched = true;

    //
    return (
        <div>
            <div className="PfAbout_part">
                <PfAboutLifeEvent
                    life_event_arr={life_event_arr}
                    has_fetched={has_fetched}
                />
            </div>
        </div>
    );
}

export default PfAboutLifeEvents;
