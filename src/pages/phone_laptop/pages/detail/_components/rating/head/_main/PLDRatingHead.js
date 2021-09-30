import React from 'react';
import PropTypes from 'prop-types';
//
import PLBarsRate from '../../../../../../components/bars_rate/_main/PLBarsRate';
//
import './PLDRatingHead.scss';

//
PLDRatingHead.propTypes = {
    device_name: PropTypes.string,
    ...PLBarsRate.propTypes,
    img_arr: PropTypes.arrayOf(PropTypes.string),
};

//
function PLDRatingHead({
    product_id,
    product_name,

    rating_arr,
    rating_avg,
    rating_count,

    rate_img_arr,
    rate_img_count,

    openDetailRateImg,
}) {
    //
    return (
        <div className="PLDRatingHead">
            <h2 className="PLDRatingHead_title margin-bottom-15px font-20px font-700">
                Đánh giá {product_name}
            </h2>

            <div className="PLDRatingHead_row display-flex">
                <div className="PLDRatingHead_bars padding-x-10px">
                    <PLBarsRate
                        product_id={product_id}
                        rating_arr={rating_arr}
                        rating_avg={rating_avg}
                        rating_count={rating_count}
                    />
                </div>

                <div className="PLDRatingHead_pics padding-left-10px">
                    <ul className="display-flex flex-wrap list-none">
                        {rate_img_arr
                            .slice(0, rate_img_count > 10 ? 9 : undefined)
                            .map((item, ix) => (
                                <li
                                    key={ix}
                                    className="PLDRatingHead_pics_item"
                                    onClick={openDetailRateImg}
                                >
                                    <div className="padding-top-100per pos-rel">
                                        <img
                                            className="pos-abs-0 wh-100 brs-5px object-fit-cover"
                                            src={item}
                                            alt=""
                                        />
                                    </div>
                                </li>
                            ))}

                        {rate_img_count > 10 ? (
                            <li
                                className="PLDRatingHead_pics_item"
                                onClick={openDetailRateImg}
                            >
                                <div className="padding-top-100per pos-rel">
                                    <img
                                        className="pos-abs-0 wh-100 brs-5px object-fit-cover"
                                        src={rate_img_arr[9]}
                                        alt=""
                                    />

                                    <div className="pos-abs-100 display-flex-center brs-5px bg-shadow-5 text-white font-13px font-600 text-align-center">
                                        Xem {rate_img_count - 10} ảnh từ KH
                                    </div>
                                </div>
                            </li>
                        ) : null}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PLDRatingHead;
