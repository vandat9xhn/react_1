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
            <div className="padding-12px font-600 font-16px">Selected</div>

            <div>
                {selected_arr.map((item, ix) => (
                    <div
                        key={item.id}
                        className="CUPTagSeletedMb_item border-bottom-blur"
                    >
                        <CUPTagUserItem
                            ix={ix}
                            name={item.first_name + ' ' + item.last_name}
                            picture={item.picture}
                            checked={item.checked}
                            handleCheckedUser={handleCheckedUser}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CUPTagSeletedMb;
