import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import flash_sale from '../../../../../../image/flash_sale.png';
import './FashionHomeFlashSale.scss';
import FashionFlashSaleItem from '../../../components/flash_sale_item/FashionFlashSaleItem';
import { useDataShowMore } from '../../../../../_hooks/useDataShowMore';
import { handle_API_Product_L } from '../../../../../_handle_api/fashion/FashionHandleAPI';
import observeToDo from '../../../../../_some_function/observerToDo';

//
FashionHomeFlashSale.propTypes = {};

//
function FashionHomeFlashSale(props) {
    //
    const ref_main_elm = useRef(true);

    //
    const { data_state, getData_API } = useDataShowMore({
        handle_API_L: (c_count) => handle_API_Product_L(c_count, 'flash_sale'),
    });

    const { data_arr, count, has_fetched, is_fetching } = data_state;

    //
    useEffect(() => {
        observeToDo(ref_main_elm.current, getData_API, 0);
    }, []);

    //
    return (
        <div ref={ref_main_elm} className="FashionHomeFlashSale bg-primary">
            <div className="FashionHomeFlashSale_head">
                <div className="display-flex">
                    <div
                        className="FashionHomeFlashSale_title"
                        style={{ backgroundImage: `url(${flash_sale})` }}
                    ></div>

                    <div></div>
                </div>
            </div>

            <div className="overflow-x-auto">
                <ul className="display-flex list-none">
                    {data_arr.slice(0, 6).map((item, ix) => (
                        <li key={item.id} className="FashionHomeFlashSale_item">
                            <FashionFlashSaleItem
                                id={item.id}
                                img={item.vid_pics[0].vid_pic}
                                flash_img={item.flash_img}
                                price={item.new_price}
                                sold={item.sold}
                                total={item.total}
                                discount={item.discount}
                            />
                        </li>
                    ))}
                </ul>
            </div>

            {has_fetched ? null : (
                <div className="FashionHomeFlashSale_not_fetched"></div>
            )}
        </div>
    );
}

export default FashionHomeFlashSale;
