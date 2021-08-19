import React from 'react';
// 
import { data_sk_link_arr } from '../../../../_data/profile/main_link';
//
import ProfileMoreItem from '../item/ProfileMoreItem';
//
import './ProfileMore.scss';

//
function ProfileMore(props) {
    //
    return (
        <div className="ProfileMore box-shadow-1 bg-primary padding-4px overflow-x-auto">
            <div className="width-fit-content margin-auto">
                <ul className="ProfileMore_list display-flex list-none">
                    {data_sk_link_arr.map((item, ix) => (
                        <li key={`${ix}`} className="ProfileMore_item padding-x-8px">
                            <ProfileMoreItem sk={item.sk} title={item.title} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ProfileMore;
