import React from 'react';
import PropTypes from 'prop-types';
//
import FlexDiv from '../../../../../../../component/some_div/flex_div/FlexDiv';
//
import './ProductFCItem.scss';

//
ProductFCItem.propTypes = {};

//
function ProductFCItem({
    choice_ix,
    choice_item_ix,
    item,

    choose,
    choose_name,

    handleChooseFilter,
}) {
    //
    const is_checked = choose.includes(choice_item_ix);

    //
    function onChooseFilter() {
        handleChooseFilter(choose_name, choice_item_ix);
    }

    //
    return (
        <label
            className="ProductFCItem display-block cursor-pointer hv-bg-blur brs-5px"
            htmlFor={`ProductSearch${choice_ix}_${choice_item_ix}`}
        >
            <FlexDiv
                ComponentLeft={
                    <input
                        id={`ProductSearch${choice_ix}_${choice_item_ix}`}
                        className="cursor-pointer"
                        type="checkbox"
                        checked={is_checked}
                        onChange={onChooseFilter}
                    />
                }
                ComponentRight={
                    <div className={`${is_checked ? 'label-field' : ''}`}>
                        {item}
                    </div>
                }
            />
        </label>
    );
}

export default ProductFCItem;
