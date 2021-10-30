import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../_context/ContextAPI';
//
import { useFriendsSuggest } from '../../../../_hooks/friends/useFriendsSuggest';
import { useMakeBodyHidden } from '../../../../_hooks/useMakeBodyHidden';
//
import ScreenBlurHead from '../../../../component/_screen/components/part/head/ScreenBlurHead';
import ScreenBlurShowMore from '../../../../component/_screen/components/part/foot/ScreenBlurShowMore';
//
import AddFriendMiniSuggest from '../../../../component/add_friend_mini/suggest/_main/AddFriendMiniSuggest';
//
import './FriendsSent.scss';

//
FriendsSent.propTypes = {};

//
function FriendsSent(props) {
    //
    const use_history = useHistory();

    //
    const { closeScreenFloor } = useContext(context_api);

    //
    useMakeBodyHidden();

    //
    const {
        // ref_root,
        // ref_fake_elm,
        data_state,
        getData_API,

        addFriendRequest,
        removeFriendRequest,
    } = useFriendsSuggest({ value_request: true });

    const { data_arr, count, is_fetching, has_fetched } = data_state;

    // ----

    //
    function handleShowMore() {
        getData_API();
    }

    //
    function showProfile(profile_ix) {
        use_history.push(`/profile/${data_arr[profile_ix].id}`);
    }

    //
    return (
        <div className="FriendsSent margin-auto">
            <div className="FriendsSent_contain bg-primary brs-8px box-shadow-fb">
                <div>
                    <ScreenBlurHead
                        title={'Sent request'}
                        is_center={true}
                        closeScreenBlur={closeScreenFloor}
                    />
                </div>

                <div className="padding-x-8px">
                    <div className="margin-y-5px font-600">
                        {count} sent request{count >= 2 ? 's' : ''}
                    </div>

                    <div>
                        {data_arr.map((profile, ix) => (
                            <div key={profile.id}>
                                <AddFriendMiniSuggest
                                    profile={profile}
                                    sent={profile.sent}
                                    addFriend={() => addFriendRequest(ix)}
                                    removeFriend={() => removeFriendRequest(ix)}
                                    showProfile={() => showProfile(ix)}
                                />
                            </div>
                        ))}
                    </div>

                    <div>
                        <ScreenBlurShowMore
                            is_show_more={count > data_arr.length}
                            is_fetching={is_fetching}
                            handleShowMore={handleShowMore}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FriendsSent;
