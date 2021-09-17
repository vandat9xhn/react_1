import React from 'react';
import PropTypes from 'prop-types';
//
import FsShopDealLabel from '../../../../../../../components/shop_deal_label/FsShopDealLabel';

//
FsPPurProductBase.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string,
    model_name: PropTypes.string,
    label_deal: PropTypes.string,
    quantity: PropTypes.number,
};

FsPPurProductBase.defaultProps = {
    label_deal: '',
};

//
function FsPPurProductBase({ name, img, model_name, quantity, label_deal }) {
    //
    return (
        <div className="FsPPurProductBase">
            <div className="FsPPurProductBase_row display-flex">
                <img
                    className="FsPPurProductBase_img object-fit-cover"
                    src={img}
                    alt=""
                    width="80"
                    height="80"
                />

                <div className="flex-grow-1 padding-left-12px">
                    <div className="FsPPurProductBase_name margin-bottom-5px font-16px">
                        {label_deal ? (
                            <div className="inline-block margin-right-5px">
                                <FsShopDealLabel label={label_deal} />
                            </div>
                        ) : null}

                        <span>{name}</span>
                    </div>

                    {model_name ? (
                        <div className="FsPPurProductBase_type margin-bottom-5px text-third font-14px">
                            Phân loại hàng: {model_name}
                        </div>
                    ) : null}

                    <div className="FsPPurProductBase_quantity font-14px">
                        x{quantity}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FsPPurProductBase;
