import React from 'react';
import PropTypes from 'prop-types';
//
import RadioItemCustom from '../item/RadioItemCustom';

//
RadioListCustom.propTypes = {
    list: PropTypes.array,
    active_ix: PropTypes.number,
    handleChoose: PropTypes.func,
};

//
function RadioListCustom({ list, active_ix, handleChoose }) {
    //
    return (
        <div>
            {list.map((item, ix) => (
                <div key={`RadioListCustom_${ix}`}>
                    <RadioItemCustom
                        title={item.title}
                        ix={ix}
                        active_ix={active_ix}
                        handleChoose={handleChoose}
                    />
                </div>
            ))}
        </div>
    );
}

export default RadioListCustom;
