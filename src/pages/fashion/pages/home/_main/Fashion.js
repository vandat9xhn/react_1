import React, { useEffect, useRef, useState } from 'react';
//
import { data_fashion_application_arr } from '../../../../../_data/fashion/application';
//
import { API_FashionHotImage_L } from '../../../../../api/api_django_no_token/fashion/APIFashionNoToken';
//
import VirtualScroll from '../../../../../component/virtual_scroll/VirtualScroll';
//
import FashionBC from '../../../components/banner/banner_carousel/_main/FashionBC';
import FashionH from '../../../components/head/_main/FashionH';
import FashionBody from '../body/FashionBody';
import FashionHomeSelling from '../selling/FashionHomeSelling';
import FashionApplication from '../../../components/application/_main/FashionApplication';
import FashionCtg from '../categories/_main/FashionCtg';
import FashionHomeFlashSale from '../flash_sale/FashionHomeFlashSale';
import FashionHomeTrend from '../trend/FashionHomeTrend';
import FashionHomeTopSearch from '../top_search/FashionHomeTopSearch';
import FashionHomeMall from '../mall/_main/FashionHomeMall';
//
import fashion_home_new from '../../../../../../image/fashion_home_new.jpg';
import image_loading from '../../../../../../image/image_loading.svg';
import mov_bbb from '../../../../../../_video/mov_bbb.mp4';
import './Fashion.scss';

//
function Fashion(props) {
    //
    const [fashion_state, setFashionState] = useState({
        hot_images: [],
        has_fetched_hot: false,
    });

    const { hot_images, has_fetched_hot } = fashion_state;

    //
    const mounted = useRef(true);

    //
    useEffect(() => {
        document.title = 'Fashion';

        getData_API_HotImage();

        return () => {
            mounted.current = false;
        };
    }, []);

    /* ------------ GET API ----------- */

    //
    async function getData_API_HotImage() {
        const res = await API_FashionHotImage_L();
        const hot_images = res.data.map((item) => item.vid_pic);

        mounted &&
            setFashionState((fashion_state) => ({
                ...fashion_state,
                hot_images: [
                    hot_images[hot_images.length - 1],
                    ...hot_images.slice(0, hot_images.length - 2),
                    mov_bbb,
                    hot_images[hot_images.length - 1],
                    hot_images[0],
                ],
                has_fetched_hot: true,
            }));
    }

    return (
        <div className="Fashion font-for-fashion">
            <FashionH />

            <div className="Fashion_banner bg-primary margin-bottom-16px">
                <VirtualScroll>
                    <div className="fashion-width">
                        <FashionBC
                            images={
                                has_fetched_hot
                                    ? hot_images
                                    : Array(3).fill(image_loading)
                            }
                            has_fetched={has_fetched_hot}
                        />

                        <FashionApplication
                            application_arr={data_fashion_application_arr}
                        />
                    </div>
                </VirtualScroll>
            </div>

            <div className="fashion-width">
                <div className="margin-bottom-16px">
                    <VirtualScroll>
                        <img
                            className="w-100per"
                            src={fashion_home_new}
                            alt=""
                        />
                    </VirtualScroll>
                </div>

                <div className="margin-bottom-16px">
                    <VirtualScroll>
                        <FashionHomeSelling />
                    </VirtualScroll>
                </div>

                <div className="margin-bottom-16px">
                    <VirtualScroll>
                        <FashionCtg />
                    </VirtualScroll>
                </div>

                <div className="margin-bottom-16px">
                    <VirtualScroll>
                        <FashionHomeFlashSale />
                    </VirtualScroll>
                </div>

                <div className="margin-bottom-16px">
                    <VirtualScroll>
                        <FashionHomeMall />
                    </VirtualScroll>
                </div>

                <div className="margin-bottom-16px">
                    <VirtualScroll>
                        <FashionHomeTrend />
                    </VirtualScroll>
                </div>

                <div className="margin-bottom-16px">
                    <VirtualScroll>
                        <FashionHomeTopSearch />
                    </VirtualScroll>
                </div>

                <div className="margin-bottom-16px">
                    <VirtualScroll>
                        <FashionBody />
                    </VirtualScroll>
                </div>
            </div>
        </div>
    );
}

export default Fashion;
