import React from 'react';
import PropTypes from 'prop-types';
//
import FsPPurProductBase from '../../product/base/FsPPurProductBase';
import FsPPurProductPrice from '../../product/price/FsPPurProductPrice';

//
FsPPurItemSingle.propTypes = {
    ...FsPPurProductBase.propTypes,
    ...FsPPurProductPrice.propTypes,
};

//
function FsPPurItemSingle({
    name,
    label_deal,
    img,
    model_name,
    quantity,
    old_price,
    new_price,
}) {
    //
    return (
        <div className="FsPPurItemSingle">
            <div className="FsPPurItemSingle_row flex-between-center">
                <div className="flex-grow-1 padding-right-12px">
                    <FsPPurProductBase
                        name={name}
                        img={img}
                        model_name={model_name}
                        quantity={quantity}
                        label_deal={label_deal}
                    />
                </div>

                <div>
                    <FsPPurProductPrice
                        old_price={old_price}
                        new_price={new_price}
                    />
                </div>
            </div>
        </div>
    );
}

export default FsPPurItemSingle;
