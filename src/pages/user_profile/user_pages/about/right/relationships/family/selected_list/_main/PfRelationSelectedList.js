import React from 'react';
import PropTypes from 'prop-types';
// 
import PfRelationSelectedItem from '../item/PfRelationSelectedItem';

//
PfRelationSelectedList.propTypes = {};

//
function PfRelationSelectedList({
    selected_item_arr,
    handleRemoveSelectedItem,
}) {
    return (
        <div>
            <div>
                {selected_item_arr.map((item, ix) => (
                    <div key={`PfRelationSelectedList_item_${item.id || ix}`}>
                        <PfRelationSelectedItem
                            item={item.friend}
                            ix={ix}
                            handleRemoveSelectedItem={handleRemoveSelectedItem}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PfRelationSelectedList;
