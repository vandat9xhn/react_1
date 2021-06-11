import React from 'react';
import PropTypes from 'prop-types';
//
import ProductFChoiceItem from '../item/ProductFCItem';
//
import './ProductFChoice.scss';

//
ProductFChoice.propTypes = {};

//
function ProductFChoice({
    choice_ix,

    title,
    arr,
    choose,
    choose_name,

    handleChooseFilter,
}) {
    //
    return (
        <div>
            <h4 className="ProductFCItem_label margin-0 text-secondary">
                {title}
            </h4>

            <div className="ProductFCItem_choice">
                {arr.map((item, index) => (
                    <div key={`ProductFCItem_arr_${index}`}>
                        <ProductFChoiceItem
                            choice_ix={choice_ix}
                            choice_item_ix={index}
                            item={item}
                            //
                            choose={choose}
                            choose_name={choose_name}
                            //
                            handleChooseFilter={handleChooseFilter}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductFChoice;
