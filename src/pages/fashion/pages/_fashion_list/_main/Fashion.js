import React, { useEffect, useRef, useState } from 'react';
//
import { data_fashion_application_arr } from '../../../../../_data/fashion/application';
// 
import { API_FashionHotImage_L } from '../../../../../api/api_django_no_token/fashion/APIFashionNoToken';
//
import FashionBC from '../../../components/banner/banner_carousel/_main/FashionBC';
import FashionH from '../../../components/head/_main/FashionH';
import FashionBody from '../body/FashionBody';
import FashionHomeSelling from '../selling/FashionHomeSelling';
import FashionApplication from '../../../components/application/_main/FashionApplication';
// 
import fashion_home_new from '../../../../../../image/fashion_home_new.jpg';
import image_loading from '../../../../../../image/image_loading.svg';
import './Fashion.scss';
import FashionCtg from '../../../components/categories/_main/FashionCtg';
import FashionHomeFlashSale from '../flash_sale/FashionHomeFlashSale';
import FashionHomeTrend from '../trend/FashionHomeTrend';

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
                    ...hot_images,
                    hot_images[0],
                ],
                has_fetched_hot: true,
            }));
    }

    return (
        <div className="Fashion">
            <div className="Fashion_head">
                <FashionH />
            </div>

            <div className="Fashion_banner bg-primary margin-bottom-1rem">
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
            </div>

            <div className="fashion-width">
                <div className="margin-bottom-1rem">
                    <img className="w-100per" src={fashion_home_new} alt="" />
                </div>

                <div className="margin-bottom-1rem">
                    <FashionHomeSelling />
                </div>

                <div className="margin-bottom-1rem">
                    <FashionCtg />
                </div>

                <div className="margin-bottom-1rem">
                    <FashionHomeFlashSale />
                </div>

                {/* <div className="margin-bottom-1rem">
                    <FashionHomeTrend/>
                </div> */}

                <div className="margin-bottom-1rem">
                    <FashionBody />
                </div>
            </div>
        </div>
    );
}

export default Fashion;
