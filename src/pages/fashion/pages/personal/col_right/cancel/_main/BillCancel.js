import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { API_FashionCancelProduct_L } from '../../../../../../../api/api_django/fashion/APIFashionToken';
//
import CircleLoading from '../../../../../../../component/waiting/circle_loading/CircleLoading';
import ScreenBlurShowMore from '../../../../../../../component/_screen/components/part/foot/ScreenBlurShowMore';
//
import { params_cancel } from '../../../../../__params/home/FashionParams';
//
import './BillCancel.scss';
//
import CancelItem from '../Cancel_item/CancelItem';

//
CancelBuying.propTypes = {};

//
function CancelBuying(props) {
    const [cancel_state, setCancelState] = useState({
        products: [],
        count_product: 0,
        is_fetching: false,
        has_fetched: false,
    });

    const { products, count_product, is_fetching, has_fetched } = cancel_state;

    //
    useEffect(() => {
        getData_API_Cancel();
    }, []);

    //
    async function getData_API_Cancel() {
        setCancelState({
            ...cancel_state,
            is_fetching: true,
        });
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

        setCancelState({
            products: has_fetched
                ? [...products, ...res.data.data]
                : res.data.data,
            count_product: has_fetched ? count_product : res.data.count,
            is_fetching: false,
            has_fetched: true,
        });
    }

    //
    return (
        <div>
            <div>
                <h2 className="margin-0 text-align-center text-secondary">
                    Cancel
                </h2>
                <br />

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
                            ? 'margin-0 text-align-center text-secondary'
                            : 'display-none'
                    }
                >
                    No BILL
                </div>
            </div>
        </div>
    );
}

export default CancelBuying;
