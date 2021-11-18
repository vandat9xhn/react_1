import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import observeToDo from '../../../../../_some_function/observerToDo';
//
import { handle_API_FbSearch_L } from '../../../../../_handle_api/fb_search/recently';
//
import { useDataShowMore } from '../../../../../_hooks/useDataShowMore';
//
import CircleLoading from '../../../../waiting/circle_loading/CircleLoading';
import FbSearchHistoryUser from '../item/user/FbSearchHistoryUser';
import FbSearchHistoryKey from '../item/key/FbSearchHistoryKey';

//
FbSearchHistory.propTypes = {};

//
function FbSearchHistory({ params_api = {} }) {
    //
    const { data_state, getData_API } = useDataShowMore({
        handle_API_L: (c_count) =>
            handle_API_FbSearch_L({
                c_count: c_count,
                params: { filter: 'recently', ...params_api },
            }),
    });

    const { data_arr, count, has_fetched, is_fetching } = data_state;

    //
    const ref_main = useRef(null);

    //
    useEffect(() => {
        observeToDo({ elm: ref_main.current, callback: getData_API });
    }, []);

    //
    return (
        <div ref={ref_main} className="FbSearchHistory padding-8px text-333">
            <div className={`${has_fetched ? '' : 'display-none'}`}>
                <div className="flex-between-center margin-8px line-20px">
                    <h2 className="font-17px font-600">Recently searches</h2>

                    <Link to={`/fb-search/edit`}>Edit</Link>
                </div>

                <div>
                    {data_arr.map((item, ix) => (
                        <div key={item.id}>
                            {item.type == 'user' ? (
                                <FbSearchHistoryUser user={item.user} />
                            ) : (
                                <FbSearchHistoryKey
                                    search_key={item.search_key}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {is_fetching ? (
                <div className="display-flex-center padding-y-5px">
                    <CircleLoading is_fetching={true} />
                </div>
            ) : null}

            {has_fetched && count == 0 ? (
                <div className="text-align-center text-third font-13px">
                    No recently search
                </div>
            ) : null}
        </div>
    );
}

export default FbSearchHistory;
