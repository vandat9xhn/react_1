import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { context_fashion_item } from '../../../../../../../_context/fashion/item/context_fashion_item';
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
        wait_add_cart,
        c_total_add_cart,
        count,
        max,
        min,

        countUp,
        countDown,
        beforeCountNum,
        countNum,
        countNumDone,
    } = useContext(context_fashion_item);

    //
    return (
        <div className="FsItemIfRCount">
            <div className="FsItemIfRCount_row fashion-item-row align-items-center">
                <div className="fashion-item-label">
                    <span className="text-third">Số Lượng</span>
                </div>

                <div className="FsItemIfRCount_count">
                    <CountDownUpDiv
                        disabled={max == 0 || wait_add_cart}
                        count={count}
                        max={max}
                        min={min}
                        //
                        countDown={countDown}
                        countUp={countUp}
                        beforeCountNum={beforeCountNum}
                        countNum={countNum}
                        countNumDone={countNumDone}
                    />
                </div>

                <div className="FsItemIfRCount_quantity margin-left-5px">
                    <div className="FsItemIfRCount_quantity_total text-third">
                        {max} sản phẩm có sẵn
                    </div>

                    <div className="FsItemIfRCount_quantity_cart text-red text-align-center">
                        ({c_total_add_cart} trong giỏ)
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FsItemIfRCount;
