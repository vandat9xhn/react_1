import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_FbGroupTopic_L } from '../../../../../../../_handle_api/fb_group/topics';
//
import { useDataShowMore } from '../../../../../../../_hooks/useDataShowMore';
//
import IconsAction from '../../../../../../../_icons_svg/icons_action/IconsAction';
//
import GPDTopic from '../item/_main/GPDTopic';
import GroupPageAboutSeeAll from '../../../../../_components/about_see_all/GroupPageAboutSeeAll';

//
GPDTopics.propTypes = {};

//
function GPDTopics({ group_id, is_admin, handleReady }) {
    //
    const { data_state, setDataState, refreshData_API } = useDataShowMore({
        handle_API_L: () =>
            handle_API_FbGroupTopic_L({
                group_id: group_id,
                params: { size: 3 },
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

    // ------

    //
    function handleAction({ ix = 0, action_name = '' }) {
        if (['hide', 'unhide'].includes(action_name)) {
            setDataState((data_state) => {
                const new_data_arr = [...data_state.data_arr];
                new_data_arr[ix].is_hidden = !new_data_arr[ix].is_hidden;

                return {
                    ...data_state,
                    data_arr: new_data_arr,
                };
            });
        }
    }

    // ----

    if (has_fetched && count == 0) {
        return null;
    }

    //
    return (
        <div className="GPDTopics GroupPageDiscussRight_part_contain">
            <h2 className="GroupPageDiscussRight_part_title margin-bottom-8px">
                <div className="inline-block margin-right-5px">
                    Popular topics in this group
                </div>

                <IconsAction x={600} size_icon="20px" />
            </h2>

            <div>
                <ul className="list-none">
                    {data_arr.map((item, ix) => (
                        <li key={item.id} className="margin-top-6px">
                            <GPDTopic
                                ix={ix}
                                //
                                group_id={group_id}
                                is_admin={is_admin}
                                //
                                hash_tag={item.hash_tag}
                                post_count={item.post_count}
                                is_hidden={item.is_hidden}
                                pinned={item.pinned}
                                //
                                handleAction={handleAction}
                            />
                        </li>
                    ))}
                </ul>
            </div>

            {count > data_arr.length ? (
                <div className="margin-top-10px">
                    <GroupPageAboutSeeAll
                        link_to={`/group/${group_id}/topics`}
                    />
                </div>
            ) : null}
        </div>
    );
}

export default GPDTopics;
