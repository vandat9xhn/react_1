import React from 'react';
import PropTypes from 'prop-types';
//
import IconSent from '../../../../../../../_icons_svg/icons_status_message/icon_sent/IconSent';
// 
import './PLDOfferItem.scss';

//
PLDOfferItem.propTypes = {};

//
function PLDOfferItem({ info }) {
    //
    return (
        <div className="PLDOfferItem padding-10px">
            <div className="PLDOfferItem_row display-flex">
                <div className="margin-right-10px padding-top-3px">
                    <div className="PLDOfferItem_icon display-flex-center brs-50 bg-green">
                        <IconSent size_icon="12px" stroke="white" />
                    </div>
                </div>

                <div>{info}</div>
            </div>
        </div>
    );
}

export default PLDOfferItem;
