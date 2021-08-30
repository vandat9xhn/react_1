import React from 'react';
import PropTypes from 'prop-types';
// 
import FsCartSummary from '../../fashion/pages/cart/summary/_main/FsCartSummary';

// 
LearnFsCartSummary.propTypes = {
    
};

// 
function LearnFsCartSummary(props) {
    // 
    function handleChooseVoucher(params) {
        
    }

    // 
    function handleCheckedCoin(params) {
        
    }

    // 
    function handleSaveLiked(params) {
        
    }

    // 
    function handleDeleteItemChecked(params) {
        
    }

    // 
    function handleCheckedAll(params) {
        
    }

    // 
    function handleGoingToBuy(params) {
        
    }

    // 
    return (
        <div className="fashion-width">
            <FsCartSummary
                voucher_name=""
                coin={100}
                checked_coin={false}
                item_count={14}
                item_checked_count={2}
                total_price={20000}
                // 
                handleChooseVoucher={handleChooseVoucher}
                handleCheckedCoin={handleCheckedCoin}
                handleSaveLiked={handleSaveLiked}
                handleDeleteItemChecked={handleDeleteItemChecked}
                handleCheckedAll={handleCheckedAll}
                handleGoingToBuy={handleGoingToBuy}
            />
        </div>
    );
}

export default LearnFsCartSummary;