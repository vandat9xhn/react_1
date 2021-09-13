import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
//
import FsITiers from '../../../tiers/_main/FsITiers';
import FsIHDItemHead from '../head/FsIHDItemHead';
import FsHDItemFoot from '../foot/FsHDItemFoot';
//
import './FsHotDealItem.scss';

//
FsHotDealItem.propTypes = {};

//
function FsHotDealItem({
    ix,

    id,
    name,
    img,
    quantity,
    flash_img,
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
    function onChangeModel(...params) {
        handleChangeModel(ix, ...params);
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

            <div className="FsHotDealItem_foot pos-rel margin-top-10px">
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
                                ? 'pos-fixed-100per bg-shadow-5 z-index-lv5'
                                : 'pos-abs bottom-100per x-center z-index-lv1'
                        }`}
                    >
                        <FsITiers
                            tier_variations={tier_variations}
                            quantity={quantity}
                            total_add={total_add}
                            models={models}
                            old_model_ix={model_ix}
                            handleClose={onToggleChangeModel}
                            handleConfirm={onChangeModel}
                        />
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default FsHotDealItem;
