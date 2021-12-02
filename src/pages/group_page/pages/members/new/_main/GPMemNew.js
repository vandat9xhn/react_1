import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_FbGroupMember_L } from '../../../../../../_handle_api/fb_group/member';
// 
import { useObserverShowMore } from '../../../../../../_hooks/useObserverShowMore';
//
import GPMemsPartTitle from '../../_components/part_title/GPMemsPartTitle';
import GPMemUserPage from '../../_components/user_page/_main/GPMemUserPage';

//
GPMemNew.propTypes = {};

//
function GPMemNew({ group_id, new_arr, new_count }) {
    //
    const ref_fake_elm = useRef(null);

    //
    const { data_state, is_max, observerShowMore } = useObserverShowMore({
        initial_arr: new_arr,
        handle_API_L: (c_count) =>
            handle_API_FbGroupMember_L({
                c_count: c_count,
                group_id: group_id,
                type: 'new',
            }),
    });

    const { data_arr } = data_state;

    //
    useEffect(() => {
        // console.log(new_count, new_arr.length);
        // new_count > new_arr.length &&
            observerShowMore({
                fake_elm_end: ref_fake_elm.current,
                rootMargin: '0px',
                way_scroll: 'to_bottom',
                margin: 0,
            });
    }, []);

    // ------

    // 
    function handleAction(params) {
        console.log(params);
    }

    //
    return (
        <div className="GPMemNew">
            <div>
                <GPMemsPartTitle
                    title={'New to the group'}
                    count={0}
                    show_count={false}
                    info={
                        "This list includes people who've joined the group, as well as people who are previewing the group. Anyone who's been invited and approved can preview the content in the group."
                    }
                    has_learn_more={false}
                    link_learn_more={''}
                />
            </div>

            <div className="margin-top-10px">
                {data_arr.map((item, ix) => (
                    <div key={item.id}>
                        <GPMemUserPage
                            group_id={group_id}
                            has_action_other={true}
                            item={item}
                            handleAction={handleAction}
                        />
                    </div>
                ))}
            </div>

            <div ref={ref_fake_elm} className="h-1px"></div>

            {is_max.current ? null : <div className="h-250px"></div>}
        </div>
    );
}

export default GPMemNew;
