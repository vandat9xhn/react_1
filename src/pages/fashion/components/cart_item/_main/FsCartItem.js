import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import { formatNum } from '../../../../../_some_function/FormatNum';
//
import { useNewCount } from '../../../../../_hooks/useCount';
//
import CountDownUpDiv from '../../../../../component/some_div/count_down_up_div/CountDownUpDiv';
import CheckBoxCustom from '../../../../../component/input/checkbox_custom/CheckBoxCustom';
//
import FsCIType from '../type/_main/FsCIType';
import FsCIDelSearch from '../del_search/_main/FsCIDelSearch';
//
import './FsCartItem.scss';
import './FsCartItemMb.scss';

//
FsCartItem.propTypes = {};

//
function FsCartItem({
    item_info,

    model_ix,
    checked,
    use_check = true,
    open_model,
    open_search,

    handleSetCount,
    handleChecked,

    toggleOpenType,
    handleChangeType,
    closeChangeType,

    toggleSearchSame,
    handleDelete,
}) {
    //
    const { id, name, vid_pics, tier_variations, models, quantity } = item_info;

    const { old_price, new_price, total_add_cart } =
        model_ix != -1 ? models[model_ix] : models[0];
    // item_info;

    //
    const { countUp, countDown, beforeCountNum, countNum, countNumDone } =
        useNewCount({
            getCount: getCount,
            getMax: getMax,
            getMin: getMin,
            handleSetCount: handleSetCount,
        });

    //
    function handleStopPropagation(e) {
        e.stopPropagation();
    }

    //
    function getCount() {
        return total_add_cart;
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
    return (
        <div
            className={`FsCartItem padding-8px ${
                IS_MOBILE ? 'FsCartItem-mb' : ''
            }`}
        >
            <div
                className={`FsCartItem_row display-flex ${
                    IS_MOBILE ? '' : 'align-items-center'
                }`}
            >
                <div className="FsCartItem_check">
                    {use_check ? (
                        <CheckBoxCustom
                            checked={checked}
                            title=""
                            handleChangeChecked={handleChecked}
                        />
                    ) : null}
                </div>

                <div>
                    <Link to={`/fashion:${id}`} className="FsCartItem_img">
                        <img
                            className="object-fit-cover"
                            src={vid_pics[0]}
                            alt=""
                            width={IS_MOBILE ? 65 : 80}
                            height={IS_MOBILE ? 65 : 80}
                        />
                    </Link>
                </div>

                <div className="FsCartItem_center flex-grow-1 display-flex align-items-center">
                    <Link to={`/fashion:${id}`} className="FsCartItem_name">
                        <div className="FsCartItem_name_contain text-secondary overflow-hidden">
                            {name}
                        </div>
                    </Link>

                    <div
                        className={`FsCartItem_type ${
                            IS_MOBILE && models.length == 0
                                ? 'display-none'
                                : ''
                        }`}
                        onClick={handleStopPropagation}
                    >
                        {models.length > 1 ? (
                            <FsCIType
                                tier_variations={tier_variations}
                                quantity={
                                    model_ix == -1
                                        ? quantity
                                        : models[model_ix].quantity
                                }
                                total_add={total_add_cart}
                                models={models}
                                model_ix={model_ix}
                                open_model={open_model}
                                toggleOpen={toggleOpenType}
                                handleClose={closeChangeType}
                                handleConfirm={handleChangeType}
                            />
                        ) : null}
                    </div>

                    <div className="FsCartItem_price font-14px">
                        {old_price ? (
                            <del className="margin-right-5px text-del">
                                ₫{formatNum(old_price)}
                            </del>
                        ) : (
                            ''
                        )}

                        <span className="text-secondary">
                            ₫{formatNum(new_price)}
                        </span>
                    </div>

                    <div className="FsCartItem_count font-16px">
                        <CountDownUpDiv
                            // disabled={disabled}
                            count={total_add_cart}
                            max={getMax()}
                            min={getMin()}
                            countDown={countDown}
                            countUp={countUp}
                            beforeCountNum={beforeCountNum}
                            countNum={countNum}
                            countNumDone={countNumDone}
                        />
                    </div>

                    <div className="FsCartItem_total font-14px color-fashion">
                        ₫{formatNum(new_price * total_add_cart)}
                    </div>
                </div>

                {IS_MOBILE ? null : (
                    <div
                        className="FsCartItem_del_search"
                        onClick={handleStopPropagation}
                    >
                        <FsCIDelSearch
                            product_id={id}
                            open_search={open_search}
                            toggleSearchSame={toggleSearchSame}
                            handleDelete={handleDelete}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default FsCartItem;
