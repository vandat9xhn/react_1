import React from 'react';
import PropTypes from 'prop-types';
// 
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
// 
import './ProductCFTItem.scss';

// 
ProductCFTItem.propTypes = {};

// 
function ProductCFTItem(props) {
    const {ix, current_name, arr_item, closeCurrentItem} = props;

    // 
    function onCloseCurrentFilterItem(){
        closeCurrentItem(current_name, ix)
    }

    // 
    return (
        <div>
            <div className="ProductCFTItem_title brs-5px">
                {arr_item}
            </div>

            <div
                className="ProductCFTItem_del cursor-pointer hv-opacity"
                onClick={onCloseCurrentFilterItem}
                title="Delete"
            >
                <IconsArrow y={400} size_icon="0.8rem" />
            </div>
        </div>
    );
}

export default ProductCFTItem;
