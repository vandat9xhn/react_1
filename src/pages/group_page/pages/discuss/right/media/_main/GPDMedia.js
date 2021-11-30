import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import { handle_API_FbGroupMedia_L } from '../../../../../../../_handle_api/fb_group/media';
//
import { useDataShowMore } from '../../../../../../../_hooks/useDataShowMore';
//
import GroupPageAboutSeeAll from '../../../../../_components/about_see_all/GroupPageAboutSeeAll';
//
import './GPDMedia.scss';

//
GPDMedia.propTypes = {};

//
function GPDMedia({ group_id, handleReady }) {
    //
    const { data_state, refreshData_API } = useDataShowMore({
        handle_API_L: () =>
            handle_API_FbGroupMedia_L({
                group_id: group_id,
                params: { size: 4 },
            }),
    });

    const { data_arr, count, has_fetched } = data_state;

    //
    useEffect(() => {
        getData_API_AtFirst();
    }, []);

    // ------

    //
    async function getData_API_AtFirst() {
        await refreshData_API();

        handleReady();
    }

    // ----

    if (has_fetched && count == 0) {
        return null;
    }

    //
    return (
        <div className="GPDMedia GroupPageDiscussRight_part_contain">
            <h2 className="GroupPageDiscussRight_part_title margin-bottom-8px">Recent media</h2>

            <div className="brs-8px border-blur overflow-hidden">
                <ul className="display-flex space-between flex-wrap list-none">
                    {data_arr.map((item, ix) => (
                        <li
                            key={item.id}
                            className={`GPDMedia_item pos-rel ${
                                ix >= 3 ? 'margin-top-4px' : ''
                            }`}
                        >
                            <Link
                                className="display-block padding-top-100per"
                                to={`/post/photos/${item.id}`}
                            >
                                <img
                                    className="pos-abs-100 object-fit-cover"
                                    src={item.img}
                                    alt=""
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {count > data_arr.length ? (
                <div className="margin-top-10px">
                    <GroupPageAboutSeeAll
                        link_to={`/group/${group_id}/media`}
                    />
                </div>
            ) : null}
        </div>
    );
}

export default GPDMedia;
