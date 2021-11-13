import React from 'react';
import PropTypes from 'prop-types';
//
import SelectOneSearchOption from '../item/SelectOneSearchOption';
// 
import './SelectOneSearchOptions.scss';

//
SelectOneSearchOptions.propTypes = {
    option_arr: PropTypes.array,
    ItemComponent: PropTypes.func,
    choseOption: PropTypes.func,
};

SelectOneSearchOptions.defaultProps = {
    ItemComponent: SelectOneSearchOption,
};

//
function SelectOneSearchOptions({ option_arr, ItemComponent, choseOption }) {
    //
    return (
        <div className="SelectOneSearchOptions padding-8px brs-8px bg-primary box-shadow-fb overflow-y-auto scroll-thin">
            {option_arr.map((item, ix) => (
                <div key={ix}>
                    <ItemComponent
                        ix={ix}
                        {...item}
                        choseOption={choseOption}
                    />
                </div>
            ))}
        </div>
    );
}

export default SelectOneSearchOptions;
