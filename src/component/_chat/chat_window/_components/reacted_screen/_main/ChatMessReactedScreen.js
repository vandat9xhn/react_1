import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
//
import { useMakeBodyHidden } from '../../../../../../_hooks/useMakeBodyHidden';
import { useMultiDataKey } from '../../../../../../_hooks/useMultiDataKey';
//
import ScreenBlurHead from '../../../../../_screen/components/part/head/ScreenBlurHead';
import ScreenLikeContain from '../../../../../_screen/type/like/contain/ScreenLikeContain';
import ChatMessReactedScreenItem from '../item/ChatMessReactedScreenItem';
//
import './ChatMessReactedScreen.scss';

//
ChatMessReactedScreen.propTypes = {};

//
function ChatMessReactedScreen({
    reacted_count_arr,
    handle_API_Like_L,
    chooseListTypeLike,
}) {
    //
    const { user, closeScreenFloor } = useContext(context_api);

    //
    useMakeBodyHidden({
        use_z_index: true,
        screen_z_index: 41,
    });

    //
    const { state_obj, setStateObj, getData_API, handleChangeKey } =
        useMultiDataKey({
            initial_key: -1,
            handle_API_L: handle_API_Like_L,
        });

    const { obj, c_key, is_fetching } = state_obj;
    const { data_arr, count, has_fetched } = obj[c_key];

    //
    useEffect(() => {
        getData_API(-1);
    }, []);

    // ------

    //
    function showMoreLike() {
        getData_API(c_key);
    }

    //
    function removeReacted() {
        chooseListTypeLike(-1);
        
        setStateObj((state_obj) => {
            const new_obj = { ...state_obj.obj };
            const { data_arr } = new_obj[c_key];

            const user_ix = data_arr.findIndex(
                (item) => item.user.id == user.id
            );
            user_ix >= 0 && data_arr.splice(user_ix, 1);

            return {
                ...state_obj,
                obj: new_obj,
            };
        });
    }

    //
    return (
        <div className="ChatMessReactedScreen">
            <div className="ChatMessReactedScreen_contain bg-primary brs-8px box-shadow-fb">
                <div>
                    <ScreenBlurHead
                        title="Message reactions"
                        is_center={true}
                        closeScreenBlur={closeScreenFloor}
                    />
                </div>

                <div>
                    <ScreenLikeContain
                        reacted_count_arr={reacted_count_arr}
                        use_close={false}
                        c_key={c_key}
                        data_arr={data_arr}
                        count={count}
                        has_fetched={has_fetched}
                        is_fetching={is_fetching}
                        ItemComponent={ChatMessReactedScreenItem}
                        item_props={{ removeReacted: removeReacted }}
                        handleChangeKey={handleChangeKey}
                        handleShowMore={showMoreLike}
                        closeScreen={closeScreenFloor}
                    />
                </div>
            </div>
        </div>
    );
}

export default ChatMessReactedScreen;
