import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_fashion_item } from '../../../../../../_context/fashion/item/context_fashion_item';
//
import './FashionOR.scss';
import UnitTime from '../../../../../../_some_function/UnitTime';

//
FashionOR.propTypes = {};

//
function FashionOR({}) {
    //
    const { shop_info } = useContext(context_fashion_item);

    const { rating, reply_chat, time_joined, products, reply_time, followed } =
        shop_info;

    //
    return (
        <div className="FashionOR font-14px">
            <div className="FashionOR_row display-flex flex-wrap">
                <div className="FashionOR_col padding-8px">
                    <div className="display-flex">
                        <div className="FashionOR_col-title text-third">
                            Đánh Giá
                        </div>

                        <div className="color-fashion">
                            {rating}
                        </div>
                    </div>
                </div>

                <div className="FashionOR_col padding-8px">
                    <div className="display-flex">
                        <div className="FashionOR_col-title text-third">
                            Tỉ Lệ Phản Hồi
                        </div>

                        <div className="color-fashion">
                            {reply_chat}
                        </div>
                    </div>
                </div>

                <div className="FashionOR_col padding-8px">
                    <div className="display-flex">
                        <div className="FashionOR_col-title text-third">
                            Tham Gia
                        </div>

                        <div className="color-fashion">
                            {UnitTime(
                                new Date().getTime() -
                                    new Date(time_joined).getTime(),
                                undefined,
                                true
                            )}{' '}
                            trước
                        </div>
                    </div>
                </div>

                <div className="FashionOR_col padding-8px">
                    <div className="display-flex">
                        <div className="FashionOR_col-title text-third">
                            Sản Phẩm
                        </div>

                        <div className="color-fashion">
                            {products}
                        </div>
                    </div>
                </div>

                <div className="FashionOR_col padding-8px">
                    <div className="display-flex">
                        <div className="FashionOR_col-title text-third">
                            Thời Gian Phản Hồi
                        </div>

                        <div className="color-fashion">
                            trong {UnitTime(reply_time, '1 Phút', true)}
                        </div>
                    </div>
                </div>

                <div className="FashionOR_col padding-8px">
                    <div className="display-flex">
                        <div className="FashionOR_col-title text-third">
                            Người Theo Dõi
                        </div>

                        <div className="color-fashion">
                            {followed}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FashionOR;
