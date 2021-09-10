import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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

//
Shop.propTypes = {};

//
function Shop(props) {
    //
    const { id } = GetIdSlug();

    //
    const [state_obj, setStateObj] = useState(FsShop_initial_state_obj());

    const { shop_info, data_type_arr, has_fetched } = state_obj;

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

    function handleSaveVoucher(voucher_ix) {
        FsShop_handleSaveVoucher({
            voucher_ix: voucher_ix,
            setStateObj: setStateObj,
        });
    }

    //
    return (
        <div className="FashionShop font-for-fashion">
            <div className="FashionShop_head">
                <FashionH />
            </div>

            {has_fetched ? (
                <React.Fragment>
                    <div className="margin-bottom-15px padding-top-20px bg-primary">
                        <FsShopOverview shop_info={shop_info} />
                    </div>

                    <div className="fashion-width">
                        <div className="margin-bottom-20px">
                            <FsShopDiscount
                                discount_arr={shop_info.discount_arr}
                                handleSave={handleSaveVoucher}
                            />
                        </div>

                        {data_type_arr.map((item) => (
                            <div key={item.id} className="margin-bottom-20px">
                                <FsShopType
                                    TypeComponent={
                                        FS_SHOP_TYPE_COMPONENT_OBJ[item.type]
                                    }
                                    {...item.data}
                                />
                            </div>
                        ))}

                        <div>
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
