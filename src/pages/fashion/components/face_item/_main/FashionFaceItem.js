import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import FashionFaceItemBd from '../body/FashionFaceItemBd';
import FashionFaceItemFoot from '../foot/FashionFaceItemFoot';
//
import './FashionFaceItem.scss';
import './FashionFaceItemRes.scss';

//
FashionFaceItem.propTypes = {};

//
function FashionFaceItem({
    use_same = true,

    id,

    img,
    mall_like,
    flash_img,
    discount,

    name,
    shop_discount,
    tag_arr,
    old_price,
    new_price,
    rate_avg,
    sold,
    address,
}) {
    //
    return (
        <div
            className={`FashionFaceItem pos-rel bg-primary ${
                IS_MOBILE ? '' : 'FashionFaceItem-pc'
            }`}
        >
            <Link to={`/fashion:${id}`} className="normal-text">
                <div className="FashionFaceItem_contain">
                    <div className="FashionFaceItem_head pos-rel">
                        <div className="pos-abs-100">
                            <FashionFaceItemBd
                                img={img}
                                mall_like={mall_like}
                                flash_img={flash_img}
                                discount={discount}
                            />
                        </div>
                    </div>

                    <div>
                        <FashionFaceItemFoot
                            name={name}
                            shop_discount={shop_discount}
                            tag_arr={tag_arr}
                            old_price={old_price}
                            new_price={new_price}
                            rate_avg={rate_avg}
                            sold={sold}
                            address={address}
                        />
                    </div>
                </div>
            </Link>

            {!use_same || IS_MOBILE ? null : (
                <div className="FashionFaceItem_same pos-abs top-100per left-0 w-100per z-index-lv1 display-none">
                    <Link to={`/fashion/same-product?id=${id}`}>
                        <div className="FashionFaceItem_same_contain padding-8px bg-fashion-red text-align-center">
                            <span className="text-white label-field">
                                Tìm sản phẩm tương tự
                            </span>
                        </div>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default FashionFaceItem;
