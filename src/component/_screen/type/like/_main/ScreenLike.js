import React from 'react';
import PropTypes from 'prop-types';
//
import { useMultiDataKey } from '../../../../../_hooks/useMultiDataKey';
// 
import ScreenBlur from '../../../components/frame/blur/ScreenBlur';
import ScreenLikeContain from '../contain/ScreenLikeContain';

//
export function openScreenLike({
    openScreenFloor,
    type_like,
    reacted_count_arr = [] || [{ reacted_ix: 0, count: 0 }],
    ItemComponent,
    item_props = {},
    handle_API_Like_L,
}) {
    openScreenFloor({
        FloorComponent: ScreenLike,
        type_like: type_like,
        reacted_count_arr: reacted_count_arr,
        ItemComponent: ItemComponent,
        item_props: item_props,
        handle_API_Like_L: handle_API_Like_L,
    });
}

//
ScreenLike.propTypes = {};

//
function ScreenLike({
    type_like,
    reacted_count_arr,

    ItemComponent,
    item_props,

    handle_API_Like_L,
    closeScreen,
}) {
    //
    const { state_obj, getData_API, handleChangeKey } = useMultiDataKey({
        initial_key: type_like,
        handle_API_L: handle_API_Like_L,
    });

    const { obj, c_key, is_fetching } = state_obj;
    const { data_arr, count, has_fetched } = obj[c_key];

    //
    useEffect(() => {
        getData_API(type_like);
    }, []);

    // ------

    //
    function showMoreLike() {
        getData_API(c_key);
    }

    //
    return (
        <ScreenBlur closeScreen={closeScreen}>
            <ScreenLikeContain
                reacted_count_arr={reacted_count_arr}
                // use_close={use_close}
                
                c_key={c_key}
                data_arr={data_arr}
                count={count}
                has_fetched={has_fetched}
                is_fetching={is_fetching}
            
                ItemComponent={ItemComponent}
                item_props={item_props}
            
                handleChangeKey={handleChangeKey}
                handleShowMore={showMoreLike}
                closeScreen={closeScreen}
            />
        </ScreenBlur>
    );
}

export default ScreenLike;
