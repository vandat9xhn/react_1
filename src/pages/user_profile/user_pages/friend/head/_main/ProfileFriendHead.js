import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
//
import ActionsMultiList from '../../../../../../component/actions_multi_list/_main/ActionsMultiList';
import PostInputSearch from '../../../../../../component/posts/common/input_search/PostInputSearch';
//
import './ProfileFriendHead.scss';

//
ProfileFriendHead.propTypes = {};

//
function ProfileFriendHead({ value_search, changeSearch }) {
    //
    function handle_API_L() {
        return [[{ title: 'Edit privacy', name: 'edit_privacy' }]];
    }

    //
    function handleAction(params) {
        console.log(params);
    }

    //
    return (
        <div className="ProfileFriendHead padding-x-8px">
            <div className="flex-between-center">
                <h2 className="profile-route-title">Friends</h2>

                {IS_MOBILE ? (
                    <div></div>
                ) : (
                    <div className="display-flex align-items-center">
                        <div className="ProfileFriendHead_search">
                            <PostInputSearch
                                value={value_search}
                                placeholder="Search"
                                hide_key_when_focus={false}
                                //
                                changeSearch={changeSearch}
                            />
                        </div>

                        <Link
                            className="ProfileFriendHead_right_item ProfileFriendHead_link"
                            to="/friends"
                        >
                            Friend requests
                        </Link>

                        <Link
                            className="ProfileFriendHead_right_item ProfileFriendHead_link"
                            to="/friends"
                        >
                            Find friends
                        </Link>

                        <div className="ProfileFriendHead_right_item">
                            <ActionsMultiList
                                handle_API_L={handle_API_L}
                                handleAction={handleAction}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProfileFriendHead;
