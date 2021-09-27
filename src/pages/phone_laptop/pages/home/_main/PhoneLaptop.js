import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { API_PhoneLaptop_L } from '../../../../../api/api_django_no_token/phone_laptop/PhoneLaptopAPI';
//
import { useMounted } from '../../../../../_hooks/useMounted';
//
import observeToDo from '../../../../../_some_function/observerToDo';
//
import ProductsAnimate from '../products_animate/ProductsAnimate';
import SpecProducts from '../products_spec/SpecProducts';
//
import './PhoneLaptop.scss';

// const
const skeleton_arr = Array(5).fill({});
const hot_products = Array(12).fill({});
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

    // -------- API

    async function getPhonesLaptops(params, setState) {
        try {
            const res = await API_PhoneLaptop_L({
                ...initial_params,
                ...params,
            });

            mounted && setState(res.data.data);
        } catch (e) {
            console.log(e);
        }
    }

    // -----

    //
    function getAPIWhenCDM() {
        observeToDo({
            elm: ref_hot.current,
            callback: () =>
                getPhonesLaptops(
                    {
                        is_hot: 1,
                        size: 12,
                    },
                    setHotProductArr
                ),
        });

        observeToDo({
            elm: ref_phone.current,
            callback: () =>
                getPhonesLaptops(
                    {
                        type_product: 'phone',
                        size: 15,
                    },
                    setPhoneArr
                ),
        });

        observeToDo({
            elm: ref_lap.current,
            callback: () =>
                getPhonesLaptops(
                    {
                        type_product: 'laptop',
                        size: 15,
                    },
                    setLaptopArr
                ),
        });
    }

    //
    return (
        <div className="PhoneLaptop fashion-width padding-top-20px">
            <div
                ref={ref_hot}
                className="PhoneLaptop_banner margin-bottom-20px"
            >
                <ProductsAnimate products={hot_product_arr} />
            </div>

            <div
                ref={ref_phone}
                className="PhoneLaptop_phone margin-bottom-20px"
            >
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