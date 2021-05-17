import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
//
import { API_City_L } from '../../../api/api_django_no_token/api01/API01NoToken';
import { API_FashionProduct_L } from '../../../api/api_django_no_token/fashion/APIFashionNoToken';
import { API_PhoneLaptop_L } from '../../../api/api_django_no_token/phone_laptop/PhoneLaptopAPI';
//
import ProductItem from '../../../component/products/product_item/ProductItem';
import { useMounted } from '../../../_custom_hooks/useMounted';
import observeToDo from '../../../_some_function/observerToDo';
//
import './Home.scss';

// const
const initial_arr = [1, 2, 3, 4, 5];

// Home
function Home() {
    //
    const [phones, setPhones] = useState(initial_arr);
    const [clothes, setClothes] = useState(initial_arr);
    const [cities, setCities] = useState(initial_arr);

    // 
    const ref_phone = useRef(null)
    const ref_cloth = useRef(null)
    const ref_city = useRef(null)

    //
    const mounted = useMounted();

    //
    useEffect(() => {
        document.title = 'Home';
        getAPIWhenCDM();
    }, []);

    //
    function getAPIWhenCDM() {
        observeToDo(ref_phone.current, getPhones, 0)
        observeToDo(ref_cloth.current, getClothes, 0)
        observeToDo(ref_city.current, getCities, 0)
    }

    /* ----------------- GET API ------------------ */

    //
    async function getAPI_Common(API_GetData, params, callback) {
        try {
            const res = await API_GetData(params);
            mounted && callback(res.data.data);
        } catch (e) {
            console.log(e);
        }
    }

    // phone
    function getPhones() {
        getAPI_Common(
            API_PhoneLaptop_L,
            {
                page: 1,
                size: 10,
                is_hot: 1,
                pk: -1,
                type_product: '',
                gte_price: 0,
                lte_price: 100000000,
                in_stock: '',
            },
            (data) => setPhones(data)
        );
    }

    // cloth
    function getClothes() {
        getAPI_Common(API_FashionProduct_L, { page: 1, size: 10 }, (data) =>
            setClothes(data)
        );
    }

    // city
    function getCities() {
        getAPI_Common(API_City_L, { page: 1, size: 10 }, (data) =>
            setCities(data)
        );
    }

    //
    return (
        <div className="Home">
            <div ref={ref_phone} className="Home_products">
                <div className="Home_products_contain box-shadow-1 brs-5px">
                    <div className="Home_phone_title App_title">
                        <Link
                            to="/phone-laptop"
                            className="Home__main_link"
                            title="See more phones laptops"
                        >
                            Phone-Laptop
                        </Link>
                    </div>
                    <div className="Home_products_row">
                        {phones.map((item, index) => (
                            <div
                                key={`phone_${index}`}
                                className="Home_products_item"
                            >
                                <ProductItem
                                    link={'/phone-laptop:' + item.id}
                                    index={index}
                                    img={item.url}
                                    name={item.name}
                                    in_stock={item.in_stock}
                                    new_price={item.new_price}
                                    old_price={item.old_price}
                                    discount={item.discount}
                                    installment={item.installment}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* clothes */}
            <div ref={ref_cloth} className="Home_products">
                <div className="Home_products_contain box-shadow-1 brs-5px">
                    <div className="Home_cloth_title App_title">
                        <Link
                            to="/fashion"
                            className="Home__main_link"
                            title="See more products in shopping"
                        >
                            Shopping
                        </Link>
                    </div>
                    <div className="Home_products_row">
                        {clothes.map((item, index) => (
                            <div
                                key={`clothes_${index}`}
                                className="Home_products_item"
                            >
                                <ProductItem
                                    link={'/fashion:' + item.id}
                                    index={index}
                                    img={
                                        item.vid_pics
                                            ? item.vid_pics[0].vid_pic
                                            : undefined
                                    }
                                    name={item.name}
                                    new_price={item.new_price}
                                    old_price={item.old_price}
                                    discount={item.discount}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* city */}
            <div ref={ref_city} className="Home_products">
                <div className="Home_products_contain box-shadow-1 brs-5px">
                    <div className="Home_city_title App_title">
                        <Link
                            to="/city-street"
                            className="Home__main_link"
                            title="See more cities"
                        >
                            City
                        </Link>
                    </div>
                    <div className="Home_products_row">
                        {cities.map((item, index) => (
                            <div
                                key={`city_${index}`}
                                className="Home_products_item"
                            >
                                <ProductItem
                                    link={'/city-street'}
                                    img={item.image}
                                    name={item.city}
                                    index={index}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
