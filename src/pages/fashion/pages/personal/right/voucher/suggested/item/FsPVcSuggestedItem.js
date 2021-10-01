import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { formatNum } from '../../../../../../../../_some_function/FormatNum';
import { UnitNumber } from '../../../../../../../../_some_function/UnitNumber';
//
import FsFreeShipCardSide from '../../../../../../components/free_ship_card/side/FsFreeShipCardSide';
import FashionMallLike from '../../../../../../components/is_like/FashionMallLike';
//
import './FsPVcSuggestedItem.scss';

//
FsPVcSuggestedItem.propTypes = {};

//
function FsPVcSuggestedItem({
    ix,

    id,
    img,
    name,
    new_price,
    discount_str,
    min_spend,

    is_like,
    is_mall,
    is_plus,

    handleSave,
}) {
    //
    function onSave() {
        handleSave(ix);
    }

    //
    return (
        <div className="FsPVcSuggestedItem pos-rel h-100per box-shadow-1">
            <div className="FsPVcSuggestedItem_row display-flex space-between h-100per">
                <div className="FsPVcSuggestedItem_left">
                    <Link
                        className="FsPVcSuggestedItem_left_link wh-100 padding-10px"
                        to={`/fashion:${id}`}
                    >
                        <img
                            className="wh-100 object-fit-cover"
                            src={img}
                            alt=""
                        />
                    </Link>
                </div>

                <div className="FsPVcSuggestedItem_center flex-grow-1">
                    <Link
                        className="FsPVcSuggestedItem_center_contain display-flex justify-content-center flex-col wh-100 padding-10px color-inherit"
                        to={`/fashion:${id}`}
                    >
                        <div className="flex-grow-1">{name}</div>

                        <div className="color-fashion">
                            ₫{formatNum(new_price)}
                        </div>
                    </Link>
                </div>

                <div className="FsPVcSuggestedItem_right display-flex-center flex-col padding-10px">
                    <div>Giảm {discount_str}</div>

                    <div className="w-100per margin-bottom-5px font-12px text-third text-nowrap">
                        Đơn tối thiểu ₫{UnitNumber(min_spend)}
                    </div>

                    <div>
                        <button
                            className="btn btn-hv btn-active brs-3px bg-fashion-red padding-y-3px padding-x-16px text-white font-12px cursor-pointer"
                            type="button"
                            onClick={onSave}
                        >
                            Lưu
                        </button>
                    </div>
                </div>
            </div>

            <FsFreeShipCardSide />

            <div className="FsPVcSuggestedItem_like pos-abs">
                <FashionMallLike
                    is_like={is_like}
                    is_mall={is_mall}
                    is_plus={is_plus}
                    class_text="font-12px"
                />
            </div>
        </div>
    );
}

export default FsPVcSuggestedItem;
