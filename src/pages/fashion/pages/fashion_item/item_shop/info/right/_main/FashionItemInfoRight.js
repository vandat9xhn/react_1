import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../../_context/ContextAPI';
//
import { useNewCount } from '../../../../../../../../_custom_hooks/useCount';
//
import ComponentSkeleton from '../../../../../../../../component/skeleton/component_skeleton/ComponentSkeleton';
import SkeletonDiv from '../../../../../../../../component/skeleton/skeleton_div/SkeletonDiv';
//
import FsItemIfRHead from '../head/FsItemIfRHead';
import FsItemIfRFoot from '../foot/FsItemIfRFoot';
import FsItemIfRBody from '../body/FsItemIfRBody';

//
FashionItemInfoRight.propTypes = {};

//
function FashionItemInfoRight({
    id,
    info_right,
    wait_add_cart,
    has_fetched,
    addToCart,
}) {
    //
    const { user } = useContext(context_api);

    //
    const {
        name,
        description,
        new_price,
        old_price,
        total_add_cart,
        quantity,
    } = info_right;

    //
    const {
        count,
        countUp,
        countDown,
        beforeCountNum,
        countNum,
        countNumDone,
        //
        handleInitialCount,
    } = useNewCount(0, 0, 0);

    //
    useEffect(() => {
        handleChangeCount(quantity - total_add_cart)
    }, [quantity, id]);

    /* -------------------------------- */

    //
    function handleChangeCount(new_max) {
        const new_min = new_max > 0 ? 1 : 0
        const new_count = new_min
        
        handleInitialCount(new_max, new_min, new_count);
    }

    //
    function onAddToCart() {
        addToCart(count).then(() => {
            handleChangeCount(quantity - total_add_cart - count);
        });
    }

    //
    return (
        <div className="FashionItemInfoRight">
            <div className={has_fetched ? '' : 'display-none'}>
                <div className="FashionItemInfoRight_head">
                    <FsItemIfRHead name={name} description={description} />
                </div><br />

                <div className="FashionItemInfoRight_body">
                    <FsItemIfRBody
                        new_price={new_price}
                        old_price={old_price}
                        count={count}
                        max={quantity - total_add_cart}
                        min={1}
                        disabled={quantity == total_add_cart || wait_add_cart}
                        //
                        countDown={countDown}
                        countUp={countUp}
                        beforeCountNum={beforeCountNum}
                        countNum={countNum}
                        countNumDone={countNumDone}
                    />
                </div><br />

                <div className="FashionItemInfoRight_foot">
                    <FsItemIfRFoot
                        max={quantity - total_add_cart}
                        total_add_cart={total_add_cart}
                        wait_add_cart={wait_add_cart}
                        addToCart={onAddToCart}
                    />
                </div>
            </div>

            <div>
                <ComponentSkeleton
                    component={<SkeletonDiv num={4} />}
                    has_fetched={has_fetched}
                />
            </div>
        </div>
    );
}

export default FashionItemInfoRight;
