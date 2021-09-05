import React from 'react';
import PropTypes from 'prop-types';
// 
import './FsBShopMessageBuy.scss';

//
FsBShopMessageBuy.propTypes = {};

//
function FsBShopMessageBuy(props) {
    //
    return (
        <div className="FsBShopMessageBuy">
            <div className="FsBShopMessageBuy_row display-flex align-items-center">
                <div className="margin-right-15px">Lời nhắn:</div>

                <div className="flex-grow-1">
                    <input
                        className="FsBShopMessageBuy_input w-100per padding-x-12px padding-y-10px border-blur brs-2px"
                        type="text"
                        placeholder="Lưu ý cho Người bán..."
                    />
                </div>
            </div>
        </div>
    );
}

export default FsBShopMessageBuy;
