import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { useDataShowMore } from '../../../../_hooks/useDataShowMore';
//
import ScreenBlur from '../../components/frame/blur/ScreenBlur';
import ScreenBlurHead from '../../components/part/head/ScreenBlurHead';
import ScreenBlurShowMore from '../../components/part/foot/ScreenBlurShowMore';
//
import './ScreenHistory.scss';

//
export function openScreenHistory({
    openScreenFloor,

    title,
    handle_API_History_L,
    HisComponent,
    ...data_his
}) {
    openScreenFloor({
        FloorComponent: ScreenHistory,
        title: title,
        handle_API_History_L: handle_API_History_L,
        HisComponent: HisComponent,
        ...data_his,
    });
}

//
ScreenHistory.propTypes = {};

//
function ScreenHistory({
    closeScreen,

    title,
    handle_API_History_L,

    HisComponent,
    ...data_his
}) {
    //
    const { data_state, getData_API } = useDataShowMore({
        initial_arr: [],
        handle_API_L: handle_API_History_L,
    });

    const { data_arr, count, has_fetched, is_fetching } = data_state;

    //
    useEffect(() => {
        getData_API();
    }, []);

    //
    function showMoreHistory() {
        getData_API();
    }

    //
    return (
        <ScreenBlur
            closeScreen={closeScreen}
            waiting={!has_fetched && is_fetching}
        >
            <div
                className={`${
                    has_fetched ? 'padding-bottom-10px' : 'display-none'
                }`}
            >
                <ScreenBlurHead title={title} closeScreenBlur={closeScreen} />

                <div className="ScreenBlur_body_contain scroll-thin">
                    <HisComponent histories={data_arr} {...data_his} />
                </div>

                <ScreenBlurShowMore
                    is_show_more={count > data_arr.length}
                    is_fetching={is_fetching}
                    handleShowMore={showMoreHistory}
                />
            </div>
        </ScreenBlur>
    );
}

export default ScreenHistory;
