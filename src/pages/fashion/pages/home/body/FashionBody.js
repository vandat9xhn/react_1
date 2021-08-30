import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import { handle_API_Product_L } from '../../../../../_handle_api/fashion/FashionHandleAPI';
//
import observeToDo from '../../../../../_some_function/observerToDo';
//
import { useMultiDataKey } from '../../../../../_hooks/useMultiDataKey';
//
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

    //
    const { state_obj, getData_API, handleChangeKey } = useMultiDataKey({
        handle_API_L: (new_key, c_count) =>
            handle_API_Product_L(c_count, new_key),
        initial_key: 'suggested',
    });

    //
    const { obj, c_key } = state_obj;

    //
    useEffect(() => {
        observeToDo({
            elm: ref_product_elm.current,
            callback: () => getData_API(c_key),
        });
    }, []);

    //
    function handleGetAPISuggested() {
        handleChangeKey('suggested');
    }

    //
    function handleGetAPICoinsBack() {
        handleChangeKey('coins_back');
    }

    //
    return (
        <div className="FashionBody" ref={ref_product_elm}>
            <div className="FashionBody_title fashion-head-padding bg-primary">
                <div className="display-flex">
                    <h2
                        className={`padding-x-8px font-16px label-field cursor-pointer ${
                            c_key == 'suggested'
                                ? 'FashionBody_title_item-active'
                                : ''
                        }`}
                        onClick={handleGetAPISuggested}
                    >
                        <span className="color-fashion">GỢI Ý HÔM NAY</span>
                    </h2>

                    <h2
                        className={`padding-x-8px font-16px label-field cursor-pointer ${
                            c_key == 'coins_back'
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
                    {obj[c_key].data_arr.map((item, ix) => (
                        <li
                            key={`${item.id}`}
                            className="FashionBody_item padding-5px"
                        >
                            <FashionFaceItem
                                id={item.id}
                                img={item.img}
                                is_like={item.is_like}is_plus={item.is_plus}is_mall={item.is_mall}
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
                                show_address={false}
                                show_sold={false}
                            />
                        </li>
                    ))}
                </ul>

                <br />
            </div>

            {obj[c_key].has_fetched ? null : <div className="h-100vh"></div>}

            <Link to={`/fashion/${c_key}?page=2`} className="normal-text">
                <div className="FashionBody_more margin-auto padding-8px hv-bg-blur text-align-center">
                    <span className="text-secondary">Xem thêm</span>
                </div>
            </Link>
        </div>
    );
}

export default FashionBody;
