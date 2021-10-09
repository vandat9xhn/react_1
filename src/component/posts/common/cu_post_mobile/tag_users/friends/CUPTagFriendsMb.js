import React from 'react';
import PropTypes from 'prop-types';
//
import ScreenBlurShowMore from '../../../../../_screen/components/part/foot/ScreenBlurShowMore';
//
import CUPTagUserItem from '../item/CUPTagUserItemMb';

//
CUPTagFriendsMb.propTypes = {};

//
function CUPTagFriendsMb({
    friend_arr,
    has_more,
    is_fetching,

    handleShowMore,
    handleCheckedUser,
}) {
    //
    return (
        <div className="CUPTagFriendsMb">
            <div>
                {friend_arr.map((item, ix) => (
                    <div className="CUPTagFriendsMb_item border-bottom-blur">
                        <CUPTagUserItem
                            ix={ix}
                            name={item.first_name + ' ' + item.last_name}
                            checked={item.checked}
                            handleCheckedUser={handleCheckedUser}
                        />
                    </div>
                ))}
            </div>

            <div>
                <ScreenBlurShowMore
                    is_show_more={has_more}
                    is_fetching={is_fetching}
                    handleShowMore={handleShowMore}
                />
            </div>
        </div>
    );
}

export default CUPTagFriendsMb;
