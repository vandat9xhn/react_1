import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { context_fashion_item } from '../../../../../../_context/fashion/item/context_fashion_item';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
// 
import { handle_API_FsProduct_L } from '../../../../../../_handle_api/fashion/FashionHandleAPI';
//
import { useDataShowMore } from '../../../../../../_hooks/useDataShowMore';
//
import FsShopDealLabel from '../../../../components/shop_deal_label/FsShopDealLabel';
import FashionSeeMoreOnTitle from '../../../../components/see_more/on_title/FashionSeeMoreOnTitle';
import FsIComboItem from '../../../../components/combo_item/FsComboItem';
//
import './FsICombo.scss';

//
FsICombo.propTypes = {};

//
function FsICombo(props) {
    //
    const { item_info } = useContext(context_fashion_item);

    //
    const { data_state, getData_API } = useDataShowMore({
        initial_arr: [],
        handle_API_L: (c_count) =>
            handle_API_FsProduct_L(c_count, 'shop_deal', {
                product_id: item_info.id,
            }),
    });

    const { data_arr } = data_state;

    //
    useEffect(() => {
        getData_API();
    }, []);

    //
    return (
        <div className="FsICombo bg-primary">
            <div className="flex-between-center">
                <div className="display-flex align-items-center">
                    <h2
                        className={`font-18px text-secondary font-500 margin-right-5px ${
                            IS_MOBILE ? 'display-none' : ''
                        }`}
                    >
                        Combo khuyến mãi
                    </h2>

                    <div>
                        <FsShopDealLabel
                            label={item_info.bundle_deal_info.label}
                            class_main={
                                IS_MOBILE ? 'FsICombo_deal_label-mb' : undefined
                            }
                        />
                    </div>
                </div>

                <div>
                    <FashionSeeMoreOnTitle
                        link_to={`/fashion/combo?id=${item_info.bundle_deal_info.id}`}
                        title="Xem thêm"
                    />
                </div>
            </div>

            <div className="FsICombo_contain overflow-x-auto">
                <ul className="FsICombo_row flex-between-center list-none">
                    {data_arr.slice(0, 6).map((item) => (
                        <li
                            key={item.id}
                            className="FsICombo_item flex-shrink-0"
                        >
                            <FsIComboItem
                                id={item.id}
                                is_like={item.is_like}is_plus={item.is_plus}is_mall={item.is_mall}
                                img={item.img}
                                name={item.name}
                                old_price={item.old_price}
                                new_price={item.new_price}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default FsICombo;
