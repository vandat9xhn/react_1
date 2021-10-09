import React from 'react';
import PropTypes from 'prop-types';
//
import CUPTagUserItem from '../item/CUPTagUserItemMb';

//
CUPTagSeletedMb.propTypes = {};

//
function CUPTagSeletedMb({ selected_arr, handleCheckedUser }) {
    //
    return (
        <div className="CUPTagSeletedMb">
            {selected_arr.map((item, ix) => (
                <div className="CUPTagSeletedMb_item border-bottom-blur">
                    <CUPTagUserItem
                        ix={ix}
                        name={item.first_name + ' ' + item.last_name}
                        checked={item.checked}
                        handleCheckedUser={handleCheckedUser}
                    />
                </div>
            ))}
        </div>
    );
}

export default CUPTagSeletedMb;
