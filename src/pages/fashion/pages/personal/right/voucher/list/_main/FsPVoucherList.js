import React from 'react';
import PropTypes from 'prop-types';
//
import FsPVcItemShop from '../shop/_main/FsPVcItemShop';
import FsPVcItemShip from '../ship/_main/FsPVcItemShip';
import FsPVcItemFs from '../fs/_main/FsPVcItemFs';
//
import './FsPVoucherList.scss';

//
FsPVoucherList.propTypes = {};

//
function FsPVoucherList({ voucher_arr }) {
    //
    return (
        <div className="FsPVoucherList">
            <div className="FsPVoucherList_row display-flex flex-wrap">
                {voucher_arr.map((item, ix) => (
                    <div
                        key={item.id}
                        className="FsPVoucherList_item margin-bottom-20px"
                    >
                        {item.type == 'shop' ? (
                            <FsPVcItemShop
                                shop_name={item.shop_name}
                                shop_picture={item.shop_picture}
                                is_mall={item.is_mall}
                                is_like={item.is_like}
                                img_tag={item.img_tag}
                                //
                                title_center_1={item.title_center_1}
                                title_center_2={item.title_center_2}
                                title_center_3={item.title_center_3}
                                used_count={item.used_count}
                                end_time={item.end_time}
                                can_use={item.can_use}
                                title_side={item.title_side}
                            />
                        ) : item.type == 'ship' ? (
                            <FsPVcItemShip
                                img_tag={item.img_tag}
                                title_center_1={item.title_center_1}
                                title_center_2={item.title_center_2}
                                title_center_3={item.title_center_3}
                                used_count={item.used_count}
                                end_time={item.end_time}
                                can_use={item.can_use}
                                title_side={item.title_side}
                            />
                        ) : (
                            <FsPVcItemFs
                                img={item.img}
                                img_text={item.img_text}
                                title_center_1={item.title_center_1}
                                title_center_2={item.title_center_2}
                                title_center_3={item.title_center_3}
                                used_count={item.used_count}
                                end_time={item.end_time}
                                can_use={item.can_use}
                                title_side={item.title_side}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FsPVoucherList;
