import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { initial_group_page_about } from '../../../../../_initial/group/page';
//
import { handle_API_FbGroupAbout_R } from '../../../../../_handle_api/fb_group/page_about';
//
import './GroupPageAboutCommon.scss';
//
import GPAboutGroup from '../group/_main/GPAboutGroup';
import GPAbTransparency from '../transparency/_main/GPAbTransparency';
import GPAbRecommended from '../recommended/_main/GPAbRecommended';
import GPAbMembers from '../members/_main/GPAbMembers';
import GPAbActivity from '../activity/_main/GPAbActivity';
//
import './GroupPageAbout.scss';

//
GroupPageAbout.propTypes = {};

//
function GroupPageAbout({ group_id }) {
    //
    const [state_obj, setStateObj] = useState({
        group_obj: initial_group_page_about(),
        has_fetched: false,
    });

    const { group_obj, has_fetched } = state_obj;

    const {
        description,
        privacy,
        visibility,
        type_obj,

        member_count,
        created_time,
        recommended_count,

        friend_arr,
        friend_name_str,
        admin_arr,
        admin_name_str,

        post_day_count,
        post_month_count,
        member_week_count,
    } = group_obj;

    //
    useEffect(() => {
        getData_API();
    }, []);

    // -------

    //
    async function getData_API() {
        const data = await handle_API_FbGroupAbout_R({ group_id: group_id });

        setStateObj((state_obj) => {
            return {
                ...state_obj,
                group_obj: data,
                has_fetched: true,
            };
        });
    }

    // ------

    if (!has_fetched) {
        return <div className="h-100vh"></div>;
    }

    //
    return (
        <div className="GroupPageAbout margin-auto w-680px padding-y-16px">
            <div className="GroupPageAbout_part">
                <GPAboutGroup
                    description={description}
                    privacy={privacy}
                    visibility={visibility}
                    type_obj={type_obj}
                    has_fetched={has_fetched}
                />
            </div>

            <div className="GroupPageAbout_part">
                <GPAbTransparency created_time={created_time} />
            </div>

            <div className="GroupPageAbout_part">
                <GPAbRecommended recommended_count={recommended_count} />
            </div>

            <div className="GroupPageAbout_part">
                <GPAbMembers
                    group_id={group_id}
                    member_count={member_count}
                    friend_arr={friend_arr}
                    friend_name_str={friend_name_str}
                    admin_arr={admin_arr}
                    admin_name_str={admin_name_str}
                />
            </div>

            <div>
                <GPAbActivity
                    post_day_count={post_day_count}
                    post_month_count={post_month_count}
                    member_count={member_count}
                    member_week_count={member_week_count}
                    created_time={created_time}
                />
            </div>
        </div>
    );
}

export default GroupPageAbout;
