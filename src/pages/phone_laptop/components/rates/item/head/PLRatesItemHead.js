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
function PLRatesItemHead({ user_name, buying_where, rating_avg, will_share }) {
    //
    return (
        <div className="PLRatesItemHead">
            <div className="display-flex align-items-center">
                <div>{user_name}</div>

                <div className="display-flex align-items-center text-green">
                    <div className="PLRatesItemHead_icon_tick display-flex-center brs-50">
                        <IconSent stroke="white" />
                    </div>

                    <div className="margin-left-5px">{buying_where}</div>
                </div>
            </div>

            <div className="display-flex align-items-center margin-top-5px">
                <StarsRate
                    rate_avg={rating_avg}
                    size_icon="14px"
                    color="var(--star)"
                />

                {will_share ? (
                    <div className="margin-left-15px">
                        <IconHeart size_icon="14px" />

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
