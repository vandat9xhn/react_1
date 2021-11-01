import React, { useContext } from 'react';
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
import FriendsSentFriend from '../friend/FriendsSentFriend';
//
import './FriendsSent.scss';

//
FriendsSent.propTypes = {};

//
function FriendsSent({ showProfile }) {
    //
    const { closeScreenFloor } = useContext(context_api);

    //
    useMakeBodyHidden();

    //
    const { data_state, getData_API, removeFriendRequest } = useFriendsSuggest({
        value_request: true,
    });

    const { data_arr, count, is_fetching } = data_state;

    // ----

    //
    function handleShowMore() {
        getData_API();
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

                <div className="FriendsSent_body padding-x-8px">
                    <div className="FriendsSent_count padding-5px font-600">
                        {count} sent request{count >= 2 ? 's' : ''}
                    </div>

                    <div>
                        {data_arr.map((profile, ix) => (
                            <div key={profile.id}>
                                <FriendsSentFriend
                                    profile={profile}
                                    has_cancelled={!profile.sent}
                                    handleCancel={() => removeFriendRequest(ix)}
                                    showProfile={showProfile}
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
