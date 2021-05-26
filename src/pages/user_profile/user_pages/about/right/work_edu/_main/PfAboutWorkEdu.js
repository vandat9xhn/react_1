import React from 'react';
import PropTypes from 'prop-types';
// 
import PfAboutWork from '../work/_main/PfAboutWork';
import PfAboutUniversity from '../university/_main/PfAboutuniversity';
import PfAboutSchool from '../high_school/_main/PfAboutSchool';

// 
PfAboutWorkEdu.propTypes = {
    
};

// 
function PfAboutWorkEdu(props) {
    return (
        <div>
            <div className="PfAbout_part">
                <PfAboutWork />
            </div>

            <div className="PfAbout_part">
                <PfAboutUniversity />
            </div>

            <div className="PfAbout_part">
                <PfAboutSchool />
            </div>
        </div>
    );
}

export default PfAboutWorkEdu;