import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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
    const [share_state, setShareState] = useState({
        share_arr: [],
        count_share: 0,

        is_fetching: false,
        has_fetched: false,
    });

    const { share_arr, count_share, is_fetching, has_fetched } = share_state;

    // 
    useEffect(() => {
        getData_API_Share()
    }, [])

    //
    async function getData_API_Share() {
        setShareState({
            ...share_state,
            is_fetching: true,
        });

        const [new_share_arr, new_count_share] = await handle_API_Share_L();

        setShareState((share_state) => ({
            ...share_state,
            share_arr: has_fetched
                ? [...share_arr, ...new_share_arr]
                : new_share_arr,
            count_share: has_fetched ? count_share : new_count_share,

            is_fetching: false,
            has_fetched: true,
        }));
    }

    //
    function showMoreShare() {
        getData_API_Share();
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
                        {share_arr.map((share, ix) => (
                            <UserAdd
                                key={`ScreenLike_${ix}`}
                                user={share.user}
                                handleSendAddFriend={handleSendAddFriend}
                            />
                        ))}
                    </div>
                </div>

                <ScreenBlurShowMore
                    is_show_more={count_share > share_arr.length}
                    is_fetching={is_fetching}
                    handleShowMore={showMoreShare}
                />
            </div>
        </ScreenBlur>
    );
}

export default ScreenShare;
