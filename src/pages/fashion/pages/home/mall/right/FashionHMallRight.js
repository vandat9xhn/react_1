import React from 'react';
import PropTypes from 'prop-types';
//
import {
    CLASS_PC_OR_MOBILE,
    IS_MOBILE,
} from '../../../../../../_constant/Constant';
//
import FashionMallItem from '../../../../components/mall_item/FashionMallItem';
import FashionSeeMoreLastRow from '../../../../components/see_more/last_row/FashionSeeMoreLastRow';

//
FashionHMallRight.propTypes = {};

//
function FashionHMallRight({ ref_scroll_elm, data_arr }) {
    //
    return (
        <div
            ref={ref_scroll_elm}
            className="wh-100 overflow-x-auto scroll-height-0"
        >
            <ul className="display-flex h-100per list-none">
                {Array(Math.ceil(data_arr.length / 2))
                    .fill(0)
                    .map((_, ix) => (
                        <li
                            key={`${ix}`}
                            className={`FashionHomeMall_col display-flex FashionHomeMall_col${CLASS_PC_OR_MOBILE} `}
                        >
                            <div
                                className={`FashionHomeMall_item padding-4px FashionHomeMall_item${CLASS_PC_OR_MOBILE}`}
                            >
                                <FashionMallItem
                                    link_to={`/fashion/mall?shop_id=${data_arr[ix].shop_id}`}
                                    promo_text={data_arr[ix].promo_text}
                                    image={data_arr[ix].image}
                                />
                            </div>

                            <div
                                className={`FashionHomeMall_item padding-4px FashionHomeMall_item${CLASS_PC_OR_MOBILE}`}
                            >
                                {ix + 1 <= data_arr.length ? (
                                    <FashionMallItem
                                        link_to={`/fashion/mall?shop_id=${
                                            data_arr[ix + 1].shop_id
                                        }`}
                                        promo_text={data_arr[ix + 1].promo_text}
                                        image={data_arr[ix + 1].image}
                                    />
                                ) : null}
                            </div>
                        </li>
                    ))}

                {IS_MOBILE ? (
                    <div
                        className={`FashionHomeMall_item padding-4px flex-shrink-0 FashionHomeMall_item${CLASS_PC_OR_MOBILE}`}
                    >
                        <FashionSeeMoreLastRow
                            link_to="/fashion/top_search"
                            title="Xem tất cả"
                        />
                    </div>
                ) : null}
            </ul>
        </div>
    );
}

export default FashionHMallRight;
