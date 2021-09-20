import React from 'react';
import PropTypes from 'prop-types';
//
import FsPVoucherItem from '../../item/_main/FsPVoucherItem';
import FsPVcItemShopLeft from '../left/FsPVcItemShopLeft';

//
FsPVcItemShop.propTypes = {};

//
function FsPVcItemShop({
    shop_name,
    shop_picture,
    is_mall,
    is_like,

    title_center_1,
    title_center_2,
    title_center_3,

    used_count,
    end_time,
    
    can_use,
    title_side,
}) {
    //
    return (
        <div className="FsPVcItemShop h-100per">
            <FsPVoucherItem
                left_elm={
                    <FsPVcItemShopLeft
                        shop_name={shop_name}
                        shop_picture={shop_picture}
                        is_like={is_like}
                        is_mall={is_mall}
                    />
                }
                title_center_1={title_center_1}
                title_center_2={title_center_2}
                title_center_3={title_center_3}
                // 
                used_count={used_count}
                end_time={end_time}
                can_use={can_use}
                title_side={title_side}
            />
        </div>
    );
}

export default FsPVcItemShop;
