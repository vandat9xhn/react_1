import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { GetIdSlug } from '../../../../../../../_some_function/GetIdSlug';
// 
import { handle_API_UserOverview_r } from '../../../../../../../_handle_api/profile/ProfileHandleAPI';
// 
import { initial_relation_state } from '../../../__common/initial/initial';
// 
import PfAboutRelationship from '../relationship/_main/PfAboutRelationship';
import PfAboutFamily from '../family/_main/PfAboutFamily';

//
PfAboutRelations.propTypes = {};

//
function PfAboutRelations(props) {
    //
    const user_id = GetIdSlug();

    //
    const [about_state, setAboutState] = useState({
        ...initial_relation_state,
    });

    const { relationship_obj, family_arr, has_fetched } = about_state;

    //
    useEffect(() => {
        getData_API_About();
    }, []);

    //
    async function getData_API_About() {
        const about_obj = await handle_API_UserOverview_r({ user_id: user_id });

        setAboutState({
            relationship_obj: about_obj.relationship_obj,
            family_arr: about_obj.family_arr,

            has_fetched: true,
        });
    }

    //
    return (
        <div>
            <div className="PfAbout_part">
                <PfAboutRelationship
                    relationship_obj={relationship_obj}
                    has_fetched={has_fetched}
                />
            </div>

            <div className="PfAbout_part">
                <PfAboutFamily
                    family_arr={family_arr}
                    has_fetched={has_fetched}
                />
            </div>
        </div>
    );
}

export default PfAboutRelations;
