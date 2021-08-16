import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_Product_L } from '../../../../../_handle_api/fashion/FashionHandleAPI';
//
import observeToDo from '../../../../../_some_function/observerToDo';
//
import { useDataShowMore } from '../../../../../_hooks/useDataShowMore';
//
import ScreenBlurShowMore from '../../../../../component/_screen/components/part/foot/ScreenBlurShowMore';
import ButtonRipple from '../../../../../component/button/button_ripple/ButtonRipple';
import WaitingBall from '../../../../../component/waiting/waiting_ball/WaitingBall';
//
import FashionFaceItem from '../../../components/face_item/_main/FashionFaceItem';
//
import './FashionBody.scss';

//
FashionBody.propTypes = {};

//
function FashionBody(props) {
    //
    const ref_product_elm = useRef(true);
    const ref_type_product = useRef('suggested');

    //
    const { data_state, getData_API, refreshData_API } = useDataShowMore({
        handle_API_L: (c_count) =>
            handle_API_Product_L(c_count, ref_type_product.current),
    });

    //
    const { data_arr, count, has_fetched, is_fetching } = data_state;

    //
    useEffect(() => {
        observeToDo(ref_product_elm.current, getData_API, 0);
    }, []);

    //
    function handleShowMore() {
        getData_API();
    }

    //
    function handleGetAPISuggested() {
        if (ref_type_product.current == 'suggested') {
            return;
        }

        ref_type_product.current = 'suggested';
        refreshData_API();
    }

    //
    function handleGetAPICoinsBack() {
        if (ref_type_product.current == 'coins_back') {
            return;
        }

        ref_type_product.current = 'coins_back';
        refreshData_API();
    }

    //
    return (
        <div className="FashionBody" ref={ref_product_elm}>
            <div className="FashionBody_title padding-8px bg-primary">
                <div className="display-flex">
                    <h2
                        className={`padding-8px font-16px label-field cursor-pointer ${
                            ref_type_product.current == 'suggested'
                                ? 'FashionBody_title_item-active'
                                : ''
                        }`}
                        onClick={handleGetAPISuggested}
                    >
                        <span className="color-fashion">GỢI Ý HÔM NAY</span>
                    </h2>

                    <h2
                        className={`padding-8px font-16px label-field cursor-pointer ${
                            ref_type_product.current == 'coins_back'
                                ? 'FashionBody_title_item-active'
                                : ''
                        }`}
                        onClick={handleGetAPICoinsBack}
                    >
                        <span className="color-fashion">HOÀN XU</span>
                    </h2>
                </div>
            </div>

            <div>
                <ul className="FashionBody_list display-flex justify-content-center flex-wrap margin-auto  list-none">
                    {data_arr.map((item, ix) => (
                        <li
                            key={`${item.id}`}
                            className="FashionBody_item padding-5px"
                        >
                            <FashionFaceItem
                                id={item.id}
                                img={item.vid_pics[0].vid_pic}
                                mall_like={item.mall_like ? '' : ''}
                                flash_img={item.flash_img}
                                discount={item.discount}
                                name={item.name}
                                shop_discount={item.shop_discount}
                                tag_arr={item.tag_arr}
                                old_price={item.old_price}
                                new_price={item.new_price}
                                rate_avg={item.rate_avg}
                                sold={item.sold}
                                address={item.address}
                            />
                        </li>
                    ))}
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

            {has_fetched ? null : <div className="h-100vh"></div>}
        </div>
    );
}

export default FashionBody;
