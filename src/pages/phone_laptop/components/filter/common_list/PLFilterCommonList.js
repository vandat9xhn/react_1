import React from 'react';
import PropTypes from 'prop-types';
//
import PLFilterItem from '../item/PLFilterItem';
import PLFilterConfirm from '../confirm/PLFilterConfirm';

//
PLFilterCommonList.propTypes = {};

//
function PLFilterCommonList({
    count,
    is_fetching,

    filter_ix,
    item_arr,

    chooseFilterItem,
    handleFilter,
    clearFilter,
}) {
    //
    return (
        <div className="PLFilterCommonList padding-20px brs-5px bg-primary box-shadow-fb">
            <div className="margin-bottom-20px">
                <ul className="display-flex flex-wrap list-none">
                    {item_arr.map((item, item_ix) => (
                        <li key={item_ix} className="padding-5px">
                            <PLFilterItem
                                filter_ix={filter_ix}
                                item_ix={item_ix}
                                chooseFilterItem={chooseFilterItem}
                            >
                                {item.title}
                            </PLFilterItem>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <PLFilterConfirm
                    count={count}
                    is_fetching={is_fetching}
                    handleFilter={handleFilter}
                    clearFilter={clearFilter}
                />
            </div>
        </div>
    );
}

export default PLFilterCommonList;
