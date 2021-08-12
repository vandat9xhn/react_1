import React from 'react';
import PropTypes from 'prop-types';
//
import { formatNum } from '../../../../../../_some_function/FormatNum';
//
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import ButtonRipple from '../../../../../../component/button/button_ripple/ButtonRipple';
//
import TypeItem from '../type_item/TypeItem';
//
import './PhoneLaptopType.scss';
//
PhoneLaptopType.propTypes = {
    types: PropTypes.array,
};

PhoneLaptopType.defaultProps = {
    types: [],
};

//
function PhoneLaptopType(props) {
    const {
        product,
        open_discount,
        type_buy_ix,

        toggleDiscountType,
        handleChangeTypeBuy,
        openConfirmBuy,
        closeTypeBuy,
    } = props;

    const { name, new_price, old_price, types, promotion } = product;

    //
    return (
        <div className="PhoneLaptopType pos-rel scroll-thin bg-primary brs-5px box-shadow-1">
            <div className="PhoneLaptopType_head padding-8px">
                <h3 className="margin-0">{name}</h3>
                <div>
                    <span className="PhoneLaptopType_new-price">
                        {formatNum(new_price)} vnd
                    </span>

                    <span className="PhoneLaptopType_old-price">
                        {formatNum(old_price)} vnd
                    </span>
                </div>
            </div>

            <div className="PhoneLaptopType_body">
                <label className="padding-8px label-field">
                    Choose type:
                </label>

                <ul className="PhoneLaptopType_list display-flex list-none">
                    {types &&
                        types.map((type, ix) => (
                            <li key={`PhoneLaptopType_${ix}`}>
                                <TypeItem
                                    ix={ix}
                                    is_active={ix == type_buy_ix}
                                    url={type.url}
                                    title={type.title}
                                    handleChangeTypeBuy={handleChangeTypeBuy}
                                />
                            </li>
                        ))}
                </ul>
            </div>

            <div className="PhoneLaptopType_bottom padding-8px">
                <div>
                    <div
                        className="label-field width-fit-content cursor-pointer font-italic"
                        onClick={toggleDiscountType}
                    >
                        {open_discount ? 'Hide discount' : 'Show more discount'}
                    </div>
                </div>

                <div className={open_discount ? 'PhoneLaptopType_bottom_promotion' : 'display-none'}>
                    {promotion}
                </div>
            </div>

            <div className="App_submit display-flex-center">
                <ButtonRipple
                    type="text"
                    title="Buy now"
                    onClick={openConfirmBuy}
                >
                    Buy now
                </ButtonRipple>
            </div>

            <div className="PhoneLaptopType_close">
                <div
                    className="close-icon-small brs-50 hv-opacity cursor-pointer"
                    onClick={closeTypeBuy}
                >
                    <IconsArrow y={400} size_icon="1rem" />
                </div>
            </div>
        </div>
    );
}

export default PhoneLaptopType;
