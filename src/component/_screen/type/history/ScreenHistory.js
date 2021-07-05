import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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
    data_his = {},
}) {
    openScreenFloor({
        FloorComponent: ScreenHistory,
        title: title,
        handle_API_History_L: handle_API_History_L,
        HisComponent: HisComponent,
        data_his: data_his,
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
    data_his,
}) {
    //
    const [history_state, setHistoryState] = useState({
        histories: [],
        count_his: 0,
        has_fetched: false,
        is_fetching: false,
    });

    const { histories, count_his, has_fetched, is_fetching } = history_state;

    //
    useEffect(() => {
        getAPI_History();
    }, []);

    //
    async function getAPI_History() {
        try {
            setHistoryState({
                ...history_state,
                is_fetching: true,
            });

            const [data, new_count] = await handle_API_History_L(
                histories.length
            );

            setHistoryState({
                ...history_state,
                is_fetching: false,
                count_his: has_fetched ? count_his : new_count,
                has_fetched: true,
                histories: has_fetched ? [...histories, ...data] : data,
            });
        } catch (e) {
            console.log(e);
        }
    }

    //
    function showMoreHistory() {
        getAPI_History();
    }

    //
    return (
        <ScreenBlur
            closeScreen={closeScreen}
            waiting={!has_fetched && is_fetching}
        >
            <div className={`${has_fetched ? '' : 'display-none'}`}>
                <ScreenBlurHead title={title} closeScreenBlur={closeScreen} />

                <div className="ScreenBlur_body_contain scroll-thin">
                    <HisComponent histories={histories} {...data_his} />
                </div>

                <ScreenBlurShowMore
                    is_show_more={count_his > histories.length}
                    is_fetching={is_fetching}
                    handleShowMore={showMoreHistory}
                />
            </div>
        </ScreenBlur>
    );
}

export default ScreenHistory;
