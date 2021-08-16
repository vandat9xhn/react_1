import React from 'react';
import PropTypes from 'prop-types';
//
import DiscountSymbol from '../../../component/symbol/discount/DiscountSymbol';
import FashionFlashSaleBar from '../../fashion/components/flash_sale_bar/FashionFlashSaleBar';

//
LearnFashion.propTypes = {};

//
function LearnFashion(props) {
    return (
        <div className="padding-8px">
            <DiscountSymbol discount={20} />

            <br />

            <FashionFlashSaleBar sold={28} total={30} />
        </div>
    );
}

export default LearnFashion;
