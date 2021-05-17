import React from 'react';
import PropTypes from 'prop-types';

import './TypeItem.scss';
//
TypeItem.propTypes = {};

//
function TypeItem(props) {
    const { type_ix, url, title, handleChangeTypeBuy } = props;
    //
    function onChangeTypeBuy() {
        handleChangeTypeBuy(type_ix);
    }

    //
    return (
        <div className="TypeItem">
            <div className="TypeItem_contain">
                <div className="TypeItem_row">
                    <div>
                        <img src={url} alt="" width="30" height="40" />
                    </div>

                    <div>
                        <input type="radio" name="type_buy" onClick={onChangeTypeBuy} />
                    </div>
                    <div>{title}</div>
                </div>
            </div>
        </div>
    );
}

export default TypeItem;
