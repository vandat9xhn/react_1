import React from 'react';
import PropTypes from 'prop-types';
//
import InputSelectedItem from '../selected_item/InputSelectedItem';

//
InputSelectedList.propTypes = {};

function InputSelectedList({ selected_item_arr, handleRemoveSelectedItem }) {
    // 
    return (
        <div className="inline-block">
            {selected_item_arr.map((item, ix) => (
                <div
                    key={`InputSelect_selected_${ix}`}
                    className="InputSelect_head-item inline-block"
                >
                    <InputSelectedItem
                        ix={ix}
                        item={item}
                        handleRemoveSelectedItem={handleRemoveSelectedItem}
                    />
                </div>
            ))}
        </div>
    );
}

export default InputSelectedList;
