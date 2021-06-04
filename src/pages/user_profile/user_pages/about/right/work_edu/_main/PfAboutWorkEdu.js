import React from 'react';
import PropTypes from 'prop-types';
//
import PfAboutWork from '../work/_main/PfAboutWork';
import PfAboutUniversity from '../university/_main/PfAboutUniversity';
import PfAboutSchool from '../high_school/_main/PfAboutSchool';

//
PfAboutWorkEdu.propTypes = {};

//
function PfAboutWorkEdu(props) {
    //
    const school_arr = [];

    //
    const work_arr = [];

    //
    const university_arr = [];

    //
    const has_fetched = true;

    //
    return (
        <div>
            <div className="PfAbout_part">
                <PfAboutWork work_arr={work_arr} has_fetched={has_fetched} />
            </div>

            <div className="PfAbout_part">
                <PfAboutUniversity
                    university_arr={university_arr}
                    has_fetched={has_fetched}
                />
            </div>

            <div className="PfAbout_part">
                <PfAboutSchool
                    school_arr={school_arr}
                    has_fetched={has_fetched}
                />
            </div>
        </div>
    );
}

export default PfAboutWorkEdu;
