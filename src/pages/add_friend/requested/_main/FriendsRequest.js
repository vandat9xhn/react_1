import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../_context/ContextAPI';
//
import { openScreenWithElm } from '../../../../component/_screen/type/with_elm/ScreenWithElm';
//
import { useFriendsShowProfile } from '../../../../_hooks/friends/useFriendsShowProfile';
//
import FriendsLayOut from '../../_components/layout/_main/FriendsLayOut';
import FriendsLeftHead from '../../_components/left_head/FriendsLeftHead';
import FriendsRequestLeft from '../left/_main/FriendsRequestLeft';
import FriendsSent from '../../sent/_main/FriendsSent';
import FriendsShowProfile from '../../_components/profile/_main/FriendsShowProfile';

//
FriendsRequest.propTypes = {};

//
function FriendsRequest(props) {
    //
    const { openScreenFloor } = useContext(context_api);

    //
    const { showProfile } = useFriendsShowProfile({
        friends_pathname: '/friends/requests',
    });

    //
    useEffect(() => {
        document.title = 'Requests';
    }, []);

    // ------

    //
    function openSentRequest() {
        openScreenWithElm({
            openScreenFloor: openScreenFloor,
            elm: <FriendsSent showProfile={showProfile} />,
        });
    }

    //
    return (
        <div>
            <FriendsLayOut
                ComponentLeftHead={<FriendsLeftHead title="Friend requests" />}
                ComponentLeftContain={
                    <FriendsRequestLeft
                        showProfile={showProfile}
                        openSentRequest={openSentRequest}
                    />
                }
                ComponentRight={<FriendsShowProfile />}
            />
        </div>
    );
}

export default FriendsRequest;
