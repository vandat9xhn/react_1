import React from 'react';
import PropTypes from 'prop-types';
//
import PfAboutTown from '../town/_main/PfAboutTown';
import PfAboutCity from '../city/_main/PfAboutCity';

//
PfAboutPlace.propTypes = {};

//
function PfAboutPlace({ town_arr, city_arr, has_fetched }) {
    //
    return (
        <div>
            <div className="PfAbout_part">
                <PfAboutTown town_arr={town_arr} has_fetched={has_fetched} />
            </div>

            <div className="PfAbout_part">
                <PfAboutCity city_arr={city_arr} has_fetched={has_fetched} />
            </div>
        </div>
    );
}

export default PfAboutPlace;
