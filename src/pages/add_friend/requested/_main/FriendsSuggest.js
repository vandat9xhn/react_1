import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../_context/ContextAPI';
//
import FriendsLayOut from '../../_components/layout/FriendsLayOut';
import FriendsLeftHead from '../../_components/left_head/FriendsLeftHead';
import FriendsRequestLeft from '../left/_main/FriendsRequestLeft';
import { openScreenWithElm } from '../../../../component/_screen/type/with_elm/ScreenWithElm';
import FriendsSent from '../../sent/_main/FriendsSent';

//
FriendsRequest.propTypes = {};

//
function FriendsRequest(props) {
    //
    const { openScreenFloor } = useContext(context_api);

    //
    function showProfile(profile_id) {
        console.log(profile_id);
    }

    //
    function openSentRequest() {
        openScreenWithElm({
            openScreenFloor: openScreenFloor,
            elm: <FriendsSent />,
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
                ComponentRight={<div></div>}
            />
        </div>
    );
}

export default FriendsRequest;
