import React from 'react';
//
import { IS_MOBILE } from '../../../../_constant/Constant';
//
import { useStickyOver } from '../../../../_hooks/useStickyOver';
//
import { data_sk_link_arr } from '../../../../_data/profile/main_link';
//
import ActionsProfileOther from '../../../../component/actions_profile/other/ActionsProfileOther';
import ProfileLayoutUserSticky from '../../../../component/profile_layout/user_sticky/ProfileLayoutUserSticky';
//
import ProfileMoreItem from '../item/ProfileMoreItem';
//
import './ProfileMore.scss';

//
function ProfileMore({ user_id, user_name, user_pic, handleAction }) {
    //
    const { scroll_over, ref_fake_sticky } = useStickyOver({});

    //
    return (
        <div className="ProfileMore">
            {IS_MOBILE ? null : (
                <div
                    ref={ref_fake_sticky}
                    className="ProfileMore_fake_sticky pos-abs left-0 w-100per h-1px pointer-events-none"
                ></div>
            )}

            <div className="ProfileMore_contain margin-auto h-100per border-top-blur overflow-x-auto scroll-height-0">
                <div className="flex-between-center h-100per padding-y-3px">
                    <div
                        className={`h-100per ${
                            scroll_over ? 'display-none' : ''
                        }`}
                    >
                        <ul className="ProfileMore_list flex-grow-1 display-flex list-none h-100per">
                            {data_sk_link_arr.map((item, ix) => (
                                <li key={ix} className="ProfileMore_item">
                                    <ProfileMoreItem
                                        sk={item.sk}
                                        title={item.title}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div
                        className={`h-100per ${
                            scroll_over ? '' : 'display-none'
                        }`}
                    >
                        <ProfileLayoutUserSticky
                            link_to={`/profile/${user_id}`}
                            picture={user_pic}
                            name={user_name}
                        />
                    </div>

                    {IS_MOBILE ? null : (
                        <div className="padding-x-8px">
                            <ActionsProfileOther
                                user_id={user_id}
                                handleAction={handleAction}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProfileMore;
