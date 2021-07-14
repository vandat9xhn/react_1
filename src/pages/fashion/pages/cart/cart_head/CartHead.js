import React from 'react';
import PropTypes from 'prop-types';

//
CartHead.propTypes = {
    count_checked: PropTypes.number,
    count_cart: PropTypes.number,
    openConfirmDel: PropTypes.func,
    onCheckAll: PropTypes.func,
};

function CartHead({ count_checked, openConfirmDel, count_cart, onCheckAll }) {
    //
    return (
        <div>
            <div>
                <div
                    className={`FashionCart_del brs-5px ${
                        count_checked ? '' : 'opacity-05'
                    }`}
                    onClick={openConfirmDel}
                >
                    delete
                </div>
            </div>

            <div className="FashionCart_item-title box-shadow-1 bg-primary brs-5px">
                <div className="FashionCart_item-title-row display-flex align-items-center label-field">
                    <div className="FashionCart__check">
                        <input
                            type="checkbox"
                            checked={count_checked == count_cart}
                            onChange={onCheckAll}
                        />
                    </div>
                    <div className="FashionCart__name">Name</div>
                    <div className="FashionCart__calculate">
                        Quantity and Price
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartHead;
