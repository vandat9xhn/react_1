import React from 'react';
import PropTypes from 'prop-types';
//
import FsFreeShipCardSide from '../../../../../../../components/free_ship_card/side/FsFreeShipCardSide';
//
import FsPVcItemRight from '../right/FsPVcItemRight';
import FsPVcITitleSide from '../title_side/_main/FsPVcITitleSide';
import FsPVcItemCenter from '../center/FsPVcItemCenter';
//
import './FsPVoucherItem.scss';

//
FsPVoucherItem.propTypes = {};

//
function FsPVoucherItem({
    left_elm,

    title_side,
    can_use,

    img_tag,
    title_center_1,
    title_center_2,
    title_center_3,
    used_count,
    end_time,
}) {
    //
    return (
        <div className="FsPVoucherItem pos-rel h-100per box-shadow-1 font-14px">
            <div
                className={`FsPVoucherItem_row display-flex h-100per ${
                    can_use ? '' : 'opacity-06'
                }`}
            >
                <div className="FsPVoucherItem_left flex-shrink-0 font-12px">
                    {left_elm}
                </div>

                <div className="FsPVoucherItem_center flex-grow-1 padding-10px">
                    <FsPVcItemCenter
                        img_tag={img_tag}
                        title_center_1={title_center_1}
                        title_center_2={title_center_2}
                        title_center_3={title_center_3}
                        used_count={used_count}
                        end_time={end_time}
                    />
                </div>

                <div className="FsPVoucherItem_right flex-shrink-0">
                    <FsPVcItemRight can_use={can_use} />
                </div>
            </div>

            <FsFreeShipCardSide />

            {title_side || used_count ? (
                <FsPVcITitleSide
                    title_side={used_count ? 'Số lượng có hạn' : title_side}
                    can_use={can_use}
                />
            ) : null}
        </div>
    );
}

export default FsPVoucherItem;
