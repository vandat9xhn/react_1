import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import observeToDo from '../../../../../../_some_function/observerToDo';
//
import { handle_API_FsProduct_L } from '../../../../../../_handle_api/fashion/FashionHandleAPI';
//
import { useMultiPages } from '../../../../../../_hooks/useMultiPages';
//
import Pagination from '../../../../../../component/pagination/_main/Pagination';
import FetchingDiv from '../../../../../../component/some_div/fetching/FetchingDiv';
//
import FashionFaceItem from '../../../../components/face_item/_main/FashionFaceItem';
//
import './FsCISearch.scss';

//
FsCISearch.propTypes = {};

//
function FsCISearch({ product_id }) {
    //
    const ref_main_elm = useRef(null);

    //
    const { state_obj, getData_API, handleChangePage } = useMultiPages({
        initial_page: 1,
        handle_API_L: () =>
            handle_API_FsProduct_L(0, 'same_product', {
                product_id: product_id,
                size: 6,
            }),
    });

    const { page_obj, pages, page, is_fetching, has_fetched } = state_obj;

    //
    useEffect(() => {
        observeToDo({
            elm: ref_main_elm.current,
            callback: getData_API,
        });
    }, []);

    //
    return (
        <div ref={ref_main_elm} className="FsCISearch padding-16px bg-primary">
            <div>
                <ul className="display-flex space-between list-none">
                    {page_obj[page].slice(0, 6).map((item) => (
                        <li key={item.id} className="FsCISearch_item">
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
                                use_same={false}
                            />
                        </li>
                    ))}
                </ul>
            </div>

            <div
                className={`${
                    is_fetching ? 'FsCISearch_fetching display-flex-center' : ''
                }`}
            >
                <FetchingDiv is_fetching={is_fetching} />
            </div>

            <div className={`${has_fetched ? '' : 'display-none'}`}>
                <Pagination
                    count={pages}
                    num_side_center={2}
                    current={page}
                    is_fetching={is_fetching}
                    handleChangePage={handleChangePage}
                />
            </div>
        </div>
    );
}

export default FsCISearch;
