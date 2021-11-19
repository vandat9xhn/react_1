import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import { handle_API_FbSearchGroup_L } from '../../../../../../../../../_handle_api/fb_search/groups';
//
import { useObserverShowMore } from '../../../../../../../../../_hooks/useObserverShowMore';
//
import './GroupLeftJoined.scss';

//
GroupLeftJoined.propTypes = {};

//
function GroupLeftJoined({ ref_scroll }) {
    //
    const ref_fake_elm = useRef(null);

    //
    const { data_state, is_max, getData_API, observerShowMore } =
        useObserverShowMore({
            handle_API_L: (c_count) =>
                handle_API_FbSearchGroup_L({
                    c_count: c_count,
                    params: { type: 'joined' },
                }),
        });

    //
    useEffect(() => {
        getData_API();

        observerShowMore({
            fake_elm_end: ref_fake_elm.current,
            root: ref_scroll.current,
            rootMargin: '0px 0px 200px 0px',
            way_scroll: 'to_bottom',
            margin: 200,
        });
    }, []);

    //
    return (
        <div className="GroupLeftJoined margin-x-8px padding-y-12px border-top-blur">
            <h2 className="margin-bottom-5px padding-x-8px font-17px font-600">
                Group you've joined
            </h2>

            {data_state.data_arr.map((item, ix) => (
                <div key={item.id}>
                    <Link
                        className="display-flex padding-8px brs-6px color-inherit hv-bg-fb"
                        to={`/group/${item.id}`}
                    >
                        <img
                            className="brs-8px border-blur object-fit-cover"
                            src={item.picture}
                            alt=""
                            width="60"
                            height="60"
                        />

                        <div className="margin-left-12px">
                            <div className="wk-box-vertical line-clamp-2 overflow-hidden font-500">
                                {item.name}
                            </div>

                            <div></div>
                        </div>
                    </Link>
                </div>
            ))}

            <div
                ref={ref_fake_elm}
                className={`GroupLeftJoined_fake ${
                    is_max.current ? 'display-none' : ''
                }`}
            ></div>
        </div>
    );
}

export default GroupLeftJoined;
