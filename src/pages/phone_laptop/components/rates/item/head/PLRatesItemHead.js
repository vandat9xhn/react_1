import React from 'react';
import PropTypes from 'prop-types';
//
import IconSent from '../../../../../../_icons_svg/icons_status_message/icon_sent/IconSent';
import IconHeart from '../../../../../../_icons_svg/icons_like/icon_heart/IconHeart';
//
import StarsRate from '../../../../../../component/stars_rate/_main/StarsRate';
//
import './PLRatesItemHead.scss';

//
PLRatesItemHead.propTypes = {};

//
function PLRatesItemHead({ user_name, buying_where, num_rate, will_share }) {
    //
    return (
        <div className="PLRatesItemHead">
            <div className="display-flex align-items-center">
                <div className="margin-right-10px font-700">{user_name}</div>

                <div className="display-flex align-items-center text-green">
                    <div className="PLRatesItemHead_icon_tick display-flex-center brs-50">
                        <IconSent stroke="white" />
                    </div>

                    <div className="margin-left-5px">{buying_where}</div>
                </div>
            </div>

            <div className="PLRatesItemHead_rate display-flex align-items-center margin-top-5px">
                <StarsRate
                    rate_avg={num_rate}
                    size_icon="14px"
                    color="var(--star)"
                />

                {will_share ? (
                    <div className="inline-flex align-items-center margin-left-15px font-13px">
                        <IconHeart size_icon="15px" />

                        <span className="margin-left-5px">
                            Sẽ giới thiệu cho bạn bè, người thân
                        </span>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default PLRatesItemHead;
