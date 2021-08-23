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
FashionFaceItem.propTypes = {
    id: PropTypes.number,
    ...FashionFaceItemBd.propTypes,
    ...FashionFaceItemFoot.propTypes,
    use_same: PropTypes.bool,
};

FashionFaceItem.defaultProps = {
    use_same: true
}

//
function FashionFaceItem({
    id,

    img,
    mall_like,
    flash_img,
    discount,
    
    name,
    rate_avg,
    sold,
    
    shop_deals,
    shop_discount,
    address,
    
    old_price,
    old_price_max,
    new_price,
    new_price_max,
    
    show_heart_rate,
    show_sold,
    show_address,
    use_same,
}) {
    //
    return (
        <div
            className={`FashionFaceItem pos-rel bg-primary h-100per ${
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
                            rate_avg={rate_avg}
                            sold={sold}
                            // 
                            address={address}
                            shop_deals={shop_deals}
                            shop_discount={shop_discount}
                            // 
                            old_price={old_price}
                            new_price={new_price}
                            old_price_max={old_price_max}
                            new_price_max={new_price_max}
                            // 
                            show_heart_rate={show_heart_rate}
                            show_sold={show_sold}
                            show_address={show_address}
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
