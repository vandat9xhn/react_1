import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
//
import { context_api } from '../../../../../_context/ContextAPI';
import ContextFashionItem from '../../../../../_context/fashion/item/ContextFashionItem';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import { useMounted } from '../../../../../_hooks/useMounted';
import { useNewCount } from '../../../../../_hooks/useCount';
//
import { FsI_initial_state_obj } from '../_state/_FsI_handleDataState';
import { getItemInfo } from '../_state/getItemInfo';
import { getShopInfo } from '../_state/getShopInfo';
import { changeVidPicIx } from '../_state/changeVidPicIx';
import { addToCart } from '../_state/addToCart';
import { handleChooseOption } from '../_state/handleChooseOption';
import { saveShopDiscount } from '../_state/saveShopDiscount';
//
import './FashionItemCommon.scss';
//
import FashionH from '../../../components/head/_main/FashionH';
import FashionRate from '../rate/_main/FashionRate';
import FashionRlt from '../relative/FashionRlt';
import FashionOtherItem from '../other_shop_item/FashionOtherItem';
import FashionItemMayLike from '../may_like/FashionItemMayLike';
import VirtualScroll from '../../../../../component/virtual_scroll/VirtualScroll';
import FashionItemInfo from '../info/_main/FashionItemInfo';
import FashionItemOwner from '../owner/_main/FashionItemOwner';
import FashionBreadCrumb from '../../../components/breadcrumb/FashionBreadCrumb';
import FashionItemDescription from '../description/_main/FashionItemDescription';
import FsICombo from '../combo/_main/FsICombo';
import FsIGift from '../gift/_main/FsIGift';
import FsHotDeal from '../../../components/hot_deal/_main/FsHotDeal';
import FsIShopDiscount from '../shop_discount/_main/FsIShopDiscount';
import FsIShopSelling from '../shop_selling/FsIShopSelling';
import FsIBottomPanelMb from '../bottom_panel_mb/FsIBottomPanelMb';
//
import './FashionItem.scss';
import './FashionItemRes.scss';
import './FashionItemMobile.scss';

import '../_mobile_scss/FsIBreadCrumbMb.scss';
import '../_mobile_scss/FsIInfoMb.scss';
import '../_mobile_scss/FsIInfoLeftMb.scss';
import '../_mobile_scss/FsIInfoRightMb.scss';
import '../_mobile_scss/FsIComboMb.scss';
import '../_mobile_scss/FsIGiftMb.scss';

import '../_mobile_scss/FsIOwnerMb.scss';
import '../_mobile_scss/FsIShopSellingMb.scss';
import '../_mobile_scss/FsIDescriptionMb.scss';
import '../_mobile_scss/FsIRateMb.scss';
import '../_mobile_scss/FsIShopDiscountMb.scss';
import '../_mobile_scss/FashionItemMayLike.scss';

//
FashionItem.propTypes = {};

