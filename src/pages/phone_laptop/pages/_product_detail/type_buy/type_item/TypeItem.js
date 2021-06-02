import React from 'react';
import PropTypes from 'prop-types';

import './TypeItem.scss';
//
TypeItem.propTypes = {};

//
function TypeItem({ ix, is_active, url, title, handleChangeTypeBuy }) {
    //
    function onChangeTypeBuy() {
        handleChangeTypeBuy(ix);
    }

    //
    return (
        <label
            htmlFor={`TypeItem_phone_${ix}`}
            className="TypeItem padding-8px cursor-pointer"
        >
            <div className="TypeItem_row flex-col display-flex align-items-center">
                <div>
                    <img src={url} alt="" width="80" height="100" />
                </div>

                <div>
                    <input
                        id={`TypeItem_phone_${ix}`}
                        type="radio"
                        name="type_buy"
                        checked={is_active}
                        onChange={onChangeTypeBuy}
                    />
                </div>

                <div>{title}</div>
            </div>
        </label>
    );
}

export default TypeItem;
