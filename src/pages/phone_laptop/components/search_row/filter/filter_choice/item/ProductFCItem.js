import React from 'react';
import PropTypes from 'prop-types';
// 
import './ProductFCItem.scss';

//
ProductFCItem.propTypes = {};

//
function ProductFCItem(props) {
    const {
        choice_ix,
        choice_item_ix,
        item,

        choose,
        choose_name,

        handleChooseFilter,
    } = props;

    const is_checked = choose.includes(choice_item_ix);

    //
    function onChooseFilter() {
        handleChooseFilter(choose_name, choice_item_ix);
    }

    //
    return (
        <div className="ProductFCItem">
            <div className="display-flex">
                <div className="ProductFCItem_left">
                    <input
                        id={`ProductSearch${choice_ix}_${choice_item_ix}`}
                        type="checkbox"
                        checked={is_checked}
                        onChange={onChooseFilter}
                    />
                </div>

                <label
                    className={is_checked ? 'label-field' : ''}
                    htmlFor={`ProductSearch${choice_ix}_${choice_item_ix}`}
                >
                    {item}
                </label>
            </div>
        </div>
    );
}

export default ProductFCItem;
