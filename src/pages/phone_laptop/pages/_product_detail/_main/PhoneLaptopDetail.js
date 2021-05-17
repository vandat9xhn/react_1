import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import makeFormData from '../../../../../_some_function/makeFormData';
import { API_PhoneLaptop_L, API_PhoneOrder_C, API_PhoneLaptop_R } from '../../../../../api/api_django_no_token/phone_laptop/PhoneLaptopAPI';
// 
import BlurFetchingDiv from '../../../../../component/some_div/fetching/BlurFetchingDiv';
import FetchingDiv from '../../../../../component/some_div/fetching/FetchingDiv';
import NoticeDiv from '../../../../../component/some_div/notice_div/NoticeDiv';
// 
import ProductDetail from '../detail/ProductDetail';
import RelativeProducts from '../relative/RelativeProducts';
import PhoneLaptopType from '../type_buy/_main/PhoneLaptopType';
import PhoneLaptopConfirmBuy from '../confirm_buy/PhoneLaptopConfirmBuy';
// 
import './PhoneLaptopDetail.scss';

//
function PhoneLaptopDetail() {
    //
    const link_id = useParams().id
    //
    const [product, setProduct] = useState({})
    const [relative_products, setRelativeProducts] = useState([{id: 1}, {id: 2} , {id: 3}, {id: 4}, {id: 5}])
    const [actions_buying, setActionsBuying] = useState('')
    const [show_discount_type, setShowDiscountType] = useState(false)
    const [is_buying, setIsBuying] = useState(false)
    const [notice_success, setNoticeSuccess] = useState(false)
    const [type_ix, setTypeIx] = useState(0)

    //
    useEffect(() => {
        getPhoneAndRelativeProducts(link_id);
        window.scrollTo(0, 0)
        
    },[link_id])

    // get product detail
    const getPhoneAndRelativeProducts = async (link_id) => {
        try {
            // product
            const res1 = await API_PhoneLaptop_R(link_id);
            const new_product = res1.data
            setProduct(new_product)
            // relative products
            const {type_product, name, new_price} = new_product;
            document.title = name
            //
            const res2 = await API_PhoneLaptop_L({
                pk: link_id,
                type_product: type_product,
                gte_price: new_price - 2000000,
                lte_price: new_price + 2000000,
                in_stock: '',
                is_hot: [1, 2],
                page: 1,
                size: 10,
            })
            setRelativeProducts(res2.data.data)

        } catch (e) {
            console.log(e);
        }
    };


/* --------------------------- TYPE BUY -------------------------- */

    //
    const openTypeBuy = () => {
        setActionsBuying('type_buy')
    }

    //
    const handleChangeTypeBuy = (ix) => {
        if (type_ix !== ix) {
            setTypeIx(ix)
        }
    }

    //
    const toggleDiscountType = () => {
        setShowDiscountType(!show_discount_type)
    }

    //
    const closeTypeBuy = () => {
        setActionsBuying('')
    }


/* --------------------------- CONFIRM BUY -------------------------- */

    //
    const openConfirmBuy = () => {
        setActionsBuying('confirm_buy')
    }

    //
    const closeConfirmBuy = () => {
        setActionsBuying('type_buy')
    }

    //
    const handleConfirmBuy = (e) => {
        e.preventDefault();
        setIsBuying(true)
        const full_name = e.target.children[0].children[1].children[0].value
        const address = e.target.children[1].children[1].children[0].value
        const phone = e.target.children[2].children[1].children[0].value

        setTimeout(() => {
            console.log('name: ', full_name, 'dia chi: ', address, 'phone: ', phone, 'type: ', type_ix);
            sendOrderBuy({
                'full_name': full_name,
                'address': address,
                'phone_number': phone,
                // 'phone_color': type_ix,
                'phone_model': link_id,
                'quantity': 1,
                'status': 'order',
            })
            setIsBuying(false)
            setActionsBuying('')
            setNoticeSuccess(true)
            setTimeout(() => {
                setNoticeSuccess(false)
            }, 800);
        }, 1000);
    }
    //
    async function sendOrderBuy(data) {
        const formData = makeFormData(data)
        await API_PhoneOrder_C(formData)
    }

    //
    return (
        <div>
            {/* product detail */}
            <ProductDetail product={product} openTypeBuy={openTypeBuy}/>

            <hr className="App_hr-bg"/>

            {/* relative products */}
            <RelativeProducts relative_products={relative_products}/>

            {/* buying */}
            <div className={actions_buying == '' ? 'display-none' : 'screen-blur'}>
                <div className={actions_buying == 'type_buy' ? 'form-fixed' : 'display-none'}>
                    <PhoneLaptopType
                        product={product}
                        show_discount_type={show_discount_type}
                        toggleDiscountType={toggleDiscountType}
                        handleChangeTypeBuy={handleChangeTypeBuy}
                        openConfirmBuy={openConfirmBuy}
                        closeTypeBuy={closeTypeBuy}
                    />
                </div>

                <div className={actions_buying == 'confirm_buy' ? 'form-fixed' : 'display-none'}>
                    <PhoneLaptopConfirmBuy
                        closeConfirmBuy={closeConfirmBuy}
                        onSubmit={handleConfirmBuy}
                        is_buying={is_buying}
                    />
                </div>
            </div>

            <BlurFetchingDiv FetchingComponent={FetchingDiv} open_fetching={is_buying}/>
            
            {notice_success &&
                <NoticeDiv>
                    <div className="PhoneLaptopDetail_notice-success brs-5px bg-loader">
                        Order successfully
                    </div>
                </NoticeDiv>
            }
        </div>
    );
}


PhoneLaptopDetail.propTypes = {

};

export default PhoneLaptopDetail;