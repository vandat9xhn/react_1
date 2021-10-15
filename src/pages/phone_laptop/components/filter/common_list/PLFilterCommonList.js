import React from 'react';
import PropTypes from 'prop-types';
//
import PLFilterItem from '../item/PLFilterItem';
import PLFilterConfirm from '../confirm/PLFilterConfirm';
//
import './PLFilterCommonList.scss';

//
PLFilterCommonList.propTypes = {};

//
function PLFilterCommonList({
    filter_count,
    filter_result_count,
    is_fetching,

    filter_ix,
    item_arr,

    chooseFilterItem,
    handleFilter,
    clearFilter,
}) {
    //
    function onClearFilter() {
        clearFilter(filter_ix);
    }

    //
    return (
        <div className="PLFilterCommonList padding-10px brs-5px bg-primary box-shadow-filter-phone">
            <ul className="display-flex flex-wrap list-none">
                {item_arr.map((item, item_ix) => (
                    <li key={item_ix} className="padding-5px">
                        <PLFilterItem
                            filter_ix={filter_ix}
                            item_ix={item_ix}
                            checked={item.checked}
                            chooseFilterItem={chooseFilterItem}
                        >
                            {item.title}
                        </PLFilterItem>
                    </li>
                ))}
            </ul>

            <div
                className={`PLFilterCommonList_confirm overflow-hidden ${
                    filter_count || location.search
                        ? 'margin-top-20px'
                        : 'PLFilterCommonList_confirm-none'
                }`}
            >
                <PLFilterConfirm
                    filter_result_count={filter_result_count}
                    is_fetching={is_fetching}
                    handleFilter={handleFilter}
                    clearFilter={onClearFilter}
                />
            </div>
        </div>
    );
}

export default PLFilterCommonList;
