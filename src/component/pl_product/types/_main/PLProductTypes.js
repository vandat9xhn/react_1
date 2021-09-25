import React from 'react';
import PropTypes from 'prop-types';
//
import PLProductTypesItem from '../item/PLProductTypesItem';

//
PLProductTypes.propTypes = {};

//
function PLProductTypes({ type_arr, type_ix, handleChangeType }) {
    //
    return (
        <div className="PLProductTypes">
            <ul className="display-flex flex-wrap list-none">
                {type_arr.map((item, ix) => (
                    <li key={ix} className={`${ix == 0 ? '' : 'margin-left-5px'}`}>
                        <PLProductTypesItem
                            ix={ix}
                            is_active={type_ix == ix}
                            title={item.title}
                            handleClick={handleChangeType}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PLProductTypes;
