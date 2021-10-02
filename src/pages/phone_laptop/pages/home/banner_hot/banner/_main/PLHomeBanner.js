import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { getCarouselList } from '../../../../../../../_some_function/getCarouselList';
//
import Carousel from '../../../../../../../component/carousel/_main/Carousel';
//
import PLHomeCarouselTitle from '../carousel_title/PLHomeCarouselTitle';
//
import './PLHomeBanner.scss';
import { IS_MOBILE } from '../../../../../../../_constant/Constant';

//
PLHomeBanner.propTypes = {};

//
function PLHomeBanner({ banner_arr }) {
    //
    const [state_obj, setStateObj] = useState({
        vid_pic_arr: getCarouselList({
            list: banner_arr.map((item) => item.vid_pic),
        }),
        link_to_arr: getCarouselList({
            list: banner_arr.map((item) => item.link_to),
        }),
        active_id: banner_arr[0].id,
    });

    const { vid_pic_arr, link_to_arr, active_id } = state_obj;

    // -----

    //
    function handleChangeActiveId(new_ix) {
        setStateObj((state_obj) => {
            return {
                ...state_obj,
                active_id: getCarouselList({ list: banner_arr })[new_ix].id,
            };
        });
    }

    //
    return (
        <div className="PLHomeBanner display-flex flex-col h-100per">
            <div className="PLHomeBanner_pics flex-grow-1">
                <Carousel
                    vid_pics={vid_pic_arr}
                    link_to_arr={link_to_arr}
                    has_fetched={true}
                    handleCarouselMove={handleChangeActiveId}
                />
            </div>

            {IS_MOBILE ? null : (
                <div className="PLHomeBanner_title line-14px font-12px text-align-center">
                    <PLHomeCarouselTitle
                        title_arr={banner_arr}
                        active_id={active_id}
                    />
                </div>
            )}
        </div>
    );
}

export default PLHomeBanner;
