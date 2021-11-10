import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { waitingToDoLast } from '../../../../../_some_function/waitingToDoLast';
//
import { handle_API_FbSearch_L } from '../../../../../_handle_api/fb_search/recently';
//
import { useDataShowMore } from '../../../../../_hooks/useDataShowMore';
//
import IconsInput from '../../../../../_icons_svg/Icons_input/IconsInput';
//
import CircleLoading from '../../../../waiting/circle_loading/CircleLoading';
import FbSearchInputSearchUser from '../item/user/FbSearchInputSearchUser';
import FbSearchInputSearchKey from '../item/key/FbSearchHistoryKey';

//
FbSearchInputList.propTypes = {};

//
function FbSearchInputList({ value_search }) {
    //
    const ref_main = useRef(null);
    const ref_value_search = useRef('');
    const ref_interval = useRef(null);

    //
    const { data_state, data_count, getData_API, refreshData_API } =
        useDataShowMore({
            handle_API_L: (c_count) =>
                handle_API_FbSearch_L({
                    c_count: c_count,
                    params: {
                        filter: 'search',
                        search: ref_value_search.current,
                    },
                }),
        });

    const { data_arr, count, has_fetched, is_fetching } = data_state;

    //
    useEffect(() => {
        if (ref_main.current && value_search.trim()) {
            ref_value_search.current = value_search;

            waitingToDoLast({
                ref_interval: ref_interval,
                time: 500,
                callback: refreshData_API,
            });
        }
    }, [value_search]);

    //
    return (
        <div ref={ref_main} className="FbSearchInputList padding-8px text-333">
            <div
                className={`${
                    has_fetched && data_arr.length > 0 ? '' : 'display-none'
                }`}
            >
                <div>
                    {data_arr.map((item, ix) => (
                        <div key={ix}>
                            {item.type == 'user' ? (
                                <FbSearchInputSearchUser user={item.user} />
                            ) : (
                                <FbSearchInputSearchKey
                                    search_key={item.search_key}
                                />
                            )}
                        </div>
                    ))}
                </div>

                <Link to={`/search/${value_search}`}>
                    <div className="display-flex align-items-center padding-8px">
                        <div className="flex-shrink-0 btn-icon-36px bg-blue text-white">
                            <IconsInput y={200} size_icon="18px" />
                        </div>

                        <div className="margin-left-12px text-nowrap">
                            Search for {value_search}
                        </div>
                    </div>
                </Link>
            </div>

            {is_fetching ? (
                <div className="display-flex-center padding-y-5px">
                    <CircleLoading is_fetching={true} />
                </div>
            ) : null}

            {has_fetched && count == 0 ? (
                <div className="text-align-center text-third font-13px">
                    No results
                </div>
            ) : null}
        </div>
    );
}

export default FbSearchInputList;
