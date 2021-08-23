import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import FsHDTierItem from '../item/FsHDTierItem';

//
FsIHotDealTiers.propTypes = {};

//
function FsIHotDealTiers({
    item_ix,
    tier_variations,
    old_tier_v_ix_arr,

    handleClose,
    handleConfirm,
}) {
    //
    const [state_obj, setStateObj] = useState({
        tier_v_ix_arr: old_tier_v_ix_arr,
    });

    const { tier_v_ix_arr } = state_obj;

    //
    function handleClickMain(e) {
        e.preventDefault();
    }

    //
    function handleChangeOption(tier_v_ix, tier_ix) {
        const new_tier_v_ix_arr = [...state_obj.tier_v_ix_arr];

        (new_tier_v_ix_arr[tier_v_ix] == new_tier_v_ix_arr[tier_v_ix]) ==
        tier_ix
            ? -1
            : tier_ix;

        setStateObj({
            ...state_obj,
            tier_v_ix_arr: new_tier_v_ix_arr,
        });
    }

    //
    function onConfirm() {
        handleConfirm(item_ix, tier_v_ix_arr);
    }

    //
    return (
        <div className="FsIHotDealTiers padding-8px" onClick={handleClickMain}>
            <div className="margin-bottom-1rem">
                {tier_variations.map((tier_v_obj, tier_v_ix) => (
                    <div key={tier_v_ix}>
                        <div className="text-third font-16px">
                            {tier_v_obj.name}
                        </div>

                        <div className="font-14px">
                            {tier_v_obj.options.map((text, ix) => (
                                <div>
                                    <FsHDTierItem
                                        tier_ix={ix}
                                        tier_v_ix={tier_v_ix}
                                        text={text}
                                        is_active={
                                            tier_v_ix_arr[tier_v_ix] == ix
                                        }
                                        handleClick={handleChangeOption}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="display-flex flex-end font-14px">
                <button
                    className="btn btn-hv btn-active padding-16px bg-blur"
                    onClick={handleClose}
                >
                    Trở Lại
                </button>

                <button
                    className="btn btn-hv btn-active padding-16px text-white bg-fashion-red"
                    onClick={onConfirm}
                >
                    Xác nhận
                </button>
            </div>
        </div>
    );
}

export default FsIHotDealTiers;
