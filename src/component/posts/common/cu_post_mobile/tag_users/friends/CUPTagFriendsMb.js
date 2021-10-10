import React from 'react';
import PropTypes from 'prop-types';
//
import CUPTagUserItem from '../item/CUPTagUserItemMb';
//
import './CUPTagFriendsMb.scss';

//
CUPTagFriendsMb.propTypes = {};

//
function CUPTagFriendsMb({ friend_arr, handleCheckedUser }) {
    //
    return (
        <div className="CUPTagFriendsMb">
            <div className="padding-12px font-600 font-16px">Friends</div>

            <div>
                {friend_arr.map((item, ix) => (
                    <div
                        key={item.id}
                        className="CUPTagFriendsMb_item border-bottom-blur"
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

export default CUPTagFriendsMb;