//
function FashionItem(props) {
    //
    const id = +props.match.params.id;

    //
    const use_history = useHistory();
    const dispatch = useDispatch();

    //
    const { openScreenOnce, closeScreenOnce } = useContext(context_api);

    //
    const [state_obj, setStateObj] = useState(FsI_initial_state_obj());

    const { item_info, model_ix, count, wait_add_cart } = state_obj;
    
    const { tier_variations, models } = item_info;

    const {
        new_price: c_new_price,
        old_price: c_old_price,
        new_price_max: c_new_price_max,
        old_price_max: c_old_price_max,
        quantity: c_quantity,
        total_add_cart: c_total_add_cart,
    } = model_ix == -1
        ? item_info
        : { ...models[model_ix], new_price_max: 0, old_price_max: 0 };

    //
    const mounted = useMounted();

    const count_obj = useNewCount({
        getCount,
        getMax,
        getMin,
        handleSetCount,
    });

    //
    useEffect(() => {
        window.scrollTo(0, 0);

        getItemInfo({
            product_id: id,
            mounted: mounted,
            setStateObj: setStateObj,
        });

        getShopInfo({
            product_id: id,
            mounted: mounted,
            setStateObj: setStateObj,
        });
    }, [id]);

    // ------ COUNT

    //
    function getCount() {
        return count;
    }

    //
    function getMax() {
        return models.length && model_ix >= 0
            ? models[model_ix].quantity - models[model_ix].total_add_cart
            : item_info.quantity - item_info.total_add_cart;
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

    // --------

    //
    function onChangeVidPicIx(ix) {
        changeVidPicIx({
            new_ix: ix,
            setStateObj: setStateObj,
        });
    }

    //
    function onChooseOption(new_ix, new_type_ix) {
        handleChooseOption({
            new_ix: new_ix,
            new_type_ix: new_type_ix,
            setStateObj: setStateObj,
        });
    }

    //
    function onSaveShopDiscount(ix) {
        saveShopDiscount({
            ix: ix,
            setStateObj: setStateObj,
        });
    }

    // -----

    //
    function detectCanAddCart() {
        if (count <= 0) {
            return false;
        }

        if (tier_variations.length && model_ix == -1) {
            setStateObj({
                ...state_obj,
                error_add_cart: 'Hãy chọn loại sản phẩm',
            });

            return false;
        }

        return true
    }

    //
    function onAddToCart() {
        if (!detectCanAddCart()) {
            return;
        }

        addToCart({
            id: id,
            count: count,
            mounted: true,
            new_count: count == getMax() ? 0 : 1,

            setStateObj: setStateObj,
            dispatch: dispatch,

            openScreenOnce: openScreenOnce,
            closeScreenOnce: closeScreenOnce,
        });
    }

    //
    async function handleBuyNow() {
        if (detectCanAddCart()) {
            await addToCart({
                id: id,
                count: count,
                new_count: count == getMax() ? 0 : 1,
                mounted: true,
                use_notice: false,
    
                setStateObj: setStateObj,
                dispatch: dispatch,
    
                openScreenOnce: openScreenOnce,
                closeScreenOnce: closeScreenOnce,
            });

            use_history.push('/fashion/buy');
        }
    }

    // console.log(state_obj.shop_info.discount_arr);
    //
    return (
        <div
            className={`FashionItem font-for-fashion ${
                IS_MOBILE ? 'FashionItem_mobile' : ''
            }`}
        >
            <FashionH />

            <div className="fashion-width">
                <ContextFashionItem
                    {...state_obj}
                    setStateObj={setStateObj}
                    //
                    {...count_obj}
                    max={getMax()}
                    min={getMin()}
                    //
                    c_new_price={c_new_price}
                    c_old_price={c_old_price}
                    c_new_price_max={c_new_price_max}
                    c_old_price_max={c_old_price_max}
                    c_quantity={c_quantity}
                    c_total_add_cart={c_total_add_cart}
                    //
                    changeVidPicIx={onChangeVidPicIx}
                    handleChooseOption={onChooseOption}
                    saveShopDiscount={onSaveShopDiscount}
                    addToCart={onAddToCart}
                    handleBuyNow={handleBuyNow}
                >
                    <div className="FashionItem_breadCrumb padding-16px">
                        <FashionBreadCrumb
                            arr={item_info.categories.map(
                                (item) => item.display_name
                            )}
                        />
                    </div>

                    <div className="FashionItem_part">
                        <VirtualScroll>
                            <FashionItemInfo />
                        </VirtualScroll>
                    </div>

                    <div className="FashionItem_part">
                        <VirtualScroll>
                            <FsICombo />
                        </VirtualScroll>
                    </div>

                    <div className="FashionItem_part">
                        <VirtualScroll>
                            <FsIGift />
                        </VirtualScroll>
                    </div>

                    <div className="FashionItem_part">
                        <VirtualScroll>
                            <FsHotDeal
                                product_id={item_info.id}
                                item_info={item_info}
                                params_api={{ product_model: item_info.id }}
                            />
                        </VirtualScroll>
                    </div>

                    <div className="FashionItem_part">
                        <VirtualScroll>
                            <FashionItemOwner />
                        </VirtualScroll>
                    </div>

                    <div className="FashionItem_body display-flex">
                        <div className="FashionItem_body_left flex-grow-1">
                            <div className="FashionItem_part">
                                <VirtualScroll>
                                    <FashionItemDescription />
                                </VirtualScroll>
                            </div>

                            <div className="FashionItem_part">
                                <VirtualScroll>
                                    <FashionRate id={item_info.id} />
                                </VirtualScroll>
                            </div>

                            <div className="FashionItem_part">
                                <VirtualScroll>
                                    <FashionOtherItem id={item_info.id} />
                                </VirtualScroll>
                            </div>

                            <div className="FashionItem_part">
                                <VirtualScroll>
                                    <FashionRlt id={item_info.id} />
                                </VirtualScroll>
                            </div>

                            <div className="FashionItem_part">
                                <VirtualScroll>
                                    <FashionItemMayLike id={item_info.id} />
                                </VirtualScroll>
                            </div>
                        </div>

                        <div
                            className={`FashionItem_body_right flex-shrink-0 ${
                                IS_MOBILE ? '' : 'FashionItem_body_right-pc'
                            }`}
                        >
                            <div className="FashionItem_part">
                                <VirtualScroll>
                                    <FsIShopDiscount />
                                </VirtualScroll>
                            </div>

                            <div className="FashionItem_part">
                                <VirtualScroll>
                                    <FsIShopSelling />
                                </VirtualScroll>
                            </div>
                        </div>
                    </div>

                    {IS_MOBILE ? (
                        <div className="pos-fixed bottom-0 left-0 w-100per">
                            <FsIBottomPanelMb />
                        </div>
                    ) : null}
                </ContextFashionItem>
            </div>
        </div>
    );
}

export default FashionItem;
