import React from 'react';
import PropTypes from 'prop-types';

//
FsItemIfRSDDetailItem.propTypes = {
    shop_discount_obj: PropTypes.shape({
        discount: PropTypes.string,
        title: PropTypes.string,
        expiry: PropTypes.string,
    }),
    shop_picture: PropTypes.string,
};

//
function FsItemIfRSDDetailItem({
    ix,
    shop_discount_obj,
    shop_picture,
    saveShopDiscount,
}) {
    //
    function onSaveShopDiscount() {
        saveShopDiscount(ix);
    }

    //
    return (
        <div className="FsItemIfRSDDetailItem">
            <div className="display-flex">
                <div className="padding-16px">
                    <img
                        className="wh-100 brs-50"
                        src={shop_picture}
                        alt=""
                        width="58"
                        height="58"
                    />
                </div>

                <div className="display-flex">
                    <div>
                        <div>
                            <span>{shop_discount_obj.title}</span>
                        </div>

                        <div>
                            <span>HSD: {shop_discount_obj.expiry}</span>
                        </div>
                    </div>

                    <div>
                        <div className="display-flex-center">
                            <button
                                type="button"
                                className="btn btn-hv cursor-pointer bg-fashion-head"
                                onClick={onSaveShopDiscount}
                            >
                                <div>
                                    <span className="text-white label-field">
                                        Lưu
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FsItemIfRSDDetailItem;
