import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { API_PhoneLaptop_L } from '../../../../../api/api_django_no_token/phone_laptop/PhoneLaptopAPI';

import { useMounted } from '../../../../../_custom_hooks/useMounted';

import observeToDo from '../../../../../_some_function/observerToDo';
//
import ProductsAnimate from '../products_animate/ProductsAnimate';
import SpecProducts from '../products_spec/SpecProducts';
//
import './PhoneLaptop.scss';

// const
const skeleton_arr = [1, 2, 3, 4, 5, 6];
const hot_products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const initial_params = {
    pk: -1,
    gte_price: 0,
    lte_price: 100000000,
    in_stock: '',
    page: 1,
};

//
PhoneLaptop.propTypes = {};

//
function PhoneLaptop(props) {
    //
    const [hot_product_arr, setHotProductArr] = useState(hot_products);
    const [phone_arr, setPhoneArr] = useState(skeleton_arr);
    const [laptop_arr, setLaptopArr] = useState(skeleton_arr);

    //
    const ref_hot = useRef(null);
    const ref_phone = useRef(null);
    const ref_lap = useRef(null);

    //
    const mounted = useMounted();

    //
    useEffect(() => {
        document.title = 'Phone Laptop';
        getAPIWhenCDM();
    }, []);

    //
    function getAPIWhenCDM() {
        observeToDo(
            ref_hot.current,
            () =>
                getPhonesLaptops(
                    {
                        is_hot: 1,
                        size: 12,
                    },
                    setHotProductArr
                ),
            0
        );

        observeToDo(
            ref_phone.current,
            () =>
                getPhonesLaptops(
                    {
                        type_product: 'phone',
                        size: 15,
                    },
                    setPhoneArr
                ),
            0
        );

        observeToDo(
            ref_lap.current,
            () =>
                getPhonesLaptops(
                    {
                        type_product: 'laptop',
                        size: 15,
                    },
                    setLaptopArr
                ),
            0
        );
    }

    /* ------------------- GET API --------------------*/

    async function getPhonesLaptops(params, setState) {
        try {
            const res = await API_PhoneLaptop_L({
                ...initial_params,
                ...params,
            });
            mounted && setState(res.data.data);
            //
        } catch (e) {
            console.log(e);
        }
    }

    //
    return (
        <div className="PhoneLaptop">
            <div ref={ref_hot} className="PhoneLaptop_banner">
                <ProductsAnimate products={hot_product_arr} />
            </div>

            <div ref={ref_phone} className="PhoneLaptop_phone">
                <SpecProducts
                    products={phone_arr}
                    title="Phone"
                    link="/phone-laptop-phones"
                />
            </div>

            <div ref={ref_lap} className="PhoneLaptop_laptop">
                <SpecProducts
                    products={laptop_arr}
                    title="Laptop"
                    link="/phone-laptop-laptops"
                />
            </div>
        </div>
    );
}

export default PhoneLaptop;
