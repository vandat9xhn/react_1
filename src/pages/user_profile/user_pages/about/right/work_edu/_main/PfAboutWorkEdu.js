import React from 'react';
import PropTypes from 'prop-types';
// 
import PfAboutWork from '../work/_main/PfAboutWork';
import PfAboutUniversity from '../university/_main/PfAboutUniversity';
import PfAboutSchool from '../high_school/_main/PfAboutSchool';

// 
PfAboutWorkEdu.propTypes = {
    
};

// 
function PfAboutWorkEdu(props) {
    // 
    const school_arr = []

    // 
    const work_arr = []

    // 
    const university_arr = []

    // 
    return (
        <div>
            <div className="PfAbout_part">
                <PfAboutWork work_arr={work_arr} />
            </div>

            <div className="PfAbout_part">
                <PfAboutUniversity university_arr={university_arr} />
            </div>

            <div className="PfAbout_part">
                <PfAboutSchool school_arr={school_arr} />
            </div>
        </div>
    );
}

export default PfAboutWorkEdu;