import React from 'react';
import PropTypes from 'prop-types';
// 
import IconsStar from '../../../../../_icons_svg/icons_star/IconsStar';
import StarsRate from '../../../../../component/stars_rate/_main/StarsRate';
import PictureName from '../../../../../component/picture_name/pic_name/PictureName';
// 
import './FashionRate.scss';

//
FashionRate.propTypes = {
    fashion_rates: PropTypes.object,
    handleRate: PropTypes.func,
};

//
function FashionRate(props) {
    const { fashion_rates, handleRateNow } = props;
    const { rates, user_rate, rate_arr, rate_avg, rate_count } = fashion_rates;

    //
    return (
        <div className="FashionRate">
            <div className="FashionRate_contain">
                <div className="label-field">PRODUCT ASSESSMENT</div>

                <div className="FashionRate_avg display-flex justify-content-center align-items-center">
                    <StarsRate rate_avg={rate_avg} size_icon="2rem" />
                    <div className="FashionRate_avg-num label-field">
                        {rate_avg ? rate_avg.toFixed(1) : 0.0}
                    </div>
                </div>

                <div className="display-flex col-reverse">
                    {[0, 1, 2, 3, 4].map((ix) => (
                        <div key={`FashionRate_${ix}`} className="FashionRate_row">
                            <div className="FashionRate_title display-flex align-items-center label-field">
                                <div>
                                    {ix + 1}
                                </div>

                                <div>
                                    <IconsStar size_icon="1.5rem"/>
                                </div>
                            </div>

                            <div
                                className="FashionRate_bar"
                                title={
                                    (rate_count ? Math.round((rate_arr[ix] * 100) / rate_count) : 0.0) +
                                    '%'
                                }
                            >
                                <div
                                    className="FashionRate_rate-bar"
                                    style={{
                                        width:
                                            (rate_count ? Math.round(
                                                (rate_arr[ix] * 100) / rate_count
                                            ) : 0) + '%',
                                        height: '100%',
                                    }}
                                ></div>
                            </div>

                            <div className="FashionRate_rate">{rate_arr ? rate_arr[ix] : 0}</div>
                        </div>
                    ))}
                </div>
                
                {localStorage.is_login == 1 &&
                    <div className="FashionRate_rate-now">
                        <div className="display-flex align-items-center">
                            <div className="FashionRate_rate-user label-field">
                                You:
                            </div>
                            <StarsRate
                                rate_avg={user_rate || 0}
                                size_icon="1rem"
                            />
                        </div>

                        <div className="label-field cursor-pointer" onClick={handleRateNow}>
                            {user_rate ? 'Change rate' : 'Rate now'}
                        </div>
                    </div>
                }
            </div><br/>

            <div>
                {rates && rates.map((rate_item, rate_ix) => (
                    <div key={`FashionRate_rate_${rate_ix}`}>
                        <div className="display-flex">
                            <PictureName user={rate_item.user}/>

                            <div>
                                <span>
                                    {rate_item.rate}
                                </span>

                                <span>
                                    <IconsStar size_icon="1.5rem"/>
                                </span>
                            </div>
                        </div>
                        
                        <div>
                            {rate_item.text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FashionRate;
