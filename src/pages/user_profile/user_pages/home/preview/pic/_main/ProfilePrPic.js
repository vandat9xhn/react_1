import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { useMounted } from '../../../../../../../_hooks/useMounted';

import observeToDo from '../../../../../../../_some_function/observerToDo';
//
import { handle_API_VidPic_L } from '../../../../../../../_handle_api/profile/ProfileHandleAPI';

import ProfilePrCommon from '../../_common/preview_common/ProfilePrCommon';
import ProfilePrPicSkeleton from '../skeleton/ProfilePrPicSkeleton';

import ProfilePrPicItem from '../item/ProfilePrPicItem';
//
import './ProfilePrPic.scss';

//
function ProfilePrPic({ id, handleReady }) {
    //
    const [state_obj, setStateObj] = useState({
        vid_pics: [
            {
                id: 0,
                vid_pic: '',
            },
        ],
        is_fetching: true,
    });

    const { vid_pics, is_fetching } = state_obj;

    //
    const ref_component = useRef(null);

    //
    const mounted = useMounted();

    //
    useEffect(() => {
        observeToDo(ref_component.current, getData_API_PicPreview, 0, true);
    }, []);

    //
    async function getData_API_PicPreview() {
        setStateObj((state_obj) => ({
            ...state_obj,
            is_fetching: true,
        }));

        const { data } = await handle_API_VidPic_L(id, vid_pics.length);

        if (mounted) {
            setStateObj({
                vid_pics: data,
                is_fetching: false,
            });

            handleReady();
        }
    }

    //
    return (
        <div ref={ref_component}>
            <ProfilePrCommon
                title="Photos"
                sk="photos_all"
                is_fetching={is_fetching}
                ProfilePrSkeleton={ProfilePrPicSkeleton}
            >
                <div className="ProfilePrPic">
                    <div className="ProfilePrPic_row display-flex flex-wrap space-between">
                        {vid_pics.map((item, ix) => (
                            <div
                                className="ProfilePrPic_item"
                                key={`ProfilePrPic_${ix}`}
                            >
                                <ProfilePrPicItem
                                    id={item.id}
                                    vid_pic={item.vid_pic}
                                />
                            </div>
                        ))}
                    </div>

                    {vid_pics.length ? null : <div>No video, image</div>}
                </div>
            </ProfilePrCommon>
        </div>
    );
}

export default ProfilePrPic;
