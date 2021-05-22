import React from 'react';
import ProfileMoreItem from '../item/ProfileMoreItem';
//
import { common_sk_obj } from '../__common/ProfileMoreData';
//
import './ProfileMore.scss';

//
function ProfileMore(props) {

    //
    return (
        <div className="ProfileMore box-shadow-1 bg-primary">
            <div className="width-fit-content margin-auto">
                <ul className="ProfileMore_list display-flex list-none">
                    {common_sk_obj.map((item, ix) => (
                        <li
                            key={`ProfileMore_sk${ix}`}
                            className="ProfileMore_item"
                        >
                            <ProfileMoreItem
                                sk={item.sk}
                                title={item.title}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ProfileMore;
