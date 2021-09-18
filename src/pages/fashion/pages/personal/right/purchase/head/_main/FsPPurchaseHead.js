import React from 'react';
import PropTypes from 'prop-types';
//
import FsPPurchaseHeadItem from '../item/FsPPurchaseHeadItem';

//
FsPPurchaseHead.propTypes = {};

//
function FsPPurchaseHead({
    arr_purchase,
    count_new_arr,
    purchase_step,
    handleChoose,
}) {
    //
    return (
        <div className="FsPPurchaseHead bg-primary">
            <div className="FsPPurchaseHead_row flex-between-center">
                {arr_purchase.map((purchase_title, ix) => (
                    <div key={ix} className="flex-grow-1">
                        <FsPPurchaseHeadItem
                            ix={ix}
                            is_active={ix == purchase_step}
                            title={purchase_title}
                            count_new={count_new_arr[ix]}
                            handleChoose={handleChoose}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FsPPurchaseHead;
