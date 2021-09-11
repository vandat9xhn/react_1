import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import { GetIdSlug } from '../../../../../_some_function/GetIdSlug';
//
import { handle_API_FashionShop_R } from '../../../../../_handle_api/fashion/FashionHandleAPI';
//
import {
    FsShop_handleDataState,
    FsShop_initial_state_obj,
    FS_SHOP_TYPE_COMPONENT_OBJ,
} from '../_state/handleDataState';
import { FsShop_handleSaveVoucher } from '../_state/handleSaveVoucher';
//
import FashionH from '../../../components/head/_main/FashionH';
import FsShopOverview from '../overview/_main/FsShopOverview';
import FsShopDiscount from '../discount/_main/FsShopDiscount';
import FsShopType from '../_type/FsShopType';
import FsShopProducts from '../products/_main/FsShopProducts';
import FsShopRowTitle from '../row_title/_main/FsShopRowTitle';
//
import '../_mobile_css/FsShopMb.scss';
import '../_mobile_css/FsShopOverviewMb.scss';
import '../_mobile_css/FsShopDiscountMb.scss';
import '../_mobile_css/FsShopRowProductsMb.scss';
import '../_mobile_css/FsShopInfoMb.scss';
import '../_mobile_css/FsShopVidPicSingleMb.scss';
import FsShopInfo from '../info/_main/FsShopInfo';
import FsShopCategoryMb from '../category/_main/FsShopCategoryMb';

//
Shop.propTypes = {};

//
function Shop(props) {
    //
    const { id } = GetIdSlug();

    //
    const [state_obj, setStateObj] = useState(FsShop_initial_state_obj());

    const { shop_info, data_type_arr, has_fetched, title_name } = state_obj;

    //
    useEffect(() => {
        getData_API_shop_R();
    }, []);

    // ----- API

    async function getData_API_shop_R() {
        const data = await handle_API_FashionShop_R(id);

        FsShop_handleDataState({
            data: data,
            setStateObj: setStateObj,
        });
    }

    // -----

    //
    function handleSaveVoucher(voucher_ix) {
        FsShop_handleSaveVoucher({
            voucher_ix: voucher_ix,
            setStateObj: setStateObj,
        });
    }

    //
    function handleChangeTitle(new_title_name) {
        setStateObj({
            ...state_obj,
            title_name: new_title_name,
        });
    }

    //
    return (
        <div
            className={`FashionShop font-for-fashion ${
                IS_MOBILE ? 'FashionShop-mobile' : ''
            }`}
        >
            <div className="FashionShop_head">
                <FashionH />
            </div>

            {has_fetched ? (
                <React.Fragment>
                    <div className="FsShop_overview margin-bottom-15px padding-top-20px bg-primary">
                        <FsShopOverview shop_info={shop_info} />

                        <FsShopRowTitle
                            category_arr={shop_info.category_arr}
                            more_title_arr={[]}
                            title_name={title_name}
                            handleChangeTitle={handleChangeTitle}
                        />
                    </div>

                    <div className="fashion-width">
                        {IS_MOBILE ? (
                            <div
                                className={`${
                                    title_name != 'posts' ? 'display-none' : ''
                                }`}
                            >
                                <FsShopInfo shop_info={shop_info} />
                            </div>
                        ) : null}

                        {IS_MOBILE ? (
                            <div
                                className={`${
                                    title_name != 'category' ? 'display-none' : ''
                                }`}
                            >
                                <FsShopCategoryMb
                                    category_arr={shop_info.category_arr}
                                />
                            </div>
                        ) : null}

                        <div
                            className={`${
                                IS_MOBILE && title_name != 'shop'
                                    ? 'display-none'
                                    : ''
                            }`}
                        >
                            <div className="margin-bottom-20px">
                                <FsShopDiscount
                                    discount_arr={shop_info.discount_arr}
                                    handleSave={handleSaveVoucher}
                                />
                            </div>

                            {data_type_arr.map((item) => (
                                <div
                                    key={item.id}
                                    className="margin-bottom-20px"
                                >
                                    <FsShopType
                                        TypeComponent={
                                            FS_SHOP_TYPE_COMPONENT_OBJ[
                                                item.type
                                            ]
                                        }
                                        {...item.data}
                                    />
                                </div>
                            ))}
                        </div>

                        <div
                            className={`${
                                IS_MOBILE && title_name != 'product'
                                    ? 'display-none'
                                    : ''
                            }`}
                        >
                            <FsShopProducts
                                category_arr={shop_info.category_arr}
                            />
                        </div>
                    </div>
                </React.Fragment>
            ) : (
                <div className="h-100vh"></div>
            )}
        </div>
    );
}

export default Shop;
