import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import { handle_API_PLBannerHot_R } from '../../../../../../_handle_api/phone/home_banner_hot';
//
import Carousel from '../../../../../../component/carousel/_main/Carousel';
//
import './PLPhonesTopBanner.scss';
import { getCarouselList } from '../../../../../../_some_function/getCarouselList';

//
PLPhonesTopBanner.propTypes = {};

//
function PLPhonesTopBanner(props) {
    //
    const [state_obj, setStateObj] = useState({
        vid_pic_arr: [] || [''],
        link_to_arr: [] || [''],
        promote_arr: [] || [
            {
                id: 0,
                img: '',
                link_to: '',
            },
        ],

        has_fetched: false,
    });

    const { vid_pic_arr, link_to_arr, promote_arr, has_fetched } = state_obj;

    //
    useEffect(() => {
        getData_TopBanner();
    }, []);

    // ---- API

    //
    async function getData_TopBanner() {
        const data = await handle_API_PLBannerHot_R({
            type: 'phone',
        });

        setStateObj({
            ...state_obj,

            vid_pic_arr: getCarouselList({
                list: data.banner_arr.map((item) => item.vid_pic),
            }),
            link_to_arr: getCarouselList({
                list: data.banner_arr.map((item) => item.link_to),
            }),
            promote_arr: data.hot_arr.slice(0, 2),
            has_fetched: true,
        });
    }

    //

    //
    return (
        <div className="PLPhonesTopBanner">
            {has_fetched ? (
                <div className="PLPhonesTopBanner_row display-flex">
                    <div className="PLPhonesTopBanner_carousel padding-right-10px">
                        <Carousel
                            vid_pics={vid_pic_arr}
                            link_to_arr={link_to_arr}
                            has_fetched={has_fetched}
                        />
                    </div>

                    <div className="PLPhonesTopBanner_promote">
                        <ul className="display-flex flex-col space-between list-none h-100per">
                            {promote_arr.map((item, ix) => (
                                <li
                                    key={item.id}
                                    className="PLPhonesTopBanner_promote_item"
                                >
                                    <Link
                                        className="PLPhonesTopBanner_promote_col"
                                        to={item.link_to}
                                    >
                                        <img
                                            className="PLPhonesTopBanner_promote_img wh-100 object-fit-cover"
                                            src={item.img}
                                            alt=""
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <div className="PLPhonesTopBanner_not_fetched"></div>
            )}
        </div>
    );
}

export default PLPhonesTopBanner;
