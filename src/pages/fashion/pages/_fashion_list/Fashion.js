import React, { Component, useEffect, useRef, useState } from 'react';
//
import {
    API_FashionProduct_L,
    API_FashionHotImage_L,
} from '../../../../api/api_django_no_token/fashion/APIFashionNoToken';
//
import ButtonRipple from '../../../../component/button/button_ripple/ButtonRipple';
import WaitingBall from '../../../../component/waiting/waiting_ball/WaitingBall';
import ProductItem from '../../../../component/products/product_item/ProductItem';
import ScreenBlurShowMore from '../../../../component/_screen_blur/_component/foot/ScreenBlurShowMore';
//
import FashionBC from '../../components/banner/banner_carousel/_main/FashionBC';
import FashionLN from '../../components/banner/list_names/FashionLN';
import FashionCtg from '../../components/categories/FashionCtg';
import FashionH from '../../components/head/_main/FashionH';
//
import image_loading from '../../../../../image/image_loading.svg';
import './Fashion.scss';
import observeToDo from '../../../../_some_function/observerToDo';

//
function Fashion(props) {
    //
    const [fashion_state, setFashionState] = useState({
        list: [],
        count: 0,
        hot_images: [],
        has_fetched_hot: false,
        has_fetched: false,
        is_fetching: false,
    });

    const {
        list,
        count,
        has_fetched,
        is_fetching,

        hot_images,
        has_fetched_hot,
    } = fashion_state;

    //
    const mounted = useRef(true);
    const ref_product_elm = useRef(true);

    //
    useEffect(() => {
        document.title = 'Fashion';

        getData_API_HotImage();
        observeToDo(ref_product_elm.current, getData_API_Product, 0);

        return () => {
            mounted.current = false;
        };
    }, []);

    /* ------------ GET API ----------- */

    //
    async function getData_API_HotImage() {
        const res = await API_FashionHotImage_L();
        const hot_images = res.data.map((item) => item.vid_pic);

        setFashionState((fashion_state) => ({
            ...fashion_state,
            hot_images: [
                hot_images[hot_images.length - 1],
                ...hot_images,
                hot_images[0],
            ],
            has_fetched_hot: true,
        }));
    }

    //
    async function getData_API_Product() {
        try {
            setFashionState((fashion_state) => ({
                ...fashion_state,
                is_fetching: true,
            }));

            const res = await API_FashionProduct_L({
                page: 1,
                size: 20,
                c_count: list.length,
            });

            if (!mounted.current) {
                return;
            }

            setFashionState((fashion_state) => ({
                ...fashion_state,
                list: has_fetched ? [...list, ...res.data.data] : res.data.data,
                count: has_fetched ? count : res.data.count,
                is_fetching: false,
                has_fetched: true,
            }));
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="Fashion">
            <div className="Fashion_head">
                <FashionH />
            </div>

            <div className="Fashion_body">
                <div>
                    <div className="Fashion_carousel">
                        <FashionBC
                            images={
                                has_fetched_hot
                                    ? hot_images
                                    : Array(3).fill(image_loading)
                            }
                            has_fetched={has_fetched_hot}
                        />
                    </div>

                    <div className="Fashion_banner">
                        <FashionLN />

                        <FashionCtg />
                    </div>
                </div>
                <hr className="App_hr-bg" />

                <div ref={ref_product_elm}>
                    <ul className="Fashion__list">
                        {(has_fetched
                            ? list
                            : Array(5).fill({ vid_pics: [] })
                        ).map((item, ix) => (
                            <li
                                key={`Fashion_item_${item.id || ix}`}
                                className="Fashion__item"
                            >
                                <ProductItem
                                    link={`/fashion:${item.id}`}
                                    img={
                                        item.vid_pics.length
                                            ? item.vid_pics[0].vid_pic
                                            : undefined
                                    }
                                    name={item.name}
                                    new_price={item.new_price}
                                    old_price={item.old_price}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                <br />

                <ScreenBlurShowMore
                    title={
                        <ButtonRipple
                            disabled={is_fetching}
                            ripple_type="center"
                        >
                            More product...
                        </ButtonRipple>
                    }
                    is_show_more={count > list.length}
                    is_fetching={is_fetching && has_fetched}
                    handleShowMore={getData_API_Product}
                    FetchingComponent={WaitingBall}
                />
            </div>
        </div>
    );
}

export default Fashion;
