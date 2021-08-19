import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { GetIdSlug } from '../../../../../../../_some_function/GetIdSlug';
//
import { initial_place_state } from '../../../../../../../_initial/profile/about';
// 
import { handle_API_UserOverview_r } from '../../../../../../../_handle_api/profile/ProfileHandleAPI';
//
import PfAboutPlace from '../place/_main/PfAboutPlace';

//
PfAboutPlaces.propTypes = {};

//
function PfAboutPlaces(props) {
    //
    const user_id = GetIdSlug();

    //
    const [about_state, setAboutState] = useState(initial_place_state());

    const { town_arr, city_arr, has_fetched } = about_state;

    //
    useEffect(() => {
        getData_API_About();
    }, []);

    //
    async function getData_API_About() {
        const about_obj = await handle_API_UserOverview_r({ user_id: user_id });

        setAboutState({
            town_arr: about_obj.town_arr,
            city_arr: about_obj.city_arr,

            has_fetched: true,
        });
    }

    //
    return (
        <div>
            <div className="PfAbout_part">
                <PfAboutPlace
                    town_arr={town_arr}
                    city_arr={city_arr}
                    has_fetched={has_fetched}
                />
            </div>
        </div>
    );
}

export default PfAboutPlaces;
