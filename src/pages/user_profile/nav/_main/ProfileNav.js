import React from 'react';
//
import { data_sk_link_arr } from '../../../../_data/profile/main_link';
//
import ActionsProfileOther from '../../../../component/actions_profile/other/ActionsProfileOther';
import ProfileLayoutUserSticky from '../../../../component/profile_layout/user_sticky/ProfileLayoutUserSticky';
import ProfileLayoutNav from '../../../../component/profile_layout/nav/_layout/ProfileLayoutNav';
//
import ProfileNavItem from '../item/ProfileNavItem';
//
import './ProfileNav.scss';

//
function ProfileNav({ user_id, user_name, user_pic, handleAction }) {
    //
    return (
        <ProfileLayoutNav
            left_main_elm={
                <ul className="ProfileNav_list flex-grow-1 display-flex list-none h-100per padding-top-3px">
                    {data_sk_link_arr.map((item, ix) => (
                        <li key={ix} className="ProfileNav_item">
                            <ProfileNavItem sk={item.sk} title={item.title} />
                        </li>
                    ))}
                </ul>
            }
            left_sticky_elm={
                <div className="display-flex h-100per padding-y-2px">
                    <ProfileLayoutUserSticky
                        link_to={`/profile/${user_id}`}
                        picture={user_pic}
                        name={user_name}
                    />
                </div>
            }
            right_elm={
                <div className="display-flex align-items-center h-100per">
                    <ActionsProfileOther
                        user_id={user_id}
                        handleAction={handleAction}
                    />
                </div>
            }
        />
    );
}

export default ProfileNav;
