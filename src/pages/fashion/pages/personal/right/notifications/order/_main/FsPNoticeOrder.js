import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_FsNotice_L } from '../../../../../../../../_handle_api/fashion/notice';
// 
import { useDataShowMore } from '../../../../../../../../_hooks/useDataShowMore';
//
import FetchingDiv from '../../../../../../../../component/some_div/fetching/FetchingDiv';
import ScreenBlurShowMore from '../../../../../../../../component/_screen/components/part/foot/ScreenBlurShowMore';
// 
import { FsPNotice_markAllAsRead } from '../../_state/FsPNotice_markAllAsRead';
import { FsPNOrder_handleDataState } from '../_state/_FsPNOrder_handleDataState';
// 
import FsPNOrderItem from '../item/_main/FsPNOrderItem';
import FsPNoticeMarkAll from '../../_components/mark_all/FsPNoticeMarkAll';

//
FsPNoticeOrder.propTypes = {};

//
function FsPNoticeOrder(props) {
    //
    const { data_state, setDataState, getData_API } = useDataShowMore({
        initial_arr: [],
        handle_API_L: handleDataState,
    });

    const { data_arr, count, has_fetched, is_fetching } = data_state;

    //
    useEffect(() => {
        getData_API();
    }, []);

    // -----

    //
    async function handleDataState({ c_count }) {
        const res = await handle_API_FsNotice_L({
            c_count: c_count,
            params: {
                notice_type: 'order',
            },
        });

        return FsPNOrder_handleDataState({ data: res.data });
    }

    // -----

    //
    function handleShowMore() {
        getData_API();
    }

    //
    function markAllAsRead() {
        FsPNotice_markAllAsRead({ setDataState: setDataState });
    }

    //
    return (
        <div className="FsPNoticeOrder bg-primary">
            {has_fetched ? (
                <div className="FsPNoticeOrder_contain">
                    <div className="border-bottom-blur">
                        <FsPNoticeMarkAll
                            has_new={data_arr.some((item) => !item.has_read)}
                            markAllAsRead={markAllAsRead}
                        />
                    </div>

                    {data_arr.map((item, ix) => (
                        <div
                            key={item.id}
                            className={`${
                                item.has_read ? '' : 'bg-fashion-heart'
                            }`}
                        >
                            <FsPNOrderItem
                                order_id={item.order_id}
                                img={item.img}
                                title={item.title}
                                info={item.info}
                                created_time={item.created_time}
                                process_arr={item.process_arr}
                            />
                        </div>
                    ))}

                    <div>
                        <ScreenBlurShowMore
                            title="Xem thêm"
                            is_fetching={is_fetching}
                            is_show_more={data_arr.length < count}
                            FetchingComponent={FetchingDiv}
                            handleShowMore={handleShowMore}
                        />
                    </div>
                </div>
            ) : (
                <div className="h-100per"></div>
            )}
        </div>
    );
}

export default FsPNoticeOrder;
