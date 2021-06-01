import React from 'react';
import PropTypes from 'prop-types';
// 
import AddDiv from '../../../../../../../../component/some_div/add_div/AddDiv';
import PfAboutTown from '../town/_main/PfAboutTown';
import PfAboutCity from '../city/_main/PfAboutCity';

// 
PfAboutPlace.propTypes = {
    
};

// 
function PfAboutPlace(props) {
    // 
    const town_arr = []

    // 
    const city_arr = []

    // 
    return (
        <div>
            <div className="PfAbout_part">
                <PfAboutTown town_arr={town_arr} />
            </div>

            <div className="PfAbout_part">
                <PfAboutCity city_arr={city_arr} />
            </div>
        </div>
    );
}

export default PfAboutPlace;