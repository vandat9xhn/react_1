import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_FBGroupPageMember_R } from '../../../../../_handle_api/fb_group/page_member';
//
import GPMemHead from '../head/_main/GPMemHead';
import GPMemYou from '../you/GPMemYou';
import GPMemAdmins from '../admins/_main/GPMemAdmins';
import GPMemExperts from '../experts/_main/GPMemExperts';
import GPMemSame from '../same/_main/GPMemSame';
import GPMemNear from '../near/_main/GPMemNear';
import GPMemNew from '../new/_main/GPMemNew';
import GPMemFriends from '../friends/_main/GPMemFriends';
//
import './GroupPageMembers.scss';

//
GroupPageMembers.propTypes = {};

//
function GroupPageMembers({
    group_id,
    is_admin,
    is_moderate,

    member_count,
    member_recent_count,
}) {
    //
    const [state_obj, setStateObj] = useState({
        group_member_obj: {},
        has_fetched: false,
    });

    const { group_member_obj, has_fetched } = state_obj;

    const {
        you_obj,

        admin_arr,
        admin_count,

        expert_arr,
        expert_count,

        friend_arr,
        friend_count,

        same_arr,
        same_count,

        near_arr,
        near_count,

        new_arr,
        new_count,
    } = group_member_obj;

    //
    useEffect(() => {
        getData_API();
    }, []);

    // -----

    //
    async function getData_API() {
        const data = await handle_API_FBGroupPageMember_R({
            group_id: group_id,
        });

        setStateObj((state_obj) => {
            return {
                ...state_obj,
                group_member_obj: data,
                has_fetched: true,
            };
        });
    }

    // -----

    //
    if (!has_fetched) {
        return <div className="h-100vh"></div>;
    }

    //
    return (
        <div className="GroupPageMembers display-flex justify-content-center">
            <div
                className={`GroupPageMembers_contain max-w-100per padding-16px brs-8px-pc bg-primary box-shadow-1 ${
                    is_admin && member_recent_count ? 'w-500px' : 'w-680px'
                }`}
            >
                <div>
                    <GPMemHead member_count={member_count} />
                </div>

                <hr className="GroupPageMembers_hr gr-page-hr" />

                <div>
                    <GPMemYou you_obj={you_obj} />
                </div>

                <hr className="GroupPageMembers_hr gr-page-hr" />

                {admin_count ? (
                    <div>
                        <GPMemAdmins
                            group_id={group_id}
                            admin_arr={admin_arr}
                            admin_count={admin_count}
                        />

                        <hr className="GroupPageMembers_hr gr-page-hr" />
                    </div>
                ) : null}

                {!expert_count ? null : (
                    <div>
                        <GPMemExperts
                            group_id={group_id}
                            expert_arr={expert_arr}
                            expert_count={expert_count}
                        />

                        <hr className="GroupPageMembers_hr gr-page-hr" />
                    </div>
                )}

                {!friend_count ? null : (
                    <div>
                        <GPMemFriends
                            group_id={group_id}
                            friend_arr={friend_arr}
                            friend_count={friend_count}
                        />

                        <hr className="GroupPageMembers_hr gr-page-hr" />
                    </div>
                )}

                {!same_count ? null : (
                    <div>
                        <GPMemSame
                            group_id={group_id}
                            same_arr={same_arr}
                            same_count={same_count}
                        />

                        <hr className="GroupPageMembers_hr gr-page-hr" />
                    </div>
                )}

                {!near_count ? null : (
                    <div>
                        <GPMemNear
                            group_id={group_id}
                            near_arr={near_arr}
                            near_count={near_count}
                        />

                        <hr className="GroupPageMembers_hr gr-page-hr" />
                    </div>
                )}

                {!new_count ? null : (
                    <div>
                        <GPMemNew
                            group_id={group_id}
                            new_arr={new_arr}
                            new_count={new_count}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default GroupPageMembers;
