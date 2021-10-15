import React from 'react';
import PropTypes from 'prop-types';
//
import PLFilterItem from '../../filter/item/PLFilterItem';

//
PLFilterSumCommonList.propTypes = {
    filter_ix: PropTypes.number,
    title: PropTypes.string,
    item_arr: PropTypes.array,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),

    chooseFilterItem: PropTypes.func,
};

PLFilterSumCommonList.defaultProps = {
    children: '',
};

//
function PLFilterSumCommonList({
    filter_ix,
    title,
    item_arr,
    children,

    chooseFilterItem,
}) {
    //
    return (
        <div className="PLFilterSumCommonList">
            <div className="PLFilterSumCommonList_title margin-bottom-5px font-700">
                {title}
            </div>

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

            <div>{children}</div>
        </div>
    );
}

export default PLFilterSumCommonList;
