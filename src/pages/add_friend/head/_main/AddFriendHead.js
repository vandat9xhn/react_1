import React from 'react';
import PropTypes from 'prop-types';
//
import { title_add_friend_arr } from '../../__common_data/AddFriendObj';

import ListRequestFriend from '../list_request_friend/ListRequestFriend';
//
import './AddFriendHead.scss';

//
AddFriendHead.propTypes = {
    c_request: PropTypes.string,
    changeCurrentList: PropTypes.func,
};

//
function AddFriendHead({ c_request, changeCurrentList }) {
    //
    return (
        <div className="AddFriendHead">
            <div className="display-flex">
                {title_add_friend_arr.map((item, index) => (
                    <div
                        className="AddFriendHead_item"
                        key={`AddFriend_requests_${index}`}
                    >
                        <ListRequestFriend
                            title={item.title}
                            request={item.request}
                            is_active={c_request == item.request}
                            changeCurrentList={changeCurrentList}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AddFriendHead;
