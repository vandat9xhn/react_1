import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../_context/ContextAPI';
// 
import { GetIdSlug } from '../../../../../../../_some_function/GetIdSlug';
//
import { handle_API_UserOverview_r } from '../../../../../../../_handle_api/profile/ProfileHandleAPI';
//
import { initial_detail_state } from '../../../__common/initial/initial';
//
import PfAboutYou from '../about_you/_main/PfAboutYou';
import PfAboutOtherName from '../other_name/_main/PfAboutOtherName';
import PfAboutFavour from '../favourite/_main/PfAboutFavour';
import AboutNoItem from '../../_component/no_item/AboutNoItem';

//
PfAboutDetails.propTypes = {};

//
function PfAboutDetails({ name }) {
    //
    const { id } = useContext(context_api).user;

    //
    const user_id = GetIdSlug();

    //
    const [about_state, setAboutState] = useState({
        ...initial_detail_state,
    });

    const {
        you_obj,
        other_name_arr,
        favour_obj,

        has_fetched,
        no_item,
    } = about_state;

    //
    useEffect(() => {
        getData_API_About();
    }, []);

    //
    async function getData_API_About() {
        const about_obj = await handle_API_UserOverview_r({ user_id: user_id });

        setAboutState({
            you_obj: about_obj.you_obj,
            other_name_arr: about_obj.other_name_arr,
            favour_obj: about_obj.favour_obj,

            has_fetched: true,
            no_item: !(
                about_obj.you_obj.title ||
                about_obj.other_name_arr.length ||
                about_obj.favour_obj.title
            ),
        });
    }

    //
    return (
        <div>
            <h3 className="PfAbout_title">Details about {id == user_id ? 'you' : name}</h3>

            <div>
                <AboutNoItem
                    has_fetched={has_fetched}
                    no_item={no_item}
                    title={`No detail to show`}
                >
                    <div>
                        <div className="PfAbout_part">
                            <PfAboutYou you_obj={you_obj} />
                        </div>

                        <div className="PfAbout_part">
                            <PfAboutOtherName other_name_arr={other_name_arr} />
                        </div>

                        <div className="PfAbout_part">
                            <PfAboutFavour favour_obj={favour_obj} />
                        </div>
                    </div>
                </AboutNoItem>
            </div>
        </div>
    );
}

export default PfAboutDetails;
