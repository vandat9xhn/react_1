import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import { useFriendsSuggest } from '../../../../../_hooks/friends/useFriendsSuggest';
//
import AddFriendMiniSuggest from '../../../../../component/add_friend_mini/suggest/_main/AddFriendMiniSuggest';
//
import './FriendsSuggestLeft.scss';

//
FriendsSuggestLeft.propTypes = {};

//
function FriendsSuggestLeft({ showProfile }) {
    //
    const {
        ref_root,
        ref_fake_elm,
        data_state,

        addFriendRequest,
        removeFriendRequest,
    } = useFriendsSuggest({});

    const { data_arr } = data_state;

    //
    return (
        <div className="FriendsSuggestLeft h-100per padding-left-8px">
            <div
                ref={ref_root}
                className="max-h-100per overflow-y-auto scroll-thin"
            >
                <div className="padding-x-8px padding-y-5px font-17px font-600">
                    People you may know
                </div>

                <div>
                    {data_arr.map((profile, ix) => (
                        <div key={profile.id}>
                            <AddFriendMiniSuggest
                                profile={profile}
                                sent={profile.sent}
                                addFriend={() => addFriendRequest(ix)}
                                removeFriend={() => removeFriendRequest(ix)}
                                showProfile={() => showProfile(profile.id)}
                            />
                        </div>
                    ))}

                    <div ref={ref_fake_elm} className="padding-1px"></div>
                </div>
            </div>
        </div>
    );
}

export default FriendsSuggestLeft;
