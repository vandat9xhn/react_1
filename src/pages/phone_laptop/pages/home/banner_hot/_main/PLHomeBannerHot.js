import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_PLBannerHot_R } from '../../../../../../_handle_api/phone/home_banner_hot';
//
import PLHomeBanner from '../banner/_main/PLHomeBanner';
import PLHomeHot from '../hot/_main/PLHomeHot';
//
import './PLHomeBannerHot.scss';
import { IS_MOBILE } from '../../../../../../_constant/Constant';

//
PLHomeBannerHot.propTypes = {};

PLHomeHot;
//
function PLHomeBannerHot(props) {
    //
    const [state_obj, setStateObj] = useState({
        banner_arr: [] || [
            {
                id: 0,
                vid_pic: '',
                link_to: '',
                title_1: '',
                title_2: '',
            },
        ],
        hot_arr: [] || [
            {
                id: 0,
                img: '',
                link_to: '',
            },
        ],
        img_event: '',

        has_fetched: false,
    });

    const { banner_arr, hot_arr, img_event, has_fetched } = state_obj;

    //
    useEffect(() => {
        getData_BannerHot();
    }, []);

    // ---- API

    //
    async function getData_BannerHot() {
        const data = await handle_API_PLBannerHot_R({});

        // console.log(data);

        setStateObj({
            ...state_obj,
            banner_arr: data.banner_arr,
            hot_arr: data.hot_arr,
            img_event: data.img_event,
            has_fetched: true,
        });
    }

    //
    return (
        <div className="PLHomeBannerHot">
            {has_fetched ? (
                <React.Fragment>
                    <div className="PLHomeBannerHot_row display-flex">
                        <div className="PLHomeBannerHot_left flex-grow-1 margin-right-10px">
                            <PLHomeBanner
                                banner_arr={banner_arr}
                                has_fetched={has_fetched}
                            />
                        </div>

                        {IS_MOBILE ? null : (
                            <div className="PLHomeBannerHot_right flex-shrink-0">
                                <PLHomeHot hot_arr={hot_arr} />
                            </div>
                        )}
                    </div>

                    <img
                        className="PLHomeBannerHot_waiting w-100per"
                        src={img_event}
                        alt=""
                    />
                </React.Fragment>
            ) : (
                <div className="PLHomeBannerHot_not_fetched"></div>
            )}
        </div>
    );
}

export default PLHomeBannerHot;
