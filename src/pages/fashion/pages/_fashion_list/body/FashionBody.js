import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { API_FashionProduct_L } from '../../../../../api/api_django_no_token/fashion/APIFashionNoToken';
//
import observeToDo from '../../../../../_some_function/observerToDo';
//
import { useDataShowMore } from '../../../../../_hooks/useDataShowMore';
//
import ScreenBlurShowMore from '../../../../../component/_screen/components/part/foot/ScreenBlurShowMore';
import ButtonRipple from '../../../../../component/button/button_ripple/ButtonRipple';
import WaitingBall from '../../../../../component/waiting/waiting_ball/WaitingBall';
import ProductItem from '../../../../../component/products/product_item/ProductItem';
// 
import './FashionBody.scss'

//
FashionBody.propTypes = {};

//
function FashionBody(props) {
    //
    const ref_product_elm = useRef(true);

    //
    const { data_state, getData_API } = useDataShowMore({
        handle_API_L: handle_API_Product_L,
    });

    //
    const { data_arr, count, has_fetched, is_fetching } = data_state;

    //
    useEffect(() => {
        observeToDo(ref_product_elm.current, getData_API, 0);
    }, []);

    //
    async function handle_API_Product_L(c_count) {
        const res = await API_FashionProduct_L({
            c_count: c_count,
            page: 1,
            size: 20,
            type_request: 'home',
        });

        return res.data;
    }

    //
    function handleShowMore() {
        getData_API();
    }

    //
    return (
        <div ref={ref_product_elm}>
            <div className="FashionBody_title padding-8px bg-primary">
                <div className="display-flex">
                    <h2 className="padding-8px font-18px label-field cursor-pointer">
                        <span className="color-fashion">TO DAY</span>
                    </h2>

                    <h2 className="padding-8px font-18px label-field cursor-pointer">
                        <span className="color-fashion">COINS BACK</span>
                    </h2>
                </div>
            </div>

            <div className="bg-primary">
                <ul className="Fashion__list">
                    {(has_fetched ? data_arr : Array(5).fill({})).map(
                        (item, ix) => (
                            <li
                                key={`Fashion_item_${
                                    has_fetched ? item.id : ix
                                }`}
                                className="Fashion__item"
                            >
                                <ProductItem
                                    link={
                                        has_fetched
                                            ? `/fashion:${item.id}`
                                            : '#'
                                    }
                                    img={
                                        has_fetched
                                            ? item.vid_pics[0].vid_pic
                                            : undefined
                                    }
                                    name={item.name}
                                    new_price={item.new_price}
                                    old_price={item.old_price}
                                />
                            </li>
                        )
                    )}
                </ul>

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
                    is_show_more={count > data_arr.length}
                    is_fetching={is_fetching && has_fetched}
                    handleShowMore={handleShowMore}
                    FetchingComponent={WaitingBall}
                />
            </div>
        </div>
    );
}

export default FashionBody;
