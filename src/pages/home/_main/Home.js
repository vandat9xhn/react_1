import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
//
import { API_City_L } from '../../../api/api_django_no_token/api01/API01NoToken';
import { API_FashionProduct_L } from '../../../api/api_django_no_token/fashion/APIFashionNoToken';
import { API_PhoneLaptop_L } from '../../../api/api_django_no_token/phone_laptop/PhoneLaptopAPI';
//
import { useMounted } from '../../../_hooks/useMounted';
//
import observeToDo from '../../../_some_function/observerToDo';
//
import ComponentSkeleton from '../../../component/skeleton/component_skeleton/ComponentSkeleton';
import ProductItem from '../../../component/products/product_item/ProductItem';
import FashionFaceItem from '../../fashion/components/face_item/_main/FashionFaceItem';
//
import './Home.scss';

//
function Home() {
    //
    const [phone_arr, setPhoneArr] = useState([]);
    const [fashion_arr, setFashionArr] = useState([]);
    const [city_arr, setCityArr] = useState([]);

    //
    const ref_phone = useRef(null);
    const ref_cloth = useRef(null);
    const ref_city = useRef(null);

    //
    const mounted = useMounted();

    //
    useEffect(() => {
        document.title = 'Home';

        observeToDo({ elm: ref_phone.current, callback: getData_API_Phone });
        observeToDo({ elm: ref_cloth.current, callback: getData_API_Fashion });
        observeToDo({ elm: ref_city.current, callback: getData_API_City });
    }, []);

    /* ---------- */

    //
    async function getAPI_Common(API_GetData, params, callback) {
        try {
            const res = await API_GetData(params);
            mounted && callback(res.data.data);
        } catch (e) {
            console.log(e);
        }
    }

    /* ------------ */

    //
    function getData_API_Phone() {
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
            (data) => setPhoneArr(data)
        );
    }

    //
    function getData_API_Fashion() {
        getAPI_Common(
            API_FashionProduct_L,
            { page: 1, size: 20, type_request: 'home' },
            (data) => setFashionArr(data)
        );
    }

    //
    function getData_API_City() {
        getAPI_Common(API_City_L, { page: 1, size: 10 }, (data) =>
            setCityArr(data)
        );
    }

    //
    return (
        <div className="Home fashion-width padding-y-16px">
            <div
                ref={ref_cloth}
                className="Home_products margin-bottom-16px bg-primary box-shadow-1 brs-5px"
            >
                <h3 className="Home_title Home_title-fashion margin-bottom-16px">
                    <Link to="/fashion" className="text-white">
                        Shopping
                    </Link>
                </h3>

                <div className="Home_products_contain padding-8px">
                    <ul className="Home_products_row list-none">
                        {fashion_arr.map((item) => (
                            <li key={item.id} className="Home_fashion_item">
                                <FashionFaceItem
                                    id={item.id}
                                    img={item.img}
                                    is_like={item.is_like}
                                    is_plus={item.is_plus}
                                    is_mall={item.is_mall}
                                    flash_img={item.flash_img}
                                    discount={item.discount}
                                    name={item.name}
                                    rate_avg={item.rate_avg}
                                    sold={item.sold}
                                    //
                                    shop_deals={item.shop_deals}
                                    shop_discount={item.shop_discount}
                                    address={item.address}
                                    //
                                    old_price={item.old_price}
                                    new_price={item.new_price}
                                    old_price_max={item.old_price_max}
                                    new_price_max={item.new_price_max}
                                    //
                                    use_same={false}
                                    show_address={false}
                                />
                            </li>
                        ))}
                    </ul>

                    <ComponentSkeleton
                        num={4}
                        has_fetched={fashion_arr.length > 0}
                        component={<div className="Home_skeleton"></div>}
                    />
                </div>
            </div>

            <div
                ref={ref_phone}
                className="Home_products margin-bottom-16px bg-primary box-shadow-1 brs-5px"
            >
                <h3 className="Home_title Home_title-phone margin-bottom-16px">
                    <Link to="/phone-laptop" className="text-white">
                        Phone
                    </Link>
                </h3>

                <div className="Home_products_contain padding-8px">
                    <ul className="Home_products_row list-none">
                        {phone_arr.map((item) => (
                            <li
                                key={`${item.id}`}
                                className="Home_products_item"
                            >
                                <ProductItem
                                    link={'/phone-laptop:' + item.id}
                                    img={item.url}
                                    name={item.name}
                                    in_stock={item.in_stock}
                                    new_price={item.new_price}
                                    old_price={item.old_price}
                                    discount={item.discount}
                                    installment={item.installment}
                                />
                            </li>
                        ))}
                    </ul>

                    <ComponentSkeleton
                        num={4}
                        has_fetched={phone_arr.length > 0}
                        component={<div className="Home_skeleton"></div>}
                    />
                </div>
            </div>

            <div
                ref={ref_city}
                className="Home_products margin-bottom-16px bg-primary box-shadow-1 brs-5px"
            >
                <h3 className="Home_title Home_title-city margin-bottom-16px">
                    <Link to="/city-street" className="text-white">
                        City
                    </Link>
                </h3>

                <div className="Home_products_contain padding-8px">
                    <ul className="Home_products_row list-none">
                        {city_arr.map((item) => (
                            <div
                                key={`${item.id}`}
                                className="Home_products_item"
                            >
                                <ProductItem
                                    link={'/city-street'}
                                    img={item.image}
                                    name={item.city}
                                />
                            </div>
                        ))}
                    </ul>

                    <ComponentSkeleton
                        num={4}
                        has_fetched={city_arr.length > 0}
                        component={<div className="Home_skeleton"></div>}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
