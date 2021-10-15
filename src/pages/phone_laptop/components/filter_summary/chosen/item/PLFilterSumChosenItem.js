import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './PLFilterSumChosenItem.scss';

//
PLFilterSumChosenItem.propTypes = {};

//
function PLFilterSumChosenItem({
    filter_ix,
    item_ix,
    title,

    clearFilterItem,
}) {
    //
    function onClearFilterItem() {
        clearFilterItem({ filter_ix: filter_ix, item_ix: item_ix });
    }

    //
    return (
        <div
            className="PLFilterSumChosenItem padding-x-10px padding-y-2px border-blur brs-4px cursor-pointer"
            onClick={onClearFilterItem}
        >
            <div className="display-flex-center">
                <span className="margin-right-10px">{title}</span>

                <IconsArrow y={400} size_icon="15px" />
            </div>
        </div>
    );
}

export default PLFilterSumChosenItem;
