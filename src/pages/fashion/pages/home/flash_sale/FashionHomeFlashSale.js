import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import observeToDo from '../../../../../_some_function/observerToDo';
//
import { handle_API_Product_L } from '../../../../../_handle_api/fashion/FashionHandleAPI';
//
import { useDataShowMore } from '../../../../../_hooks/useDataShowMore';
//
import FashionSeeMoreLastRow from '../../../components/see_more/last_row/FashionSeeMoreLastRow';
import FashionSeeMoreOnTitle from '../../../components/see_more/on_title/FashionSeeMoreOnTitle';
import FashionFlashSaleItem from '../../../components/flash_sale_item/FashionFlashSaleItem';
//
import flash_sale from '../../../../../../image/flash_sale.png';
import './FashionHomeFlashSale.scss';

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
        observeToDo({ elm: ref_main_elm.current, callback: getData_API });
    }, []);

    //
    return (
        <div ref={ref_main_elm} className="FashionHomeFlashSale bg-primary">
            <div className="FashionHomeFlashSale_head fashion-head-padding">
                <div className="flex-between-center">
                    <div
                        className="FashionHomeFlashSale_title"
                        style={{ backgroundImage: `url(${flash_sale})` }}
                    ></div>

                    <FashionSeeMoreOnTitle
                        link_to="/fashion/selling"
                        title="Xem tất cả"
                        class_color={
                            IS_MOBILE ? 'text-secondary' : 'color-fashion'
                        }
                    />
                </div>
            </div>

            <div className="overflow-x-auto">
                <ul className="display-flex list-none">
                    {data_arr.slice(0, 6).map((item, ix) => (
                        <li key={item.id} className="FashionHomeFlashSale_item">
                            <FashionFlashSaleItem
                                id={item.id}
                                img={item.img}
                                flash_img={item.flash_img}
                                price={item.new_price}
                                sold={item.sold}
                                total={item.total}
                                discount={item.discount}
                            />
                        </li>
                    ))}

                    {IS_MOBILE ? (
                        <li className="FashionHomeFlashSale_item">
                            <FashionSeeMoreLastRow
                                link_to="/fashion/selling"
                                title="Xem tất cả"
                            />
                        </li>
                    ) : null}
                </ul>
            </div>

            {has_fetched ? null : (
                <div className="FashionHomeFlashSale_not_fetched"></div>
            )}
        </div>
    );
}

export default FashionHomeFlashSale;
