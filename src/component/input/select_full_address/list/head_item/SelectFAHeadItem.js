import React from 'react';
import PropTypes from 'prop-types';
//
import './SelectFAHeadItem.scss';

//
SelectFAHeadItem.propTypes = {};

//
function SelectFAHeadItem({
    ix,
    head_item,
    is_active,
    is_banned,
    chooseHeadItem,
}) {
    //
    function onChooseHeadItem() {
        if (!is_banned && !is_active) {
            chooseHeadItem(ix);
        }
    }

    //
    return (
        <div
            className={`SelectFAHeadItem padding-x-8px padding-y-12px ${
                is_active ? 'SelectFAHeadItem-active color-fashion' : ''
            } ${
                is_banned ? 'cursor-not-allowed opacity-05' : 'cursor-pointer'
            }`}
            onClick={onChooseHeadItem}
        >
            {head_item}
        </div>
    );
}

export default SelectFAHeadItem;
