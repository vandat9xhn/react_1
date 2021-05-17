import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { API_FashionCancelProduct_L } from '../../../../../../../api/api_django/fashion/APIFashionToken';
// 
import CircleLoading from '../../../../../../../component/waiting/circle_loading/CircleLoading';
import ScreenBlurShowMore from '../../../../../../../component/_screen_blur/_component/foot/ScreenBlurShowMore';
//
import CancelItem from '../Cancel_item/CancelItem';
import { params_cancel } from '../../../../../_params/FashionParams';
// 
import './BillCancel.scss';

//
CancelBuying.propTypes = {};

//
function CancelBuying(props) {
    const [products, setProducts] = useState([]);
    const [count_product, setCountProduct] = useState(0);
    const [is_fetching, setIsFetching] = useState(false);
    const [has_fetched, setHasFetched] = useState(false);

    //
    useEffect(() => {
        getData_API_Cancel();
    }, []);

    //
    async function getData_API_Cancel() {
        setIsFetching(true);
        //
        const params = {
            page: 1,
            size: 5,
            c_count: products.length,
        };
        //
        const res = await API_FashionCancelProduct_L({
            ...params,
            ...params_cancel,
        });
        products.push(...res.data.data);
        //
        setIsFetching(false);
        if (!has_fetched) {
            setCountProduct(5);
            setHasFetched(true);
        }
    }

    //
    return (
        <div>
            <div>
                <div>
                    <div className="fashion_title fashion_center fashion_border-bottom">
                        Cancel
                    </div><br/>

                    <div className="BillCancel_product">
                        {products.map((cancel_product, ix) => (
                            <CancelItem
                                key={`CancelBuying_item_${ix}`}
                                cancel_product={cancel_product}
                            />
                        ))}
                    </div>

                    <div className="width-fit-content margin-auto">
                        <ScreenBlurShowMore
                            title="Show more"
                            is_show_more={count_product > products.length}
                            is_fetching={is_fetching}
                            //
                            handleShowMore={getData_API_Cancel}
                            FetchingComponent={CircleLoading}
                        />
                    </div>

                    <div
                        className={
                            has_fetched && products.length == 0
                                ? 'fashion_title fashion_center fashion_border-bottom'
                                : 'display-none'
                        }
                    >
                        No BILL
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CancelBuying;
