import React from 'react';
import PropTypes from 'prop-types';
//
import './PLFilterItem.scss';

//
PLFilterItem.propTypes = {};

//
function PLFilterItem({
    filter_ix,
    item_ix,

    children,
    checked,

    chooseFilterItem,
}) {
    //
    function onChooseFilterItem() {
        chooseFilterItem({ filter_ix: filter_ix, item_ix: item_ix });
    }

    //
    return (
        <div
            className={`PLFilterItem padding-5px brs-4px cursor-pointer ${
                checked ? 'border-current text-blue' : 'border-blur'
            }`}
            onClick={onChooseFilterItem}
        >
            {children}
        </div>
    );
}

export default PLFilterItem;
