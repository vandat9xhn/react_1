import React from 'react';
//
import { data_sk_link_arr } from '../../../../_data/profile/main_link';
//
import ProfileActionsOther from '../../info/actions/other/ProfileActionsOther';
import ProfileMoreItem from '../item/ProfileMoreItem';
//
import './ProfileMore.scss';

//
function ProfileMore({ user_id, handleAction }) {
    //
    return (
        <div className="ProfileMore pos-rel margin-auto border-top-blur">
            <ul className="ProfileMore_list flex-grow-1 display-flex list-none overflow-x-auto">
                {data_sk_link_arr.map((item, ix) => (
                    <li key={ix} className="ProfileMore_item">
                        <ProfileMoreItem sk={item.sk} title={item.title} />
                    </li>
                ))}
            </ul>

            <div className="pos-abs right-0 y-center z-index-1">
                <ProfileActionsOther
                    user_id={user_id}
                    handleAction={handleAction}
                />
            </div>
        </div>
    );
}

export default ProfileMore;
