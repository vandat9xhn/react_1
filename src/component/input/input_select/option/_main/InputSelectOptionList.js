import React from 'react';
import PropTypes from 'prop-types';
// 
import InputSelectOptionItem from '../option_item/InputSelectOptionItem';

//
InputSelectOptionList.propTypes = {};

//
function InputSelectOptionList({ value, option_item_arr, handleSelectOption }) {
    // 
    return (
        <div className={`InputSelectOptionList ${value ? '' : 'display-none'}`}>
            <div className="InputSelectOptionList_contain bg-primary box-shadow-1">
                <ul className="list-none">
                    {option_item_arr.map((item, ix) => (
                        <li key={`InputSelect_option_${ix}`}>
                            <InputSelectOptionItem
                                ix={ix}
                                item={item}
                                handleSelectOption={handleSelectOption}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default InputSelectOptionList;
