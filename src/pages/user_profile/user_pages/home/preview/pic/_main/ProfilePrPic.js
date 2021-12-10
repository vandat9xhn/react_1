import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import observeToDo from '../../../../../../../_some_function/observerToDo';
//
import { handle_API_VidPic_L } from '../../../../../../../_handle_api/profile/ProfileHandleAPI';
//
import { useMounted } from '../../../../../../../_hooks/useMounted';
//
import ProfilePrPicSkeleton from '../skeleton/ProfilePrPicSkeleton';
import ProfileLayoutHomePreview from '../../../../../../../component/profile_layout/home_preview/ProfileLayoutHomePreview';

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
        observeToDo({
            elm: ref_component.current,
            callback: getData_API_PicPreview,
            when_over: true,
        });
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
            <ProfileLayoutHomePreview
                title="Photos"
                link_to={location.pathname + '?sk=photos_all'}
                is_fetching={is_fetching}
                //
                ProfilePrSkeleton={ProfilePrPicSkeleton}
            >
                <div className="ProfilePrPic">
                    <div className="ProfilePrPic_row display-flex flex-wrap space-between">
                        {vid_pics.map((item, ix) => (
                            <div className="ProfilePrPic_item" key={ix}>
                                <ProfilePrPicItem
                                    id={item.id}
                                    vid_pic={item.vid_pic}
                                />
                            </div>
                        ))}
                    </div>

                    {vid_pics.length ? null : <div>No video, image</div>}
                </div>
            </ProfileLayoutHomePreview>
        </div>
    );
}

export default ProfilePrPic;
