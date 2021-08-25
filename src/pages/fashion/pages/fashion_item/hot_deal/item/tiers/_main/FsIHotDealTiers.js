import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../../../_constant/Constant';
//
import { useNewCount } from '../../../../../../../../_hooks/useCount';
//
import CountDownUpDiv from '../../../../../../../../component/some_div/count_down_up_div/CountDownUpDiv';
//
import FsHDTierItem from '../item/FsHDTierItem';
import FsIHDTiersBtns from '../btns/FsIHDTiersBtns';
//
import './FsIHotDealTiers.scss';

//
FsIHotDealTiers.propTypes = {
    item_ix: PropTypes.number,
    tier_variations: PropTypes.array,
    quantity: PropTypes.number,
    models: PropTypes.array,
    old_model_ix: PropTypes.number,

    handleClose: PropTypes.func,
    handleConfirm: PropTypes.func,
};

//
function FsIHotDealTiers({
    item_ix,

    tier_variations,
    models,
    old_model_ix,
    quantity,
    total_add,

    handleClose,
    handleConfirm,
}) {
    //
    const [state_obj, setStateObj] = useState({
        tier_v_ix_arr: models.length ? models[old_model_ix].tier_ix_arr : [],
        model_ix: old_model_ix,
        count: total_add,
    });

    const { tier_v_ix_arr, model_ix, count } = state_obj;

    //
    const ref_main_elm = useRef(null);

    //
    const { countUp, countDown, beforeCountNum, countNum, countNumDone } =
        useNewCount({
            getCount,
            getMax,
            getMin,
            handleSetCount,
        });

    //
    useLayoutEffect(() => {
        handleMainPosition();
        IS_MOBILE &&
            (document.getElementsByTagName('html')[0].style.overflow =
                'hidden');

        return () => {
            IS_MOBILE &&
                document
                    .getElementsByTagName('html')[0]
                    .style.removeProperty('overflow');
        };
    }, []);

    /* ---- COUNT --- */

    //
    function getCount() {
        return count;
    }

    //
    function getMax() {
        return models.length && model_ix >= 0
            ? models[model_ix].quantity
            : quantity;
    }

    //
    function getMin() {
        return getMax() > 0 ? 1 : 0;
    }

    //
    function handleSetCount(new_count) {
        setStateObj({
            ...state_obj,
            count: new_count,
        });
    }

    /* ---------- */

    //
    function handleMainPosition() {
        if (IS_MOBILE) {
            return;
        }

        const { left, right } = ref_main_elm.current.getBoundingClientRect();

        if (innerWidth <= 400) {
            return;
        }

        if (left < 0) {
            ref_main_elm.current.style.transform = `translateX(${-left + 2}px)`;
        }

        if (right > innerWidth) {
            ref_main_elm.current.style.transform = `translateX(${
                innerWidth - right
            }px)`;
        }
    }

    //
    function handleChangeOption(tier_v_ix, tier_ix) {
        const new_tier_v_ix_arr = [...state_obj.tier_v_ix_arr];

        new_tier_v_ix_arr[tier_v_ix] =
            new_tier_v_ix_arr[tier_v_ix] == tier_ix ? -1 : tier_ix;

        const new_model_ix = models.findIndex(
            (item) => item.tier_ix_arr.join(',') == new_tier_v_ix_arr.join(',')
        );

        setStateObj({
            ...state_obj,
            tier_v_ix_arr: new_tier_v_ix_arr,
            model_ix: new_model_ix,
            count:
                new_model_ix == -1 ? 1 : models[model_ix].quantity > 0 ? 1 : 0,
        });
    }

    //
    function onConfirm() {
        handleConfirm(item_ix, model_ix, count);
    }

    //
    return (
        <div
            ref={ref_main_elm}
            className="FsIHotDealTiers pos-rel padding-8px brs-5px bg-primary box-shadow-fb overflow-y-auto"
        >
            {models.length ? (
                <div className="margin-bottom-1rem">
                    {tier_variations.map((tier_v_obj, tier_v_ix) => (
                        <div key={tier_v_ix} className="margin-bottom-1rem">
                            <div className="FsIHotDealTiers_title text-third font-16px">
                                {tier_v_obj.name}
                            </div>

                            <div className="display-flex flex-wrap font-14px">
                                {tier_v_obj.options.map((text, ix) => (
                                    <div
                                        key={ix}
                                        className="FsIHotDealTiers_tier_item"
                                    >
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
            ) : null}

            <div
                className={`FsIHotDealTiers_count margin-bottom-1rem ${
                    model_ix == -1 ? 'pointer-events-none opacity-05' : ''
                }`}
            >
                <CountDownUpDiv
                    disabled={model_ix == -1}
                    count={count}
                    max={getMax()}
                    min={getMin()}
                    //
                    countDown={countDown}
                    countUp={countUp}
                    beforeCountNum={beforeCountNum}
                    countNum={countNum}
                    countNumDone={countNumDone}
                />
            </div>

            <FsIHDTiersBtns
                can_confirm={tier_v_ix_arr.some((item) => item == -1)}
                handleConfirm={onConfirm}
                handleClose={handleClose}
            />
        </div>
    );
}

export default FsIHotDealTiers;
