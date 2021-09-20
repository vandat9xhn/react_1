import React from 'react';
import PropTypes from 'prop-types';
//
import FashionMallLike from '../../../../../../../components/is_like/FashionMallLike';

//
FsPVcItemShopLeft.propTypes = {};

//
function FsPVcItemShopLeft({ shop_name, shop_picture, is_like, is_mall }) {
    //
    return (
        <div className="FsPVcItemShopLeft display-flex-center flex-col h-100per padding-10px">
            <img
                className="brs-50 object-fit-cover"
                src={shop_picture}
                alt=""
                width="56"
                height="56"
            />

            <div>
                <FashionMallLike
                    title_like="Shop yêu thích"
                    title_mall="Shop mall"
                    is_like={is_like}
                    is_mall={is_mall}
                    class_text="font-12px"
                    use_side={false}
                />
            </div>

            <div>{shop_name}</div>
        </div>
    );
}

export default FsPVcItemShopLeft;
