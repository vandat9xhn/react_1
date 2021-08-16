import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import { handle_API_Product_L } from '../../../../../_handle_api/fashion/FashionHandleAPI';
//
import { useDataShowMore } from '../../../../../_hooks/useDataShowMore';
import { useScrollToX } from '../../../../../_hooks/useScrollToX';
//
import FashionSellingProduct from '../../../components/selling_product/_main/FashionSellingProduct';
//
import fashion_month_top from '../../../../../../image/fashion_month_top.jpg';
import fashion_month_body from '../../../../../../image/fashion_month_body.jpg';
import fashion_month_foot from '../../../../../../image/fashion_month_foot.jpg';
import observeToDo from '../../../../../_some_function/observerToDo';
import NextPrevDiv from '../../../../../component/some_div/next_prev_div/NextPrevDiv';
//
import './FashionHomeSelling.scss';

//
FashionHomeSelling.propTypes = {};

//
function FashionHomeSelling(props) {
    //
    const ref_product_elm = useRef(true);
    const ref_scroll_elm = useRef(true);

    //
    const { data_state, getData_API } = useDataShowMore({
        handle_API_L: (c_count) => handle_API_Product_L(c_count, ''),
    });

    const { data_arr, count, has_fetched, is_fetching } = data_state;

    //
    const { is_has_next, is_has_prev, handleNext, handlePrev, hasNextPrev } =
        useScrollToX(ref_scroll_elm);

    //
    useEffect(() => {
        observeToDo(
            ref_product_elm.current,
            () =>
                getData_API({
                    handleWhenFinally: handleWhenFinally,
                }),
            0
        );
    }, []);

    //
    function handleWhenFinally() {
        !IS_MOBILE && hasNextPrev();
    }

    //
    return (
        <div ref={ref_product_elm} className="FashionHomeSelling">
            <img className="w-100per" src={fashion_month_top} alt="" />

            <div
                className="w-100per"
                style={{
                    backgroundImage: `url(${fashion_month_body})`,
                    backgroundSize: '100%',
                }}
            >
                <div className="FashionHomeSelling_contain">
                    <h2 className="FashionHomeSelling_title text-fashion-red label-field font-16px">
                        SẢN PHẨM BÁN CHẠY
                    </h2>

                    <div className="pos-rel">
                        <div
                            ref={ref_scroll_elm}
                            className="overflow-x-auto scroll-height-0"
                        >
                            <ul className="list-none display-flex">
                                {data_arr.map((item, ix) => (
                                    <li
                                        key={item.id}
                                        className="FashionHomeSelling_item"
                                    >
                                        <FashionSellingProduct
                                            img={item.vid_pics[0].vid_pic}
                                            price={item.new_price}
                                            discount={item.discount}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {IS_MOBILE ? null : (
                            <NextPrevDiv
                                is_btn_circle={true}
                                is_has_next={is_has_next}
                                is_has_prev={is_has_prev}
                                handleNext={handleNext}
                                handlePrev={handlePrev}
                            />
                        )}
                    </div>
                </div>
            </div>

            <img
                className="w-100per"
                src={fashion_month_foot}
                alt=""
                style={{ verticalAlign: 'super' }}
            />

            {has_fetched ? null : (
                <div className="FashionHomeSelling_not_fetched"></div>
            )}
        </div>
    );
}

export default FashionHomeSelling;
