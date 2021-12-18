import React from 'react';
//
import { IS_MOBILE } from '../../../../_constant/Constant';
//
import {
    data_sk_link_arr,
    more_link_arr,
} from '../../../../_data/profile/main_link';
//
import ActionsProfileOther from '../../../../component/actions_profile/other/ActionsProfileOther';
import ProfileLayoutUserSticky from '../../../../component/profile_layout/user_sticky/ProfileLayoutUserSticky';
import ProfileLayoutNav from '../../../../component/profile_layout/nav/_layout/ProfileLayoutNav';
import ProfileLayoutNavMore from '../../../../component/profile_layout/nav/more/_main/ProfileLayoutNavMore';
//
import ProfileNavItem from '../item/ProfileNavItem';
import ProfileNavMoreItem from '../more/item/ProfileNavMoreItem';
//
import './ProfileNav.scss';

//
function ProfileNav({ user_id, user_name, user_pic, handleAction }) {
    //
    return (
        <ProfileLayoutNav
            left_main_elm={
                <ul className="ProfileNav_list flex-grow-1 display-flex list-none h-100per padding-top-3px">
                    {[
                        ...data_sk_link_arr,
                        ...(IS_MOBILE ? more_link_arr : []),
                    ].map((item, ix) => (
                        <li key={ix} className="ProfileNav_item">
                            <ProfileNavItem sk={item.sk} title={item.title} />
                        </li>
                    ))}

                    {IS_MOBILE ? null : (
                        <li className="ProfileNav_item">
                            <ProfileLayoutNavMore
                                more_link_arr={more_link_arr}
                                //
                                has_item_component={true}
                                item_props={{ user_id: user_id }}
                                ItemComponent={ProfileNavMoreItem}
                            />
                        </li>
                    )}
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
                IS_MOBILE ? null : (
                    <div className="display-flex align-items-center h-100per">
                        <ActionsProfileOther
                            user_id={user_id}
                            handleAction={handleAction}
                        />
                    </div>
                )
            }
        />
    );
}

export default ProfileNav;
