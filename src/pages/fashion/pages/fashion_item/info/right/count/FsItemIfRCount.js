import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { context_fashion_item } from '../../../../../../../_context/fashion/item/context_fashion_item';
//
import { useNewCount } from '../../../../../../../_hooks/useCount';
//
import CountDownUpDiv from '../../../../../../../component/some_div/count_down_up_div/CountDownUpDiv';
//
import './FsItemIfRCount.scss';

//
FsItemIfRCount.propTypes = {};

//
function FsItemIfRCount({}) {
    //
    const {
        item_info,
        wait_add_cart,
        c_quantity,
        c_total_add_cart,

        count,
        countUp,
        countDown,
        beforeCountNum,
        countNum,
        countNumDone,
    } = useContext(context_fashion_item);

    const max = c_quantity - c_total_add_cart;
    const disabled = max == 0 || wait_add_cart;

    //
    return (
        <div className="FsItemIfRCount">
            <div className="display-flex align-items-center">
                <div className="fashion-item-label">
                    <span className="text-third">Số Lượng</span>
                </div>

                <div>
                    <CountDownUpDiv
                        disabled={disabled}
                        count={count}
                        max={max}
                        min={max > 0 ? 1 : 0}
                        //
                        countDown={countDown}
                        countUp={countUp}
                        beforeCountNum={beforeCountNum}
                        countNum={countNum}
                        countNumDone={countNumDone}
                    />
                </div>

                <div className="margin-left-5px">
                    <div className="text-third">{max} sản phẩm có sẵn</div>

                    <div className="text-red text-align-center">
                        ({c_total_add_cart} trong giỏ)
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FsItemIfRCount;
