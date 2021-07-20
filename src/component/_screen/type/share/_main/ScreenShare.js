import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { useDataShowMore } from '../../../../../_hooks/useDataShowMore';
// 
import UserAdd from '../../../../user_add/UserAdd';
//
import ScreenBlur from '../../../components/frame/blur/ScreenBlur';
import ScreenBlurHead from '../../../components/part/head/ScreenBlurHead';
import ScreenBlurShowMore from '../../../components/part/foot/ScreenBlurShowMore';
//
import './ScreenShare.scss';

//
export function openScreenShare({
    openScreenFloor,

    title,
    handle_API_Share_L,
}) {
    openScreenFloor({
        FloorComponent: ScreenShare,
        title: title,
        handle_API_Share_L: handle_API_Share_L,
    });
}

//
ScreenShare.propTypes = {};

//
function ScreenShare({ closeScreen, title, handle_API_Share_L }) {
    //
    const { data_state, getData_API } = useDataShowMore({
        initial_arr: [],
        handle_API_L: handle_API_Share_L,
    });

    const { data_arr, count, is_fetching, has_fetched } = data_state;

    //
    useEffect(() => {
        getData_API();
    }, []);

    //
    function showMoreShare() {
        getData_API();
    }

    //
    function handleSendAddFriend(friend_id) {
        console.log(friend_id);
    }

    //
    return (
        <ScreenBlur closeScreen={closeScreen}>
            <div className="ScreenShare_contain">
                <ScreenBlurHead title={title} closeScreenBlur={closeScreen} />

                <div
                    className={`ScreenBlur_body ${
                        has_fetched ? '' : 'display-none'
                    }`}
                >
                    <div className="ScreenBlur_body_contain scroll-thin">
                        {data_arr.map((share, ix) => (
                            <UserAdd
                                key={`ScreenLike_${ix}`}
                                user={share.user}
                                handleSendAddFriend={handleSendAddFriend}
                            />
                        ))}
                    </div>
                </div>

                <ScreenBlurShowMore
                    is_show_more={count > data_arr.length}
                    is_fetching={is_fetching}
                    handleShowMore={showMoreShare}
                />
            </div>
        </ScreenBlur>
    );
}

export default ScreenShare;
