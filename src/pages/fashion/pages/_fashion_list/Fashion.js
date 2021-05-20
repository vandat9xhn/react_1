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
                                        : [
                                              image_loading,
                                              image_loading,
                                              image_loading,
                                          ]
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
                                : new Array(5).fill({ vid_pics: [] })
                            ).map((item, index) => {
                                const {
                                    id,
                                    vid_pics,
                                    name,
                                    new_price,
                                    old_price,
                                } = item;
                                return (
                                    <li key={index} className="Fashion__item">
                                        <ProductItem
                                            link={'/fashion:' + id}
                                            img={
                                                vid_pics.length
                                                    ? vid_pics[0].vid_pic
                                                    : undefined
                                            }
                                            name={name}
                                            new_price={new_price}
                                            old_price={old_price}
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <br />

                    {/* waiting and get more */}
                    <div
                        className={
                            count > list.length && has_fetched
                                ? 'Fashion_more'
                                : 'display-none'
                        }
                    >
                        <WaitingBall is_animate={is_fetching} />
                        <ButtonRipple
                            disabled={is_fetching}
                            onClick={this.getListProductFashion}
                            ripple_type="center"
                        >
                            More product...
                        </ButtonRipple>
                    </div>
                    <br />
                </div>
            </div>
        );
    }
}

export default Fashion;
