import React from 'react';
import PropTypes from 'prop-types';

import ButtonRipple from '../../../../../../component/button/button_ripple/ButtonRipple';
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
import TypeItem from '../type_item/TypeItem';
import './PhoneLaptopType.scss';
import { formatNum } from '../../../../../../_some_function/FormatNum';
//
PhoneLaptopType.propTypes = {
    types: PropTypes.array,
};

PhoneLaptopType.defaultProps = {
    types: [],
}

//
function PhoneLaptopType(props) {
    const {
        product, show_discount_type, toggleDiscountType,
        handleChangeTypeBuy, openConfirmBuy, closeTypeBuy,
    } = props;

    const {name, new_price, old_price, types, promotion} = product;

    return (
        <div>
            <div className="PhoneLaptopType_contain scroll-thin brs-5px box-shadow-1">
                {/* head */}
                <div className="PhoneLaptopType_head">
                    <div className="label-field">{name}</div>
                    <div>
                        <span className="PhoneLaptopType_new-price">{formatNum(new_price)} vnd</span>
                        <span className="PhoneLaptopType_old-price">{formatNum(old_price)} vnd</span>
                    </div>
                </div>

                {/* body */}
                <div className="PhoneLaptopType_body">
                    <div className="PhoneLaptopType_body-title label-field">
                        Choose type:
                    </div>

                    <ul className="PhoneLaptopType_list display-flex list-none">
                        {types && types.map((type, ix) => (
                            <li key={`PhoneLaptopType_${ix}`}>
                            <TypeItem
                                type_ix={ix}
                                url={type.url}
                                title={type.title}
                                handleChangeTypeBuy={handleChangeTypeBuy} 
                            />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="PhoneLaptopType_bottom">
                    <div>
                        <div className="label-field width-fit-content cursor-pointer font-italic" onClick={toggleDiscountType}>
                            {show_discount_type ? 'Hide discount' : 'Show more discount'}
                        </div>
                    </div>

                    <div className={show_discount_type ? '' : 'display-none'}>{promotion}</div>
                </div>

                <div className="PhoneLaptopType_buy App_submit">
                    <ButtonRipple
                        type="text"
                        title="Buy now"
                        onClick={openConfirmBuy}
                    >
                        Buy now
                    </ButtonRipple>
                </div>

                <div className="PhoneLaptopType_close">
                    <div className="PhoneLaptopType_close-icon brs-50 hv-opacity cursor-pointer" onClick={closeTypeBuy}>
                        <IconsArrow y={400} size_icon="1rem"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhoneLaptopType;