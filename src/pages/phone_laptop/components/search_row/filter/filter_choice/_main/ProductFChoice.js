import React from 'react';
import PropTypes from 'prop-types';
//
import ProductFChoiceItem from '../item/ProductFCItem';
// 
import './ProductFChoice.scss';

//
ProductFChoice.propTypes = {};

//
function ProductFChoice(props) {
    const {
        choice_ix,

        title,
        arr,
        choose,
        choose_name,

        handleChooseFilter,
    } = props;

    //
    return (
        <div>
            <div className="ProductFCItem_label label-field">{title}</div>

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
