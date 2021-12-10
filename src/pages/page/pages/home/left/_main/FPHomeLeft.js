import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { HEADER_HEAD, IS_MOBILE } from '../../../../../../_constant/Constant';
//
import { initial_fb_page_home_preview } from '../../../../../../_initial/page/page_home_preview';
//
import { handle_API_FbPageHomePreview_R } from '../../../../../../_handle_api/fb_page/page_home_preview';
//
import { useStickyAuto } from '../../../../../../_hooks/useStickyAuto';
//
import FPHomeAbout from '../about/_main/FPHomeAbout';
//
import './FPHomeLeft.scss';

//
FPHomeLeft.propTypes = {};

//
function FPHomeLeft({ page_id }) {
    //
    const [state_obj, setStateObj] = useState({
        page_preview_obj: initial_fb_page_home_preview(),
        has_fetched: false,
        is_fetching: false,
    });

    const { page_preview_obj, has_fetched, is_fetching } = state_obj;

    const { info_obj, like_obj, follow_obj, site_obj, phone_obj } =
        page_preview_obj;

    //
    const { calculateAgain, ref_main_elm, ref_preview_elm, ref_fake_elm } =
        useStickyAuto({
            sticky_location: /\/page\/\d+\/home$/,
            header_head: HEADER_HEAD + 70,
        });

    //
    useEffect(() => {
        getData_API();
    }, []);

    // -----

    //
    async function getData_API() {
        setStateObj((state_obj) => {
            return {
                ...state_obj,
                is_fetching: true,
            };
        });

        const data = await handle_API_FbPageHomePreview_R({ page_id: page_id });

        setStateObj((state_obj) => {
            return {
                ...state_obj,
                page_preview_obj: data,
                has_fetched: true,
                is_fetching: false,
            };
        });

        setTimeout(() => {
            if (!IS_MOBILE) {
                calculateAgain();
            }
        }, 100);
    }

    //
    return (
        <div ref={ref_main_elm} className="FPHomeLeft h-100per">
            <div ref={ref_fake_elm}></div>

            <div
                ref={ref_preview_elm}
                className="FPHomeLeft_preview pos-sticky padding-bottom-10px"
            >
                <div className="FPHomeLeft_item">
                    <FPHomeAbout
                        page_id={page_id}
                        is_fetching={is_fetching}
                        //
                        info_obj={info_obj}
                        like_obj={like_obj}
                        follow_obj={follow_obj}
                        site_obj={site_obj}
                        phone_obj={phone_obj}
                    />
                </div>

                <div className="FPHomeLeft_pic FPHomeLeft_item"></div>

                <div className="FPHomeLeft_item"></div>
            </div>
        </div>
    );
}

export default FPHomeLeft;
