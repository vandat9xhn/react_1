import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import CheckBoxCustom from '../../../../../../../component/input/checkbox_custom/CheckBoxCustom';
import DiscountDealSymbol from '../../../../../../../component/symbol/discount_deal/DiscountDealSymbol';
//
import FsShopDealLabel from '../../../../../components/shop_deal_label/FsShopDealLabel';
import FsFaceVidPic from '../../../../../components/face_vid_pic/FsFaceVidPic';
import FsIHotDealTiers from '../tiers/_main/FsIHotDealTiers';

//
FsHotDealItem.propTypes = {};

//
function FsHotDealItem({
    ix,
    img,
    flash_img,

    name,
    model_name,
    discount,
    quantity,
    checked,

    tier_variations,
    tier_ix_arr,

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
            <div className="FsHotDealItem_head pos-rel">
                <FsFaceVidPic img={img} flash_img={flash_img} />

                <div>
                    <DiscountDealSymbol discount={discount} />
                </div>

                <div className="pos-abs right-0 bottom-0">
                    <div className="bg-loader">{quantity}</div>
                </div>
            </div>

            <div className="FsHotDealItem_foot pos-rel">
                <div className="FsHotDealItem_foot_name overflow-hidden">
                    <div className="inline-flex">
                        <FsShopDealLabel label="Deal Sốc" />

                        <div>{name}</div>
                    </div>
                </div>

                <div className="display-flex align-items-center">
                    <div>
                        <CheckBoxCustom
                            checked={checked}
                            title=""
                            handleChangeChecked={onChecked}
                        />
                    </div>

                    <div
                        className="flex-between-center"
                        onClick={onToggleChangeModel}
                    >
                        <div>
                            <span>{model_name}</span>
                        </div>

                        <div>
                            <IconsArrow y={200} size_icon="0.5rem" />
                        </div>
                    </div>
                </div>

                <div className="pos-abs bottom-100per x-center">
                    <div>
                        <FsIHotDealTiers
                            item_ix={ix}
                            tier_variations={tier_variations}
                            old_tier_v_ix_arr={tier_ix_arr}
                            handleClose={onToggleChangeModel}
                            handleConfirm={handleChangeModel}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FsHotDealItem;
