import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { GetIdSlug } from '../../../../../../../_some_function/GetIdSlug';
// 
import { handle_API_UserOverview_r } from '../../../../../__handle_api/ProfileHandleAPI';
// 
import { initial_life_state } from '../../../__common/initial/initial';
//
import PfAboutLifeEvent from '../life_event/_main/PfAboutLifeEvent';

//
PfAboutLifeEvents.propTypes = {};

//
function PfAboutLifeEvents(props) {
    //
    const user_id = GetIdSlug();

    //
    const [about_state, setAboutState] = useState({
        ...initial_life_state,
    });

    const { life_event_arr, has_fetched } = about_state;

    //
    useEffect(() => {
        getData_API_About();
    }, []);

    //
    async function getData_API_About() {
        const about_obj = await handle_API_UserOverview_r({ user_id: user_id });

        setAboutState({
            life_event_arr: about_obj.life_event_arr,

            has_fetched: true,
        });
    }

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
