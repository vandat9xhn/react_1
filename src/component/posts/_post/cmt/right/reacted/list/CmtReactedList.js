import React from 'react';
import PropTypes from 'prop-types';
//
import CmtReactedItem from '../item/CmtReactedItem';

//
CmtReactedList.propTypes = {};

//
function CmtReactedList({ list_people, count_people }) {
    //
    return (
        <div className="CmtReactedList padding-10px bg-shadow-8 brs-8px">
            {list_people.map((item, ix) => (
                <div key={ix} className="display-flex-center padding-y-2px">
                    <CmtReactedItem
                        reacted_ix={item.reacted_ix}
                        reacted_item_count={item.count}
                    />
                </div>
            ))}
        </div>
    );
}

export default CmtReactedList;
