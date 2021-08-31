import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import { makeRectIntoScreen } from '../../../../../_some_function/makeRectIntoScreen';
//
import { useNewCount } from '../../../../../_hooks/useCount';
import { useModelAppear } from '../../../../../_hooks/useModelAppear';
//
import CountDownUpDiv from '../../../../../component/some_div/count_down_up_div/CountDownUpDiv';
import ModelAppearMb from '../../../../../component/model_appear_mb/ModelAppearMb';
//
import FsITierItem from '../item/FsITierItem';
import FsIHDTiersBtns from '../btns/FsITiersBtns';
//
import './FsITiers.scss';

//
FsITiers.propTypes = {
    tier_variations: PropTypes.array,
    quantity: PropTypes.number,
    model_ix: PropTypes.number,
    models: PropTypes.array,
    old_model_ix: PropTypes.number,

    handleClose: PropTypes.func,
    handleConfirm: PropTypes.func,
};

FsITiers.defaultProps = {
    use_count: true,
};

//
function FsITiers({
    tier_variations,
    models,
    old_model_ix,
    quantity,
    total_add,

    use_count,

    handleClose,
    handleConfirm,
}) {
    //
    const [state_obj, setStateObj] = useState({
        tier_ix_arr: models.length ? [...models[old_model_ix].tier_ix_arr] : [],
        model_ix: old_model_ix,
        count: total_add,
    });

    const { tier_ix_arr, model_ix, count } = state_obj;

    //
    const { countUp, countDown, beforeCountNum, countNum, countNumDone } =
        useNewCount({
            getCount,
            getMax,
            getMin,
            handleSetCount,
        });

    const { ref_pos_elm, ref_main_elm, onClose } = useModelAppear({});

    //
    useLayoutEffect(() => {
        if (IS_MOBILE) {
            document.getElementsByTagName('html')[0].style.overflow = 'hidden';
        } else {
            makeRectIntoScreen(ref_main_elm.current);
        }

        return () => {
            if (IS_MOBILE) {
                document
                    .getElementsByTagName('html')[0]
                    .style.removeProperty('overflow');
            }
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
    function handleChangeOption(tier_v_ix, tier_ix) {
        const new_tier_ix_arr = [...state_obj.tier_ix_arr];

        new_tier_ix_arr[tier_v_ix] =
            new_tier_ix_arr[tier_v_ix] == tier_ix ? -1 : tier_ix;

        const new_model_ix = models.findIndex(
            (item) => item.tier_ix_arr.join(',') == new_tier_ix_arr.join(',')
        );

        setStateObj({
            ...state_obj,
            tier_ix_arr: new_tier_ix_arr,
            model_ix: new_model_ix,
            count:
                new_model_ix == -1
                    ? 1
                    : models[new_model_ix].quantity > 0
                    ? 1
                    : 0,
        });
    }

    //
    function onHandleClose() {
        onClose(handleClose);
    }

    //
    function onConfirm() {
        onClose(() => handleConfirm(model_ix, count));
    }

    //
    return (
        <ModelAppearMb
            ref_pos_elm={ref_pos_elm}
            ref_main_elm={ref_main_elm}
            class_main={`FsITiers ${IS_MOBILE ? '' : 'FsITiers-pc brs-5px'}`}
            handleClose={onHandleClose}
        >
            <React.Fragment>
                {models.length ? (
                    <div className="margin-bottom-16px">
                        {tier_variations.map((tier_v_obj, tier_v_ix) => (
                            <div key={tier_v_ix} className="margin-bottom-16px">
                                <div className="FsITiers_title text-third font-16px">
                                    {tier_v_obj.name}
                                </div>

                                <div className="display-flex flex-wrap font-14px">
                                    {tier_v_obj.options.map((text, ix) => (
                                        <div
                                            key={ix}
                                            className="FsITiers_tier_item"
                                        >
                                            <FsITierItem
                                                tier_ix={ix}
                                                tier_v_ix={tier_v_ix}
                                                text={text}
                                                is_active={
                                                    tier_ix_arr[tier_v_ix] == ix
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

                {use_count ? (
                    <div
                        className={`FsITiers_count margin-bottom-16px ${
                            model_ix == -1
                                ? 'pointer-events-none opacity-05'
                                : ''
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
                ) : null}

                <FsIHDTiersBtns
                    can_confirm={tier_ix_arr.some((item) => item == -1)}
                    handleConfirm={onConfirm}
                    handleClose={onHandleClose}
                />
            </React.Fragment>
        </ModelAppearMb>
    );
}

export default FsITiers;
