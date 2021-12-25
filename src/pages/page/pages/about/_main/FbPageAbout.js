import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { initial_fb_page_hone_about } from '../../../../../_initial/page/page_home_preview';
//
import { handle_API_FbPageAbout_R } from '../../../../../_handle_api/fb_page/page_about';
//
import './FbPageAboutCommon.scss';
// 
import FbPageAboutContact from '../contact/_main/FbPageAboutContact';
import FbPageAboutMore from '../more/_main/FbPageAboutMore';
import FbPageAboutGeneral from '../general/_main/FbPageAboutGeneral';
// 
import './FbPageAbout.scss';

//
FbPageAbout.propTypes = {};

//
function FbPageAbout({ page_id }) {
    //
    const [state_obj, setStateObj] = useState({
        about_obj: initial_fb_page_hone_about(),
        has_fetched: false,
        is_fetching: true,
    });

    const { about_obj, has_fetched, is_fetching } = state_obj;

    const { info_obj, like_obj, follow_obj, site_obj, phone_obj } = about_obj;

    //
    useEffect(() => {
        getData_API();
    }, []);

    // -----

    //
    async function getData_API() {
        const data = await handle_API_FbPageAbout_R({ page_id: page_id });

        setStateObj((state_obj) => {
            return {
                ...state_obj,
                about_obj: data,
                has_fetched: true,
                is_fetching: false,
            };
        });
    }

    // ----

    if (!has_fetched) {
        return null;
    }

    //
    return (
        <div className="FbPageAbout margin-auto w-620px padding-y-16px padding-x-20px brs-8px-pc bg-primary box-shadow-1">
            <div className="FbPageAbout_part">
                <FbPageAboutGeneral
                    like_obj={like_obj}
                    follow_obj={follow_obj}
                />
            </div>

            <div className="FbPageAbout_part">
                <FbPageAboutContact
                    site_obj={site_obj}
                    phone_obj={phone_obj}
                    page_id={page_id}
                />
            </div>

            <div>
                <FbPageAboutMore info_obj={info_obj} />
            </div>
        </div>
    );
}

export default FbPageAbout;
