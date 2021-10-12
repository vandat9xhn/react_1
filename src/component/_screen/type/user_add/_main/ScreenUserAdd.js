import React, { useEffect } from 'react';
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
import './ScreenUserAdd.scss';

//
export function openScreenUserAdd({
    openScreenFloor,

    title,
    is_center = true,
    handle_API_UserAdd_L,
}) {
    openScreenFloor({
        FloorComponent: ScreenUserAdd,
        title: title,
        is_center: is_center,
        handle_API_UserAdd_L: handle_API_UserAdd_L,
    });
}

//
ScreenUserAdd.propTypes = {};

//
function ScreenUserAdd({
    title,
    is_center,

    handle_API_UserAdd_L,
    closeScreen,
}) {
    //
    const { data_state, getData_API } = useDataShowMore({
        initial_arr: [],
        handle_API_L: handle_API_UserAdd_L,
    });

    const { data_arr, count, is_fetching, has_fetched } = data_state;

    //
    useEffect(() => {
        getData_API();
    }, []);

    //
    function showMoreUserAdd() {
        getData_API();
    }

    //
    function handleSendAddFriend(friend_id) {
        console.log(friend_id);
    }

    //
    return (
        <ScreenBlur closeScreen={closeScreen}>
            <div className="ScreenUserAdd_contain">
                <ScreenBlurHead
                    is_center={is_center}
                    title={title}
                    closeScreenBlur={closeScreen}
                />

                <div
                    className={`ScreenBlur_body ${
                        has_fetched ? '' : 'display-none'
                    }`}
                >
                    <div className="ScreenBlur_body_contain scroll-thin">
                        {data_arr.map((item, ix) => (
                            <UserAdd
                                key={`ScreenLike_${ix}`}
                                user={item.user}
                                handleSendAddFriend={handleSendAddFriend}
                            />
                        ))}
                    </div>
                </div>

                <ScreenBlurShowMore
                    is_show_more={count > data_arr.length}
                    is_fetching={is_fetching}
                    handleShowMore={showMoreUserAdd}
                />
            </div>
        </ScreenBlur>
    );
}

export default ScreenUserAdd;
