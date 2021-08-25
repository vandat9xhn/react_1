import React from 'react';
import PropTypes from 'prop-types';
//
import { formatNum } from '../../../../../../../_some_function/FormatNum';
//
import IconsArrow from '../../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import CheckBoxCustom from '../../../../../../../component/input/checkbox_custom/CheckBoxCustom';
//
import FsIHotDealTiers from '../tiers/_main/FsIHotDealTiers';
import FsIHDItemHead from '../head/FsIHDItemHead';
//
import './FsHotDealItem.scss';
import FsHDItemFoot from '../foot/FsHDItemFoot';
import { IS_MOBILE } from '../../../../../../../_constant/Constant';

//
FsHotDealItem.propTypes = {};

//
function FsHotDealItem({
    ix,

    id,
    name,
    img,
    flash_img,
    quantity,
    discount,
    models,
    tier_variations,

    model_name,
    old_price,
    new_price,

    model_ix,
    total_add,
    checked,

    open_model,
    use_checked,

    handleChecked,
    toggleChangeModel,
    handleChangeModel,
}) {
    //
    function onChecked() {
        handleChecked(ix);
    }

    //
    function onToggleChangeModel() {
        toggleChangeModel(ix);
    }

    //
    return (
        <div className="FsHotDealItem">
            <FsIHDItemHead
                id={id}
                name={name}
                img={img}
                flash_img={flash_img}
                discount={discount}
                total_add={total_add}
                use_checked={use_checked}
            />

            <div className="FsHotDealItem_foot pos-rel">
                <FsHDItemFoot
                    model_name={model_name}
                    old_price={old_price}
                    new_price={new_price}
                    use_checked={use_checked}
                    checked={checked}
                    handleChangeChecked={onChecked}
                    handleToggleChangeModel={onToggleChangeModel}
                />

                {open_model ? (
                    <div
                        className={`${
                            IS_MOBILE
                                ? 'pos-fixed-100per bg-film z-index-lv5'
                                : 'pos-abs bottom-100per x-center z-index-lv1'
                        }`}
                        onClick={IS_MOBILE ? onToggleChangeModel : undefined}
                    >
                        <div
                            className={`${
                                IS_MOBILE ? 'pos-abs bottom-0 w-100per' : ''
                            }`}
                        >
                            <FsIHotDealTiers
                                item_ix={ix}
                                tier_variations={tier_variations}
                                quantity={quantity}
                                total_add={total_add}
                                models={models}
                                old_model_ix={model_ix}
                                handleClose={onToggleChangeModel}
                                handleConfirm={handleChangeModel}
                            />
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default FsHotDealItem;
