import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_fashion_item } from '../../../../../../../../_context/fashion/item/context_fashion_item';
//
import FsIIfRTierVariantItem from '../item/FsIIfRTierVariantItem';
//
import './FsIIfRTierVariants.scss';

//
FsIIfRTierVariants.propTypes = {
    // name: PropTypes.string,
    // options: PropTypes.arrayOf(PropTypes.string),
    // handleChooseOption: PropTypes.func,
};

//
function FsIIfRTierVariants({}) {
    //
    const { item_info, tier_ix_arr, handleChooseOption } =
        useContext(context_fashion_item);

    //
    return (
        <div className="FsIIfRTierVariants">
            {item_info.tier_variations.map(
                (tier_variation, tier_variation_ix) => (
                    <div key={tier_variation_ix} className="margin-bottom-1rem">
                        <div className="display-flex">
                            <div className="fashion-item-label">
                                <span className="text-third">
                                    {tier_variation.name}
                                </span>
                            </div>

                            <div>
                                <ul className="display-flex list-none flex-wrap">
                                    {tier_variation.options.map(
                                        (option, ix) => (
                                            <li
                                                key={ix}
                                                className="FsIIfRTierVariants_item"
                                            >
                                                <FsIIfRTierVariantItem
                                                    tier_ix={tier_variation_ix}
                                                    ix={ix}
                                                    is_active={
                                                        ix ==
                                                        tier_ix_arr[
                                                            tier_variation_ix
                                                        ]
                                                    }
                                                    text={option}
                                                    handleClick={
                                                        handleChooseOption
                                                    }
                                                />
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
}

export default FsIIfRTierVariants;
