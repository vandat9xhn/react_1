import React from 'react';
import PropTypes from 'prop-types';
//
import CUPTagUserItem from '../item/CUPTagUserItemMb';

//
CUPTagSelectedMb.propTypes = {};

//
function CUPTagSelectedMb({ selected_arr, handleCheckedUser, clearTagUser }) {
    //
    return (
        <div className="CUPTagSelectedMb">
            <div className="flex-between-center padding-12px">
                <div className="font-600 font-16px">Selected</div>

                <div
                    className="text-blue font-13px font-500"
                    onClick={clearTagUser}
                >
                    Clear
                </div>
            </div>

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

export default CUPTagSelectedMb;
