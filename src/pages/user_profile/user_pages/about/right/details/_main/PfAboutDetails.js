import React from 'react';
import PropTypes from 'prop-types';
// 
import PfAboutYou from '../about_you/_main/PfAboutYou';
import PfAboutName from '../other_name/_main/PfAboutName';
import PfAboutFavourite from '../favourite/_main/PfAboutFavourite';

// 
PfAboutDetails.propTypes = {
    
};

// 
function PfAboutDetails(props) {
    return (
        <div>
            <div className="PfAbout_part">
                <PfAboutYou />
            </div>

            <div className="PfAbout_part">
                <PfAboutName />
            </div>

            <div className="PfAbout_part">
                <PfAboutFavourite />
            </div>
        </div>
    );
}

export default PfAboutDetails;