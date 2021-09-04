import React from 'react';
import PropTypes from 'prop-types';

//
SelectFABodyItem.propTypes = {};

//
function SelectFABodyItem({ ix, body_item, is_active, chooseBodyItem }) {
    //
    function onChooseBodyItem() {
        chooseBodyItem({
            new_body_ix: ix,
            new_body_str: body_item,
        });
    }

    //
    return (
        <div
            className={`SelectFABodyItem padding-x-12px padding-y-8px cursor-pointer hv-bg-blur ${
                is_active ? 'color-fashion' : ''
            }`}
            onClick={onChooseBodyItem}
        >
            {body_item}
        </div>
    );
}

export default SelectFABodyItem;
