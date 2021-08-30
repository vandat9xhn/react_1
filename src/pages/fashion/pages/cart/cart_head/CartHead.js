import React from 'react';
import PropTypes from 'prop-types';
// 
import './CartHead.scss';

//
CartHead.propTypes = {};

function CartHead({}) {
    //
    return (
        <div className="CartHead padding-8px bg-primary">
            <div>
                Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận
                chuyển bạn nhé!
            </div>
        </div>
    );
}

export default CartHead;
