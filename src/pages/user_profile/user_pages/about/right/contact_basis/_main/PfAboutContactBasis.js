import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { GetIdSlug } from '../../../../../../../_some_function/GetIdSlug';
//
import { initial_contact_basis_state } from '../../../../../../../_initial/profile/about';
//
import { handle_API_UserOverview_r } from '../../../../../../../_handle_api/profile/ProfileHandleAPI';
//
import { useMounted } from '../../../../../../../_hooks/useMounted';
//
//
import PfAboutContact from '../contact/_main/PfAboutContact';
import PfAboutBasis from '../basis/_main/PfAboutBasis';
//
import './PfAboutContactBasis.scss';

//
PfAboutContactBasis.propTypes = {};

//
function PfAboutContactBasis(props) {
    //
    const user_id = GetIdSlug();

    //
    const [about_state, setAboutState] = useState(
        initial_contact_basis_state()
    );

    const {
        phone_arr,
        email_obj,
        address_arr,

        gender_obj,
        birth_obj,
        lang_obj,

        has_fetched,
    } = about_state;

    //
    const mounted = useMounted();

    //
    useEffect(() => {
        getData_API_About();
    }, []);

    //
    async function getData_API_About() {
        if (!mounted) {
            return;
        }

        const about_obj = await handle_API_UserOverview_r({ user_id: user_id });

        mounted &&
            setAboutState({
                phone_arr: about_obj.phone_arr,
                email_obj: about_obj.email_obj,
                address_arr: about_obj.address_arr,

                gender_obj: about_obj.gender_obj,
                birth_obj: about_obj.birth_obj,
                lang_obj: about_obj.lang_obj,

                has_fetched: true,
            });
    }

    //
    return (
        <div>
            <div className="PfAbout_part">
                <PfAboutContact
                    phone_arr={phone_arr}
                    email_obj={email_obj}
                    address_arr={address_arr}
                    has_fetched={has_fetched}
                />
            </div>

            <div className="PfAbout_part">
                <PfAboutBasis
                    gender_obj={gender_obj}
                    birth_obj={birth_obj}
                    lang_obj={lang_obj}
                    has_fetched={has_fetched}
                />
            </div>
        </div>
    );
}

export default PfAboutContactBasis;
