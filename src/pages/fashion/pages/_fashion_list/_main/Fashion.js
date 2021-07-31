import React, { useEffect, useRef, useState } from 'react';
//
import { API_FashionHotImage_L } from '../../../../../api/api_django_no_token/fashion/APIFashionNoToken';
//
import FashionBC from '../../../components/banner/banner_carousel/_main/FashionBC';
import FashionLN from '../../../components/banner/list_names/FashionLN';
import FashionCtg from '../../../components/categories/FashionCtg';
import FashionH from '../../../components/head/_main/FashionH';
import FashionBody from '../body/FashionBody';
//
import image_loading from '../../../../../../image/image_loading.svg';
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

                <div>
                    <FashionBody />
                </div>
            </div>
        </div>
    );
}

export default Fashion;
