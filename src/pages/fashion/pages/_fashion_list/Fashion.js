import React, { Component } from 'react';
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

// class
class Fashion extends Component {
    state = {
        list: [],
        hot_images: [],
        has_fetched: false,
        is_fetching: false,
        count: 0,
    };

    componentDidMount() {
        document.title = 'Fashion';
        this.mounted = true;
        // get api
        this.getListHotImage();
        this.getListProductFashion();
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    /* -------------------- GET API ------------------------ */

    //
    getListHotImage = async () => {
        const res = await API_FashionHotImage_L();
        console.log(res.data);
        const hot_images = res.data.map((item) => item.vid_pic);
        //
        this.setState({
            hot_images: [
                hot_images[hot_images.length - 1],
                ...hot_images,
                hot_images[0],
            ],
            has_fetched: this.state.list.length ? true : false,
        });
    };

    //
    getListProductFashion = async () => {
        const { count, list, has_fetched } = this.state;
        const c_count = list.length;
        //
        if (has_fetched && count <= c_count) {
            return;
        }
        //
        has_fetched &&
            this.setState({
                is_fetching: true,
            });
        //
        try {
            const res = await API_FashionProduct_L({
                page: 1,
                size: 20,
                c_count: c_count,
            });
            //
            if (this.mounted) {
                list.push(...res.data.data);
                this.setState({
                    is_fetching: false,
                    count: has_fetched ? count : res.data.count,
                    has_fetched: this.state.hot_images.length ? true : false,
                });
            }
            //
        } catch (e) {
            console.log(e);
        }
    };

    // render
    render() {
        const { is_fetching, has_fetched, list, hot_images, count } =
            this.state;

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
                                    has_fetched
                                        ? hot_images
                                        : Array(4).fill(image_loading)
                                }
                            />
                        </div>

                        <div className="Fashion_banner">
                            <FashionLN />

                            <FashionCtg />
                        </div>
                    </div>
                    <hr className="App_hr-bg" />

                    <div>
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
                        handleShowMore={this.getListProductFashion}
                        FetchingComponent={WaitingBall}
                    />
                </div>
            </div>
        );
    }
}

export default Fashion;
