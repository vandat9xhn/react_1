import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import DiscountSymbol from '../../../../component/symbol/discount/DiscountSymbol';
import FashionFlashSaleBar from '../flash_sale_bar/FashionFlashSaleBar';
//
import './FashionFlashSaleItem.scss';

//
FashionFlashSaleItem.propTypes = {};

//
function FashionFlashSaleItem({
    id,
    img,
    flash_img,
    price,
    sold,
    total,
    discount,
}) {
    //
    return (
        <Link to={`/fashion:${id}`}>
            <div className="FashionFlashSaleItem pos-rel wh-100 padding-8px">
                <div className="FashionFlashSaleItem_head pos-rel">
                    <img
                        className="pos-abs-100  wh-100 object-fit-cover"
                        src={img}
                        alt=""
                    />

                    <img
                        className="pos-abs-100 wh-100"
                        src={flash_img}
                        alt=""
                    />
                </div>

                <div className="FashionFlashSaleItem_foot">
                    <div className="text-align-center color-fashion">
                        <span>₫</span>

                        <span className="FashionFlashSaleItem_foot_price font-22px">
                            {price}
                        </span>
                    </div>

                    <div>
                        <FashionFlashSaleBar sold={sold} total={total} />
                    </div>
                </div>

                <div className="pos-abs right-0 top-0">
                    <DiscountSymbol discount={discount} />
                </div>
            </div>
        </Link>
    );
}

export default FashionFlashSaleItem;
