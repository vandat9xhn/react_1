import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_fashion_item } from '../../../../../../_context/fashion/item/context_fashion_item';
// 
import { IS_MOBILE } from '../../../../../../_constant/Constant';
//
import UnitTime from '../../../../../../_some_function/UnitTime';
// 
import './FashionOR.scss';

//
FashionOR.propTypes = {};

//
function FashionOR({}) {
    //
    const { shop_info } = useContext(context_fashion_item);

    const { rating, reply_chat, time_joined, products, reply_time, followed } =
        shop_info;

    const fashion_info_arr = IS_MOBILE
        ? [
            {
                title: 'Sản Phẩm',
                value: products,
            },
            {
                title: 'Đánh Giá',
                value: rating,
            },
            {
                title: 'Phản Hồi Chat',
                value: reply_chat,
            },
          ]
        : [
              {
                  title: 'Đánh Giá',
                  value: rating,
              },
              {
                  title: 'Tỉ Lệ Phản Hồi',
                  value: reply_chat,
              },
              {
                  title: 'Tham Gia',
                  value: `${UnitTime(
                      new Date().getTime() - new Date(time_joined).getTime(),
                      undefined,
                      true
                  )} trước`,
              },
              {
                  title: 'Sản Phẩm',
                  value: products,
              },
              {
                  title: 'Thời Gian Phản Hồi',
                  value: `trong ${UnitTime(reply_time, '1 Phút', true)}`,
              },
              {
                  title: 'Người Theo Dõi',
                  value: followed,
              },
          ];

    //
    return (
        <div className="FashionOR font-14px">
            <div className="FashionOR_row display-flex flex-wrap">
                {fashion_info_arr.map((item, ix) => (
                    <div key={ix} className="FashionOR_col padding-8px">
                        <div className="FashionOR_col_row display-flex">
                            <div className="FashionOR_col-title text-third">
                                {item.title}
                            </div>

                            <div className="FashionOR_col-value color-fashion">
                                {item.value}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FashionOR;
