import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { GetIdSlug } from '../../../../../../../_some_function/GetIdSlug';
// 
import { handle_API_UserOverview_r } from '../../../../../../../_handle_api/profile/ProfileHandleAPI';
// 
import { initial_work_edu_state } from '../../../__common/initial/initial';
// 
import PfAboutWork from '../work/_main/PfAboutWork';
import PfAboutUniversity from '../university/_main/PfAboutUniversity';
import PfAboutSchool from '../high_school/_main/PfAboutSchool';

//
PfAboutWorkEdu.propTypes = {};

//
function PfAboutWorkEdu(props) {
    //
    const user_id = GetIdSlug();

    //
    const [about_state, setAboutState] = useState({
        ...initial_work_edu_state,
    });

    const { school_arr, university_arr, work_arr, has_fetched } = about_state;

    //
    useEffect(() => {
        getData_API_About();
    }, []);

    //
    async function getData_API_About() {
        const about_obj = await handle_API_UserOverview_r({ user_id: user_id });

        setAboutState({
            work_arr: about_obj.work_arr,
            school_arr: about_obj.school_arr,
            university_arr: about_obj.university_arr,

            has_fetched: true,
        });
    }

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
