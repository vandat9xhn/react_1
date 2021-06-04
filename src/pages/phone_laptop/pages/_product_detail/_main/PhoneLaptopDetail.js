import React, { useContext, useEffect, useRef, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import {
    API_PhoneOrder_C,
    API_PhoneLaptop_R,
} from '../../../../../api/api_django_no_token/phone_laptop/PhoneLaptopAPI';
//
import { useScreenFetching } from '../../../../../_custom_hooks/UseScreenFetching';
//
import makeFormData from '../../../../../_some_function/makeFormData';
import observeToDo from '../../../../../_some_function/observerToDo';
//
import ProductDetail from '../detail/ProductDetail';
import RelativeProducts from '../relative/RelativeProducts';
import PhoneLaptopType from '../type_buy/_main/PhoneLaptopType';
import PhoneLaptopConfirmBuy from '../confirm_buy/PhoneLaptopConfirmBuy';
//
import './PhoneLaptopDetail.scss';

//
const initial_product_state = {
    product: {},
    action: '',
    open_discount: false,
    type_buy_ix: 0,

    has_fetched: false,
};

//
PhoneLaptopDetail.propTypes = {};

//
function PhoneLaptopDetail() {
    //
    const product_id = + useParams().id;

    //
    const { openScreenNotice, closeScreenNotice } = useContext(context_api);

    //
    const [product_state, setProductState] = useState(initial_product_state);

    const { product, action, open_discount, type_buy_ix, has_fetched } =
        product_state;

    //
    const ref_product = useRef(null);

    //
    const handleScreenFetching = useScreenFetching();

    //
    useEffect(() => {
        window.scrollTo(0, 0);

        observeToDo(ref_product.current, getData_API_Product, 0);
    }, [product_id]);

    /* ---------------------- GET API ---------------------- */

    //
    async function getData_API_Product() {
        try {
            setProductState(initial_product_state);

            const res = await API_PhoneLaptop_R(product_id);

            document.title = res.data.name;
            setProductState(product_state => ({
                ...product_state,
                product: res.data,
                has_fetched: true,
            }));
        } catch (e) {
            console.log(e);
        }
    }

    /* --------------------------- TYPE BUY -------------------------- */

    //
    function openTypeBuy() {
        setProductState({
            ...product_state,
            action: 'type_buy',
        });
    }

    //
    function closeTypeBuy() {
        setProductState({
            ...product_state,
            action: '',
        });
    }

    //
    function handleChangeTypeBuy(ix) {
        if (type_buy_ix !== ix) {
            setProductState({
                ...product_state,
                type_buy_ix: ix,
            });
        }
    }

    //
    function toggleDiscountType() {
        setProductState({
            ...product_state,
            open_discount: !open_discount,
        });
    }

    /* --------------------------- CONFIRM BUY -------------------------- */

    //
    function openConfirmBuy() {
        setProductState({
            ...product_state,
            action: 'confirm_buy',
        });
    }

    //
    function closeConfirmBuy() {
        openTypeBuy();
    }

    //
    async function handleConfirmBuy(full_name, address, phone) {
        const formData = makeFormData({
            full_name: full_name,
            address: address,
            phone_number: phone,
            phone_color: type_buy_ix,
            phone_model: product_id,
            quantity: 1,
            status: 'order',
        });

        await handleScreenFetching(() => API_PhoneOrder_C(formData));

        setProductState({
            ...product_state,
            action: '',
            type_buy_ix: 0,
            open_discount: false,
        })

        openScreenNotice(
            <div className="PhoneLaptopDetail_notice-success brs-5px bg-loader">
                Order successfully
            </div>
        );

        setTimeout(() => {
            closeScreenNotice();
        }, 800);
    }

    //
    return (
        <div className="bg-primary">
            <div ref={ref_product}>
                <ProductDetail
                    product={product}
                    has_fetched={has_fetched}
                    openTypeBuy={openTypeBuy}
                />
            </div>

            <hr className="App_hr-bg" />

            <div>
                <RelativeProducts product_id={product_id} />
            </div>

            <div className={action == '' ? 'display-none' : 'screen-blur'}>
                <div className="form-fixed">
                    <div className={action == 'type_buy' ? '' : 'display-none'}>
                        <PhoneLaptopType
                            product={product}
                            open_discount={open_discount}
                            type_buy_ix={type_buy_ix}
                            //
                            toggleDiscountType={toggleDiscountType}
                            handleChangeTypeBuy={handleChangeTypeBuy}
                            openConfirmBuy={openConfirmBuy}
                            closeTypeBuy={closeTypeBuy}
                        />
                    </div>

                    <div
                        className={
                            action == 'confirm_buy' ? '' : 'display-none'
                        }
                    >
                        <PhoneLaptopConfirmBuy
                            closeConfirmBuy={closeConfirmBuy}
                            handleSubmit={handleConfirmBuy}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhoneLaptopDetail;
